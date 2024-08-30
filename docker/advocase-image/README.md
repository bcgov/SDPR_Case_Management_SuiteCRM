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

The SuiteCRM version used in this image is the `8.6.1`. Check the release notes [here](https://docs.suitecrm.com/8.x/admin/releases/8.6/).

# How to use this image

## New installation vs Existing installation

This image will check for you if you already have a database with all SuiteCRM tables and data, or if you need a fresh SuiteCRM installation. The commands to run both cases are the same.

## Building the SuiteCRM image

Build the image using the following command:

```bash
docker build -t your-user/advocase docker/advocase-image
```
## Running the SuiteCRM container

Run the following command to start the SuiteCRM container:

```bash
docker run -d --name suitecrm -p 8181:8181 -e DATABASE_URL="mysql://suitecrm:suitecrm@localhost:3306/suitecrm" -e SUITE_DB_HOST="localhost" -e SUITE_DB_USER="suitecrm" -e SUITE_DB_NAME="suitecrm" -e SUITE_DB_PASSW="suitecrm" -e SUITE_DB_PORT=3306 -e SESSION_SAVE_HANDLER="files" -e SESSION_SAVE_PATH="/tmp" -e SUITECRM_ADMIN_PWD="admin" your-user/advocase
```
## Environment variables

The following environment variables are the same as the [BC Gov SuiteCRM image environment variables](../suitecrm-image/README.md#environment-variables):

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