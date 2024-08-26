<h1>BC GOV SuiteCRM image</h1>

# Overview

This is the BC Gov SuiteCRM image. It is based on the PHP ([php:8.2-apache tag](https://hub.docker.com/layers/library/php/8.2-apache/images/sha256-0c1704377ed2b15db9fadefe3720ecb8261f13fb526983500ff8e41c91aef476?context=explore)). This image downloads SuiteCRM from the link provided on SuiteCRM download page and installs it.

## Current SuiteCRM version

The SuiteCRM version used in this image is the `8.6.1`. Check the release notes [here](https://docs.suitecrm.com/8.x/admin/releases/8.6/).

# How to use this image

Build the image using the following command:

```bash
docker build -t your-user/suitecrm docker/suitecrm-image
```
Run the following command to start the SuiteCRM container:

```bash
docker run -d --name suitecrm -p 8181:8181 -e DATABASE_URL="mysql://suitecrm:suitecrm@localhost:3306/suitecrm" -e SUITE_DB_HOST="localhost" -e SUITE_DB_USER="suitecrm" -e SUITE_DB_NAME="suitecrm" -e SUITE_DB_PASSW="suitecrm" -e SUITE_DB_PORT=3306 -e SESSION_SAVE_HANDLER="files" -e SESSION_SAVE_PATH="/tmp" -e SUITECRM_ADMIN_PWD="admin" your-user/suitecrm
```
## Environment variables

| Variable | Description | Required | Default value |
|----------|-------------|----------|---------------|
| `DATABASE_URL` | Database URL | Yes | |
| `SUITE_DB_HOST` | Database host | Yes | |
| `SUITE_DB_USER` | Database user | Yes | |
| `SUITE_DB_NAME` | Database name | Yes | |
| `SUITE_DB_PASSW` | Database password | Yes | |
| `SUITE_DB_PORT` | Database port | Yes | |
| `SESSION_SAVE_HANDLER` | PHP Session save handler | Yes | |
| `SESSION_SAVE_PATH` | PHP Session save path | Yes | |
| `SUITECRM_ADMIN_PWD` | SuiteCRM admin password | Yes | |

