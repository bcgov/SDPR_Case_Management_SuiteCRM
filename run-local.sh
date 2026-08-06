#!/bin/bash
# =============================================================================
# run-local.sh
# Starts the SuiteCRM and Advocase containers for local development.
#
# ⚠️  Compatibility: macOS and Linux only.
#     Windows users must use WSL (Windows Subsystem for Linux).
#
# Prerequisites:
#   - Docker Compose DB must be running: docker compose -f docker/docker-compose.yaml up -d
#   - Images must already be built (run atomic-rebuild.sh first)
#
# Run from the repo root:
#   chmod +x run-local.sh
#   ./run-local.sh
# =============================================================================
set -e
trap 'EXIT_CODE=$?; echo "❌ Command failed at line $LINENO (exit $EXIT_CODE)"; echo "   Run: docker logs suitecrm  or  docker logs advocase"; exit $EXIT_CODE' ERR

if [[ -n "$1" ]]; then
  DOCKER_USERNAME="$1"
else
  read -rp "==> Enter your Docker Hub username: " DOCKER_USERNAME
fi

echo "==> Starting mariadb-galera container..."
docker run -d --name mariadb-galera \
  --platform linux/amd64 \
  --network docker_suitecrm --network-alias mariadb \
  -p 3307:3306 \
  -e ALLOW_EMPTY_PASSWORD=yes \
  -e MARIADB_GALERA_CLUSTER_ADDRESS=gcomm:// \
  -e MARIADB_USER=mariadb_suitecrm \
  -e MARIADB_DATABASE=mariadb_suitecrm \
  -e MARIADB_PASSWORD=mariadb123 \
  -v mariadb_database:/bitnami/mariadb \
  "$DOCKER_USERNAME/mariadb-galera:local"

echo "==> Starting suitecrm container..."
docker run -d --name suitecrm --platform linux/amd64 --network docker_suitecrm \
  -e SUITE_DB_HOST=mariadb \
  -e SUITE_DB_USER=mariadb_suitecrm \
  -e SUITE_DB_PASSW=mariadb123 \
  -e SUITE_DB_NAME=mariadb_suitecrm \
  -e SUITE_DB_PORT=3306 \
  -e APP_SECRET=secret32CharplayprojectzomboidB42 \
  -e AUTH_TYPE=native \
  -e SITE_URL=http://localhost:8181 \
  -e SAML_AUTOCREATE_ATTRIBUTES_MAP='{}' \
  -e TEMPORARY_FILE_BASE_DIR=/tmp \
  -e SUITECRM_ADMIN_PWD=admin \
  -p 8181:8181 \
  "$DOCKER_USERNAME/suitecrm"

echo "==> Starting advocase container..."
docker run -d --name advocase --platform linux/amd64 --network docker_suitecrm \
  -e SUITE_DB_HOST=mariadb \
  -e SUITE_DB_USER=mariadb_suitecrm \
  -e SUITE_DB_PASSW=mariadb123 \
  -e SUITE_DB_NAME=mariadb_suitecrm \
  -e SUITE_DB_PORT=3306 \
  -e APP_SECRET=secret32CharplayprojectzomboidB42 \
  -e AUTH_TYPE=native \
  -e SITE_URL=http://localhost:8182 \
  -e SAML_AUTOCREATE_ATTRIBUTES_MAP='{}' \
  -e TEMPORARY_FILE_BASE_DIR=/tmp \
  -e SUITECRM_ADMIN_PWD=admin \
  -p 8182:8181 \
  "$DOCKER_USERNAME/advocase"

echo ""
echo "==> Done!"
echo "   SuiteCRM:  http://localhost:8181"
echo "   Advocase:  http://localhost:8182"