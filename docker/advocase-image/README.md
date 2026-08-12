<h1>BC GOV Advocase image</h1>

Table of contents

- [Overview](#overview)
  - [Current SuiteCRM version](#current-suitecrm-version)
- [How to use this image](#how-to-use-this-image)
  - [New installation vs Existing installation](#new-installation-vs-existing-installation)
  - [Building the SuiteCRM image](#building-the-suitecrm-image)
  - [Running the SuiteCRM container](#running-the-suitecrm-container)
  - [Environment variables](#environment-variables)

# Overview

This is the BC Gov SuiteCRM image. It is based on the [BC Gov SuiteCRM image](../suitecrm-image/README.md).

## Current SuiteCRM version

The SuiteCRM version used in this image is the `8.10`. Check the release notes [here](https://docs.suitecrm.com/8.x/admin/releases/8.10/).

# How to use this image

## New installation vs Existing installation

This image will check for you if you already have a database with all SuiteCRM tables and data, or if you need a fresh SuiteCRM installation. The commands to run both cases are the same.

## Building the SuiteCRM image

First you need to login to docker with the secret stored on OpenShift:

(Set User as Administrator) > Workloads > Secrets > `artifacts-github-actions-vezsxm`:

```bash
docker login -u <USERNAME> -p <PASSWORD>
```

Build the image using the following command:

```bash
docker build -t [YOUR_DOCKER_HUB_USERNAME]/advocase docker/advocase-image
```

## Running the SuiteCRM container

Run the following command to start the SuiteCRM container:

```bash
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
  [YOUR_DOCKER_HUB_USERNAME]/advocase
```

## Environment variables

The following environment variables are the same as the [BC Gov SuiteCRM image environment variables](../suitecrm-image/README.md#environment-variables):

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
