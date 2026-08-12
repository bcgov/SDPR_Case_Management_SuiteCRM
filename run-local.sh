#!/bin/bash
# =============================================================================
# run-local.sh
# Starts the SuiteCRM and Advocase containers for local development.
#
# The database is owned by docker/docker-compose.yaml. This script brings it up
# via Compose if it isn't already running; it never creates mariadb-galera
# itself, otherwise the two would collide on the container name.
#
# ⚠️  Compatibility: macOS and Linux only.
#     Windows users must use WSL (Windows Subsystem for Linux).
#
# Prerequisites:
#   - Images must already be built (run atomic-rebuild.sh first)
#
# Run from anywhere:
#   chmod +x run-local.sh
#   ./run-local.sh [docker-hub-username]
# =============================================================================
set -euo pipefail
trap 'EXIT_CODE=$?; echo "❌ Failed: $BASH_COMMAND (exit $EXIT_CODE)" >&2; echo "   Run: docker logs suitecrm  or  docker logs advocase" >&2; exit $EXIT_CODE' ERR

NETWORK="advocase"

if [[ -n "${1:-}" ]]; then
  DOCKER_USERNAME="$1"
else
  read -rp "==> Enter your Docker Hub username: " DOCKER_USERNAME
fi

for IMAGE in "$DOCKER_USERNAME/suitecrm" "$DOCKER_USERNAME/advocase"; do
  if ! docker image inspect "$IMAGE" >/dev/null 2>&1; then
    echo "❌ Image not found: $IMAGE" >&2
    echo "   Build it first with ./atomic-rebuild.sh" >&2
    exit 1
  fi
done

echo "==> Removing any previous app containers..."
docker rm -f suitecrm advocase mariadb-galera >/dev/null 2>&1 || true

echo "==> Ensuring the $NETWORK network exists..."
docker network create "$NETWORK" >/dev/null 2>&1 || true

# Shared by both containers; the only differences are SITE_URL, host port and image.
COMMON_ENV=(
  -e SUITE_DB_HOST=mariadb
  -e SUITE_DB_USER=mariadb_suitecrm
  -e SUITE_DB_PASSW=mariadb123
  -e SUITE_DB_NAME=mariadb_suitecrm
  -e SUITE_DB_PORT=3306
   # Symfony/Doctrine only reads DATABASE_URL; SUITE_DB_* is legacy-side config.
  -e DATABASE_URL=mysql://mariadb_suitecrm:mariadb123@mariadb:3306/mariadb_suitecrm
  -e APP_SECRET=secret32CharplayprojectzomboidB42
  -e AUTH_TYPE=native
  -e SAML_AUTOCREATE_ATTRIBUTES_MAP='{}'
  -e TEMPORARY_FILE_BASE_DIR=/tmp
  -e SUITECRM_ADMIN_PWD=admin
  -e DEV_DEBUG=true
  -e SESSION_SAVE_HANDLER=files
  -e SESSION_SAVE_PATH=/tmp
)

echo "==> Starting mariadb-galera container..."
docker run -d --name mariadb-galera --platform linux/amd64 \
  --network advocase --network-alias mariadb \
  -p 3307:3306 \
  -e ALLOW_EMPTY_PASSWORD=yes \
  -e MARIADB_GALERA_CLUSTER_ADDRESS=gcomm:// \
  -e MARIADB_USER=mariadb_suitecrm \
  -e MARIADB_DATABASE=mariadb_suitecrm \
  -e MARIADB_PASSWORD=mariadb123 \
  -v mariadb_database:/bitnami/mariadb \
  advocase/mariadb-galera:local

echo "==> Waiting for the database to accept connections..."
DB_READY=false
for _ in $(seq 1 60); do
  if docker exec mariadb-galera mariadb-admin ping -u root --silent >/dev/null 2>&1; then
    DB_READY=true
    break
  fi
  sleep 2
done

if [[ "$DB_READY" != "true" ]]; then
  echo "❌ mariadb-galera did not become ready in time." >&2
  echo "   Run: docker logs mariadb-galera" >&2
  exit 1
fi

# Not necessary for app to run
# echo "==> Starting suitecrm container..."
# docker run -d --name suitecrm --platform linux/amd64 --network advocase \
#   "${COMMON_ENV[@]}" \
#   -e SITE_URL=http://localhost:8181 \
#   -p 8181:8181 \
#   "$DOCKER_USERNAME/suitecrm"

echo "==> Starting advocase container..."
docker run -d --name advocase --platform linux/amd64 --network advocase \
  "${COMMON_ENV[@]}" \
  -e SITE_URL=http://localhost:8182 \
  -p 8182:8181 \
  "$DOCKER_USERNAME/advocase"

echo ""
echo "==> Done!"
# echo "   SuiteCRM:  http://localhost:8181"
echo "   Advocase:  http://localhost:8182"
echo ""
echo "   First start takes a few minutes while SuiteCRM initializes."
echo "   Follow along with: docker logs -f advocase"