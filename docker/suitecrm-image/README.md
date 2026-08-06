<h1>BC GOV SuiteCRM image</h1>

Table of contents

- [Overview](#overview)
  - [Current SuiteCRM version](#current-suitecrm-version)
- [How to use this image](#how-to-use-this-image)
  - [New installation vs Existing installation](#new-installation-vs-existing-installation)
  - [Building the SuiteCRM image](#building-the-suitecrm-image)
  - [Running the SuiteCRM container](#running-the-suitecrm-container)
  - [Environment variables](#environment-variables)
- [Customizing the SuiteCRM image](#customizing-the-suitecrm-image)
  - [New fields, detail view, edit view, list view, and filter fields customizations](#new-fields-detail-view-edit-view-list-view-and-filter-fields-customizations)
  - [Theming customizations](#theming-customizations)

# Overview

This is the BC Gov SuiteCRM image. It is based on the PHP ([php:8.2-apache tag](https://hub.docker.com/layers/library/php/8.2-apache/images/sha256-0c1704377ed2b15db9fadefe3720ecb8261f13fb526983500ff8e41c91aef476?context=explore)). This image downloads SuiteCRM from the link provided on SuiteCRM download page and installs it.

## Current SuiteCRM version

The SuiteCRM version used in this image is the `8.10`. Check the release notes [here](https://docs.suitecrm.com/8.x/admin/releases/8.10/).

# How to use this image

## New installation vs Existing installation

This image will check for you if you already have a database with all SuiteCRM tables and data, or if you need a fresh SuiteCRM installation. The commands to run both cases are the same.

## Building the SuiteCRM image

Build the image using the following command:

```bash
docker build -t [YOUR_DOCKER_HUB_USERNAME]/suitecrm docker/suitecrm-image
```

## Running the SuiteCRM container

Run the following command to start the SuiteCRM container:

```bash
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
  [YOUR_DOCKER_HUB_USERNAME]/suitecrm
```

## Environment variables

| Variable                         | Description                                                                  | Required | Default value |
| -------------------------------- | ---------------------------------------------------------------------------- | -------- | ------------- |
| `SUITE_DB_HOST`                  | Database host                                                                | Yes      |               |
| `SUITE_DB_USER`                  | Database user                                                                | Yes      |               |
| `SUITE_DB_NAME`                  | Database name                                                                | Yes      |               |
| `SUITE_DB_PASSW`                 | Database password                                                            | Yes      |               |
| `SUITE_DB_PORT`                  | Database port                                                                | Yes      |               |
| `SUITECRM_ADMIN_PWD`             | SuiteCRM admin password                                                      | Yes      |               |
| `APP_SECRET`                     | Symfony app secret (min 32 chars, use `openssl rand -hex 32` for production) | Yes      |               |
| `AUTH_TYPE`                      | Authentication type: `native` for local dev, `saml` for production           | Yes      |               |
| `SITE_URL`                       | Full public URL of the SuiteCRM instance                                     | Yes      |               |
| `SAML_AUTOCREATE_ATTRIBUTES_MAP` | SAML user attribute mapping JSON                                             | Yes      | `'{}'`        |
| `TEMPORARY_FILE_BASE_DIR`        | Base directory for temporary files                                           | Yes      | `/tmp`        |

# Customizing the SuiteCRM image

## New fields, detail view, edit view, list view, and filter fields customizations

For new fields, detail view, edit view, list view, and filter fields, and other possible customizations check the [SuiteCRM documentation](https://docs.suitecrm.com/developer).

> [!TIP]
>
> Check the `vardefs`, `metadata`, `Language Strings`, and `Logic Hooks` sections for more common customizations.

You can place your new files in the `docker/suitecrm-image/custom`, following the example SuiteCRM directory structure bellow:

```
docker/suitecrm-image/custom/suitecrm
|-- public
|   `-- legacy
|       |-- custom
|       |   |-- Extension
|       |   |   `-- modules
|       |   |       `-- Cases
|       |   |           |-- Ext
|       |   |           |   `-- LogicHooks
|       |   |           |-- Language
|       |   |           |-- Layoutdefs
|       |   |           `-- Vardefs
|       |   `-- modules
|       |       |-- Cases
|       |       |   |-- metadata
|       |       |       `-- subpanels
|       |-- modules
|       |   |-- Cases
|       |   |   |-- language
|       |   |   `-- metadata
```

## Theming customizations

For theming customizations, you will need to install a few more dependencies on your container so you can build the theme assets. Check the [SuiteCRM Front-end Develloper Install Guide](https://docs.suitecrm.com/8.x/developer/installation-guide/front-end-installation-guide/) for more information.

```Dockerfile
FROM your-user/suitecrm:latest

# Switch to root user so it can install the required packages
USER root

# Installing NodeJS, NPM, Yarn, and SASS. Required for building SuiteCRM theme assets
RUN apt-get update && apt-get upgrade -y && \
    apt-get clean && \
    apt-get install nodejs npm -y && \
    npm install --global yarn sass

# Here you need to copy your custom SuiteCRM files to the container, matching the structure of the SuiteCRM directory
# COPY YOUR FILES HERE
# .
# .
# .
# .
# .

WORKDIR /suitecrm

# Bundling and building SuiteCRM theme assets
RUN sass public/legacy/themes/suite8/css/Dawn/style.scss public/legacy/themes/suite8/css/Dawn/style.css --style compressed \
&& yarn install \
&& yarn run build:defaultExt \
&& yarn run build:common \
&& yarn run build:core \
&& yarn run build:shell \
# Cleaning up unecessary files
&& rm -r /suitecrm/.angular /suitecrm/node_modules /suitecrm/dist \
# Uninstalling NodeJS, NPM, Yarn, and SASS
&& npm uninstall -g yarn sass \
&& apt-get remove nodejs npm -y \
&& apt-get autoremove -y

# Fixing permissions for backwards compatibility with OpenShift and Kubernetes
RUN chgrp -R 0 /suitecrm && \
    find /suitecrm -type d -not -perm 2775 -exec chmod 2775 {} \; && \
    find /suitecrm -type f -not -perm 0664 -exec chmod 0664 {} \; && \
    chown -R 1001:0 /suitecrm && \
    chmod +x /suitecrm/bin/console

USER 1001:0

# Exposed ports
EXPOSE 8181
```
