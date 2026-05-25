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
echo "   Then run: docker login -u <USERNAME> -p <PASSWORD>"
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

CURRENT_STEP="Tearing down Docker Compose and wiping DB volume"
echo "==> $CURRENT_STEP..."
(cd docker && docker compose down -v && rm -rf db/)

CURRENT_STEP="Removing suitecrm/advocase containers"
echo "==> $CURRENT_STEP..."
docker rm -f suitecrm advocase 2>/dev/null || true

CURRENT_STEP="Removing old images"
echo "==> $CURRENT_STEP..."
docker rmi "$DOCKER_USERNAME/suitecrm" "$DOCKER_USERNAME/advocase" 2>/dev/null || true

CURRENT_STEP="Clearing build cache"
echo "==> $CURRENT_STEP..."
docker builder prune -f

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

CURRENT_STEP="starting DB"
echo "==> $CURRENT_STEP..."
(cd docker && docker compose up -d --remove-orphans)

echo "==> Done! Advocase will be available at http://localhost:8182 once initialized."