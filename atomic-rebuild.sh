#!/bin/bash
# =============================================================================
# atomic-rebuild.sh ⚛️
# Full local dev environment reset and rebuild script.
#
# ⚠️  Compatibility: macOS and Linux only.
#     Windows users must use WSL (Windows Subsystem for Linux).
#     Git Bash is NOT recommended — xargs -r may behave unexpectedly.
#
# Run from the repo root:
#   chmod +x atomic-rebuild.sh
#   ./atomic-rebuild.sh
# =============================================================================
set -e
CURRENT_STEP="initializing"
trap 'EXIT_CODE=$?; echo ""; echo "❌ Failed during: $CURRENT_STEP (line $LINENO, exit $EXIT_CODE)" >&2; exit $EXIT_CODE' ERR

echo ""
echo "⚠️  WARNING: Building the Advocase image requires you to be logged in to Docker"
echo "   with the Artifactory credentials stored in OpenShift."
echo ""
echo "   To get your credentials, go to:"
echo "   OpenShift Console > (Set User as Administrator) > Workloads > Secrets > artifacts-github-actions-vezsxm"
echo ""
echo "   Then run: docker login -u <USERNAME> -p <PASSWORD> artifacts.developer.gov.bc.ca"
echo ""
echo "   See docker/advocase-image/README.md for full instructions."
echo ""
read -rp "==> Have you already logged in to Docker with the Artifactory credentials? [y/N] " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
  echo "==> Aborting. Please log in first and re-run the script."
  exit 1
fi

if [[ -n "$1" ]]; then
  DOCKER_USERNAME="$1"
else
  read -rp "==> Enter your Docker Hub username: " DOCKER_USERNAME
fi

echo ""
echo "==> Advocase base image source:"
echo "   [1] Local  — use your locally built suitecrm image (for local dev/testing)"
echo "   [2] Remote — pull from Artifactory (requires Artifactory login, matches production)"
echo ""
read -rp "==> Choose base image source [1/2]: " BASE_IMAGE_CHOICE
if [[ "$BASE_IMAGE_CHOICE" == "2" ]]; then
  ENVIRONMENT="production"
  BASE_IMAGE="artifacts.developer.gov.bc.ca/ad0d-suitecrm-docker/bc-gov-suitecrm:latest"
  echo "==> Using Artifactory base image (mimic production)."
else
  ENVIRONMENT="development"
  BASE_IMAGE="$DOCKER_USERNAME/suitecrm"
  echo "==> Using local base image: $BASE_IMAGE"
fi

CURRENT_STEP="stopping all running containers"
echo "==> $CURRENT_STEP..."
docker ps -q | xargs -r docker stop

CURRENT_STEP="Removing volumes"
echo "==> $CURRENT_STEP..."
# docker_mariadb_database is the legacy Compose-prefixed name, pre-`name:` pinning
for vol in mariadb_database docker_mariadb_database; do
  { docker ps -aq --filter "volume=$vol" | xargs -r docker rm -f; } 2>/dev/null || true
  docker volume rm -f "$vol" 2>/dev/null || true
done

CURRENT_STEP="Removing network"
echo "==> $CURRENT_STEP..."
docker network rm advocase 2>/dev/null || true

CURRENT_STEP="Removing old images"
echo "==> $CURRENT_STEP..."
# advocase is built FROM suitecrm, so the child must go first
docker rmi -f "$DOCKER_USERNAME/advocase" 2>/dev/null || true
docker rmi -f "$DOCKER_USERNAME/suitecrm" 2>/dev/null || true
docker rmi -f advocase/mariadb-galera:local 2>/dev/null || true
docker image prune -f || true

CURRENT_STEP="Clearing build cache"
echo "==> $CURRENT_STEP..."
docker builder prune -f

CURRENT_STEP="Removing suitecrm/advocase containers"
echo "==> $CURRENT_STEP..."
docker rm -f suitecrm advocase mariadb-galera 2>/dev/null || true

CURRENT_STEP="Removing old images"
echo "==> $CURRENT_STEP..."
docker rmi "$DOCKER_USERNAME/suitecrm" "$DOCKER_USERNAME/advocase" advocase/mariadb-galera:local 2>/dev/null || true

CURRENT_STEP="Clearing build cache"
echo "==> $CURRENT_STEP..."
docker builder prune -f

CURRENT_STEP="Building mariadb-galera image"
echo "==> $CURRENT_STEP..."
docker build --platform linux/amd64 \
  -t advocase/mariadb-galera:local \
  docker/mariadb-galera/13.0/debian-12

CURRENT_STEP="Building suitecrm image"
echo "==> $CURRENT_STEP..."
docker build --platform linux/amd64 -t "$DOCKER_USERNAME/suitecrm" docker/suitecrm-image

CURRENT_STEP="Building advocase image"
echo "==> $CURRENT_STEP..."
docker build --platform linux/amd64 \
  --build-arg BASE_IMAGE="$BASE_IMAGE" \
  --build-arg ENVIRONMENT="$ENVIRONMENT" \
  -t "$DOCKER_USERNAME/advocase" \
  docker/advocase-image

echo "==> Done! Advocase will be available at http://localhost:8182 once initialized."