<h1>SuiteCRM Case Management System - Advocase</h1>

Advocase is built on top of SuiteCRM, an open-source Customer Relationship Management (CRM) system. Advocase is a case management system built to support the Office for the Advocate for Service Quality (OASQ). The OASQ reports to the Minister of Social Development

Table of Contents
- [Technologies Used](#technologies-used)
- [Before you start](#before-you-start)
  - [IDIR Account](#idir-account)
  - [Downloading `oc` CLI](#downloading-oc-cli)
    - [Login to Openshift using `oc` CLI](#login-to-openshift-using-oc-cli)
  - [Enabling ArgoCD for the project](#enabling-argocd-for-the-project)
  - [Installing HELM](#installing-helm)
  - [✅ Good to go](#-good-to-go)
- [Installation](#installation)
  - [Clone the repository](#clone-the-repository)
  - [Setup the project](#setup-the-project)
  - [Building the Docker images](#building-the-docker-images)
  - [Deploying the project on Openshift](#deploying-the-project-on-openshift)
    - [Deploying using ArgoCD](#deploying-using-argocd)
    - [Deploying using Helm](#deploying-using-helm)
- [Maintenance](#maintenance)
  - [Database](#database)
    - [Accessing the database](#accessing-the-database)
    - [Restoring the database](#restoring-the-database)
      - [Restoring the last backup](#restoring-the-last-backup)
      - [Restoring a specific backup](#restoring-a-specific-backup)
  - [Restoring files from S3 file backup bucket](#restoring-files-from-s3-file-backup-bucket)
    - [Creating a debug pod](#creating-a-debug-pod)
    - [Restoring the files](#restoring-the-files)
  - [Patching](#patching)
    - [Scaling down the pods](#scaling-down-the-pods)
    - [Downloading the patch](#downloading-the-patch)
    - [Patching the application](#patching-the-application)
    - [Building new images for BC Gov SuiteCRM and BC Gov Advocase Images](#building-new-images-for-bc-gov-suitecrm-and-bc-gov-advocase-images)
      - [Changing the SuiteCRM version](#changing-the-suitecrm-version)
      - [Building the new images](#building-the-new-images)
      - [Building the BC Gov Advocase image to production](#building-the-bc-gov-advocase-image-to-production)
    - [Scaling up the pods](#scaling-up-the-pods)
- [Design](#design)
- [Testing](#testing)
  - [Setting up the E2E test environment](#setting-up-the-e2e-test-environment)
  - [Running the E2E test](#running-the-e2e-test)
  - [Accessibility tests](#accessibility-tests)

# Technologies Used

- [SuiteCRM](https://suitecrm.com/)
  - [Ubuntu](https://ubuntu.com/)
  - [PHP](https://www.php.net/)
  - [Apache](https://httpd.apache.org/)
  - [Angular](https://angular.dev/)
- [Cypress](https://www.cypress.io/)
- [Helm](https://helm.sh/)
  - [Bitnami MariaDB Galera Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/mariadb-galera)
  - [Bitnami Redis Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/redis-cluster)
  - [BCGov Backup Storage Helm Chart](https://github.com/bcgov/helm-charts/tree/master/charts/backup-storage)
- [Docker](https://www.docker.com/)
- [ArgoCD](https://argoproj.github.io/argo-cd/)
- [Openshift](https://www.openshift.com/)
- [Sysdig](https://sysdig.com/)
- [AWS S3](https://aws.amazon.com/s3/)
- [OWASP ZAP](https://www.zaproxy.org/)

# Before you start

## IDIR Account

Make sure you have your IDIR account setup. If you are a contractor, make sure that you have an `*@gov.bc.ca` email address to login into Openshift, RocketChat, ArgoCD, and other BCGov services. If you are a contractor and do not have an `*@gov.bc.ca` email address, please contact your project manager and/or CTO team.

After logging in Openshift we console, make sure you have the right permissions to access all namespaces in your project/license plate - `-tools`, `-dev`, `-test`, and `-prod`.

## Downloading `oc` CLI

Download the `oc` CLI from the Openshift web console. Go to the top right corner of the web console, click on the `?` icon, and select `Command Line Tools`, and select the appropriate version for your operating system. Alternatively you can download the appropriate version of `oc` CLI from the [Openshift CLI](https://docs.openshift.com/container-platform/4.16/cli_reference/openshift_cli/getting-started-cli.html) page.

### Login to Openshift using `oc` CLI

From the Openshift web console, click on your username on the top right corner, and select `Copy Login Command`. After the IDIR login page, you will be redirected to a page with a link `Display Token`. Click on the link and copy the first command and run it in your terminal. After running the command, if successful, you should see a success message and the list of projects you have access to.

```bash
oc login --token=<some token> --server=<BC Gov Openshift cluster>

# Output
# Logged into "<BC Gov Openshift cluster>" as "<IDIR>@gov.bc.ca" using the token provided.
#
# You have access to the following projects and can switch between them with 'oc project <projectname>':
#
#   * <license plate>-dev
#     <license plate>-prod
#     <license plate>-test
#     <license plate>-tools
#
# Using project "<license plate>-dev".
```

## Enabling ArgoCD for the project

To setup ArgoCD for the project, there's a self service system in place. Follow the instructions from the [BC Gov ArgoCD Usage](https://developer.gov.bc.ca/docs/default/component/platform-developer-docs/docs/automation-and-resiliency/argo-cd-usage/#enable-argo-cd-for-your-project-set) page.

## Installing HELM

This projects deploys all the application's resources using Helm - either deploying directly to the cluster or through ArgoCD. To install Helm, follow the instructions from the [Helm Installation Guide](https://helm.sh/docs/intro/install/) page according to your operating system.

## ✅ Good to go

Now you have the bare minimum requirements to start working on the project.

# Installation

## Clone the repository

```bash
git clone git@github.com:bcgov/SDPR_Case_Management_SuiteCRM.git
```
## Setup the project

Follow the instructions from the [Deployment pre-requisites](./openshift/README.md#deployment-pre-requisites) page to setup the environments before deploying the project on Openshift through either Helm or ArgoCD.

## Building the Docker images

Check the [SuiteCRM Docker image](./docker/suitecrm-image/README.md) and [Advocase Docker image](./docker/advocase-image/README.md) pages to see how to build, configure, and customize the SuiteCRM and Advocase Docker images.

Currently, both images are being built and pushed to JFrog Artifactory. Check [this documentation](https://developer.gov.bc.ca/docs/default/component/platform-developer-docs/docs/build-deploy-and-maintain-apps/push-pull-artifacts-artifactory/#pulling-container-images-using-an-artifactory-service-account) to see how to pull images from private repositories on Artifactory.

To build and deploy the images to Openshift, follow the instructions from the [Building images on Openshift](./openshift/README.md#building-images-on-openshift) page.

## Deploying the project on Openshift

Check the [Parameters](./helm/suitecrm/README.md#parameters) from the SuiteCRM Helm chart to see the available configuration parameters and the components that are being deployed.

### Deploying using ArgoCD

If you followed the instructions from [Enabling ArgoCD for the project](#enabling-argocd-for-the-project), you should have ArgoCD setup for the project.
Create a new project by clicking on the `+ NEW APP` button on the top left corner of the ArgoCD web console. You can fill the values using the form in the UI, or you can click on the `EDIT AS YAML` button and use the following working manifest as a template:

> [!NOTE]
>
> This manifest is not integrating SSO (IDIR/Keycloak) and is not using APS domain, only the default Openshift Ingress. To integrate SSO check the [SSO/Keycloak/IDIR Integration](./helm/suitecrm/README.md#ssokeycloakidir-integration) section and to use the APS domain check the [APS Domain Integration](./helm/suitecrm/README.md#aps-domain-integration) section.

> [!IMPORTANT]
>
> Don't forget to replace the placeholders `<license plate>` and `<env>` with the appropriate values.

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: <license plate>-advocase-prod
spec:
  project: <license plate>
  source:
    repoURL: 'git@github.com:bcgov-c/tenant-gitops-<license plate>.git'
    path: helm/suitecrm
    targetRevision: HEAD
    helm:
      releaseName: suitecrm
      values: |
        global:
          env: <env>
          suitecrmHost: advocase-<license plate>-<env>.apps.gold.devops.gov.bc.ca

        mariadb-galera:
          replicaCount: 1
          existingSecret: suitecrm-database-credentials
          db:
            user: advocase_admin
            name: advocase
          persistence:
            size: 2G
          networkPolicy:
            allowExternal: false

        redis-cluster:
          networkPolicy:
            allowExternal: false
          usePassword: true
          existingSecret: suitecrm-redis-credentials
          existingSecretPasswordKey: redis-password

        backup-storage:
          image:
            repository: image-registry.openshift-image-registry.svc:5000/<license plate>-tools/backup-container-rhel9-mariadb-1011
            pullPolicy: Always
            tag: latest

          persistence:
            backup:
              claimName: db-backup-pvc
            verification:
              claimName: db-backup-verification-pvc
              mountPath: /var/lib/mysql/data

          db:
            secretName: suitecrm-database-credentials
            usernameKey: mariadb-galera-root-user
            passwordKey: mariadb-root-password

          env:
            DATABASE_SERVICE_NAME:
              value: suitecrm-mariadb-galera
            NUM_BACKUPS:
              value: "31"
            DAILY_BACKUPS:
              value: "6"
            WEEKLY_BACKUPS:
              value: "4"
            MONTHLY_BACKUPS:
              value: "1"
            MYSQL_USER:
              value: "user"
            MYSQL_PASSWORD:
              value: "user123"
            MYSQL_DATABASE:
              value: "advocase"
            MYSQL_ROOT_PASSWORD:
              value: "root"

          backupConfig: |
            suitecrm-mariadb-galera:3306/advocase

            0 1 * * * default ./backup.sh -s
            0 4 * * * default ./backup.sh -s -v all

        replicaCount: 1 

        ingress:
          enabled: true

        image:
          repository: image-registry.openshift-image-registry.svc:5000/<license plate>-tools/artifactory-advocase
          tag: "latest"
          pullPolicy: Always
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: <license plate>-prod
```

### Deploying using Helm

If you followed the instructions from [Installing HELM](#installing-helm), you should have Helm installed in your local machine. To deploy the project using Helm, create a new file `values.yaml`. You can use the following template as a starting point:

> [!NOTE]
>
> This example `values.yaml` file is not integrating SSO (IDIR/Keycloak) and is not using APS domain, only the default Openshift Ingress. To integrate SSO check the [SSO/Keycloak/IDIR Integration](./helm/suitecrm/README.md#ssokeycloakidir-integration) section and to use the APS domain check the [APS Domain Integration](./helm/suitecrm/README.md#aps-domain-integration) section.

> [!IMPORTANT]
>
> Don't forget to replace the placeholders `<license plate>` and `<env>` with the appropriate values.

```yaml
global:
  env: <env>
  suitecrmHost: advocase-<license plate>-<env>.apps.gold.devops.gov.bc.ca

mariadb-galera:
  replicaCount: 1
  existingSecret: suitecrm-database-credentials
  db:
    user: advocase_admin
    name: advocase
  persistence:
    size: 2G
  networkPolicy:
    allowExternal: false

redis-cluster:
  networkPolicy:
    allowExternal: false
  usePassword: true
  existingSecret: suitecrm-redis-credentials
  existingSecretPasswordKey: redis-password

backup-storage:
  image:
    repository: image-registry.openshift-image-registry.svc:5000/<license plate>-tools/backup-container-rhel9-mariadb-1011
    pullPolicy: Always
    tag: latest

  persistence:
    backup:
      claimName: db-backup-pvc
    verification:
      claimName: db-backup-verification-pvc
      mountPath: /var/lib/mysql/data

  db:
    secretName: suitecrm-database-credentials
    usernameKey: mariadb-galera-root-user
    passwordKey: mariadb-root-password

  env:
    DATABASE_SERVICE_NAME:
      value: suitecrm-mariadb-galera
    NUM_BACKUPS:
      value: "31"
    DAILY_BACKUPS:
      value: "6"
    WEEKLY_BACKUPS:
      value: "4"
    MONTHLY_BACKUPS:
      value: "1"
    MYSQL_USER:
      value: "user"
    MYSQL_PASSWORD:
      value: "user123"
    MYSQL_DATABASE:
      value: "advocase"
    MYSQL_ROOT_PASSWORD:
      value: "root"

  backupConfig: |
    suitecrm-mariadb-galera:3306/advocase

    0 1 * * * default ./backup.sh -s
    0 4 * * * default ./backup.sh -s -v all

replicaCount: 1 

ingress:
  enabled: true

image:
  repository: image-registry.openshift-image-registry.svc:5000/<license plate>-tools/artifactory-advocase
  tag: "latest"
  pullPolicy: Always
```

After creating the `values.yaml` file, you can deploy the project using the following command:

```bash
helm install -n <license plate>-<namespace> suitecrm ./helm/suitecrm -f /path/to/your/custom/values.yaml
```

# Maintenance

## Database

### Accessing the database

To access the database, [make sure you are logged in to Openshift](#login-to-openshift-using-oc-cli) and select the appropriate project. After that, you can run the following command to list the available pods:

```bash
oc get svc -n <license plate>-<namespace>

# Output
# NAME                               TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)                      AGE
# suitecrm                           ClusterIP   10.98.203.35   <none>        8181/TCP                     14d
# suitecrm-mariadb-galera            ClusterIP   10.98.74.33    <none>        3306/TCP                     14d
# suitecrm-mariadb-galera-headless   ClusterIP   None           <none>        4567/TCP,4568/TCP,4444/TCP   14d
# suitecrm-redis-cluster             ClusterIP   10.98.208.91   <none>        6379/TCP                     14d
# suitecrm-redis-cluster-headless    ClusterIP   None           <none>        6379/TCP,16379/TCP           14d
```

You need the `suitecrm-mariadb-galera` service to access the database. To access the database, you need to forward the traffic from your local machine to the database pod. You can do that by running the following command:

> [!NOTE]
>
> Port forwarding works like this: `local_port:remote_port`
> You can choose any port number for the local port, but the remote port should always be `3306` for MariaDB databases, unless you configured it differently.

```bash
oc port-forward -n <license plate>-<namespace> svc/suitecrm-mariadb-galera 3306:3306
```

After running the command, you can access the database using your preferred database client. The database credentials are stored in the `suitecrm-database-credentials` secret and you can access it through Openshift web console

### Restoring the database

> [!TIP]
>
> Before restoring the database to any given backup, if possible, create a backup of the current database to avoid any data loss. You can create a backup by running the following command:
> ```bash
> oc exec -n <license plate>-<namespace> suitecrm-backup-storage-5864c8d497-5h9bs -- ./backup.sh -1
> ```

> [!CAUTION]
>
> Make sure you are restoring the database in the right environment. Restoring the database will overwrite the current database with the backup data.
> If you are just practicing, TRIPLE check the environment you are in before restoring the database.

If you want to restore the database to the latest backup, first you need to get the right pod, by running the following command:

> [!NOTE]
>
> The backup pod name will follow this pattern `suitecrm-backup-storage-<some random string>`

```bash
oc get pods -n <license plate>-<namespace>

# Output
# NAME                                                                READY   STATUS      RESTARTS   AGE
# suitecrm-66b5c694bc-ffxtg                                           1/1     Running     0          36m
# suitecrm-app-cron-job-28745145-vfvp6                                0/1     Completed   0          66m
# suitecrm-app-cron-job-28745160-9jcgd                                0/1     Completed   0          51m
# suitecrm-app-cron-job-28745175-l6rm2                                0/1     Completed   0          36m
# suitecrm-app-cron-job-28745190-lld7c                                0/1     Completed   0          21m
# suitecrm-app-cron-job-28745205-jslkv                                0/1     Completed   0          6m15s
# --> suitecrm-backup-storage-5864c8d497-6r5qt <-- This is the one    1/1     Running     0          4d
# suitecrm-mariadb-galera-0                                           1/1     Running     0          4d
# suitecrm-redis-cluster-0                                            1/1     Running     0          6d6h
# suitecrm-redis-cluster-1                                            1/1     Running     0          4d
# suitecrm-redis-cluster-2                                            1/1     Running     0          5d6h
# suitecrm-redis-cluster-3                                            1/1     Running     0          14d
# suitecrm-redis-cluster-4                                            1/1     Running     0          7d6h
# suitecrm-redis-cluster-5                                            1/1     Running     0          4d3h
# suitecrm-s3-file-backup-cron-job-28745190-7nrb5                     0/1     Completed   0          21m
# suitecrm-s3-file-backup-cron-job-28745195-kh46d                     0/1     Completed   0          16m
# suitecrm-s3-file-backup-cron-job-28745200-cprvv                     0/1     Completed   0          11m
# suitecrm-s3-file-backup-cron-job-28745205-qqdwx                     0/1     Completed   0          6m15s
# suitecrm-s3-file-backup-cron-job-28745210-7hzbf                     0/1     Completed   0          75s
```
#### Restoring the last backup

After getting the right pod, you can run the following command to restore the database to the last backup:

> [!TIP]
>
> You can find more information on the restore command by running:
>
> ```bash
> oc exec -n <license plate>-<namespace> suitecrm-backup-storage-5864c8d497-5h9bs -- ./backup.sh --help
> ```

> [!WARNING]
>
> By running this command you will overwrite the current database with the backup data.
> Make sure you are in the right environment before running this command.

```bash
oc exec -n <license plate>-<namespace> suitecrm-backup-storage-5864c8d497-5h9bs -- ./backup.sh -r <backup configuration>
```
> [!NOTE]
>
> You can replace the `<backup configuration>` placeholder with with the value set in the [`backup-storage.backupConfig`](./helm/suitecrm/README.md#backup-storagebackupconfig) parameter.

#### Restoring a specific backup

To restore a specific backup, first you need to get the list of available backups. You can do that by running the following command:

> [!TIP]
>
> You can find more information on the restore command by running:
>
> ```bash
> oc exec suitecrm-backup-storage-5864c8d497-5h9bs -- ./backup.sh --help
> ```

```bash
oc exec -n <license plate>-<namespace> suitecrm-backup-storage-5864c8d497-5h9bs -- ./backup.sh -l

# Output
# ================================================================================================================================
# Current Backups:

# Database                               Current Size
# suitecrm-mariadb-galera:3306/advocase  size in mb 24.8

# Filesystem                                                                                                           Size  Used Avail Use% Mounted on
# 192.168.105.124:/trident_qtree_pool_file_standard_SLUJFQHWUX/file_standard_pvc_65b9a520_1ed9_4210_b448_257089450ce3  5.0G  9.3M  5.0G   1% /backups
# --------------------------------------------------------------------------------------------------------------------------------
# 820K    2024-07-31 01:00        /backups/monthly/2024-07-31/suitecrm-mariadb-galera-advocase_2024-07-31_01-00-00.sql.gz
# 824K    2024-07-31 01:00        /backups/monthly/2024-07-31
# 828K    2024-07-31 01:00        /backups/monthly
# 868K    2024-08-20 01:00        /backups/daily/2024-08-20/suitecrm-mariadb-galera-advocase_2024-08-20_01-00-00.sql.gz
# 872K    2024-08-20 01:00        /backups/daily/2024-08-20
# 880K    2024-08-21 01:00        /backups/daily/2024-08-21/suitecrm-mariadb-galera-advocase_2024-08-21_01-00-00.sql.gz
# 884K    2024-08-21 01:00        /backups/daily/2024-08-21
# 884K    2024-08-22 01:00        /backups/daily/2024-08-22/suitecrm-mariadb-galera-advocase_2024-08-22_01-00-00.sql.gz
# 888K    2024-08-22 01:00        /backups/daily/2024-08-22
# 896K    2024-08-23 01:00        /backups/daily/2024-08-23/suitecrm-mariadb-galera-advocase_2024-08-23_01-00-00.sql.gz
# 900K    2024-08-23 01:00        /backups/daily/2024-08-23
# 900K    2024-08-26 01:00        /backups/daily/2024-08-26/suitecrm-mariadb-galera-advocase_2024-08-26_01-00-00.sql.gz
# 904K    2024-08-26 01:00        /backups/daily/2024-08-26
# 900K    2024-08-24 01:00        /backups/daily/2024-08-24/suitecrm-mariadb-galera-advocase_2024-08-24_01-00-00.sql.gz
# 904K    2024-08-24 01:00        /backups/daily/2024-08-24
# 5.3M    2024-08-26 01:00        /backups/daily
# 836K    2024-08-11 01:00        /backups/weekly/2024-08-11/suitecrm-mariadb-galera-advocase_2024-08-11_01-00-00.sql.gz
# 840K    2024-08-11 01:00        /backups/weekly/2024-08-11
# 856K    2024-08-18 01:00        /backups/weekly/2024-08-18/suitecrm-mariadb-galera-advocase_2024-08-18_01-00-00.sql.gz
# 860K    2024-08-18 01:00        /backups/weekly/2024-08-18
# 900K    2024-08-25 01:00        /backups/weekly/2024-08-25/suitecrm-mariadb-galera-advocase_2024-08-25_01-00-00.sql.gz
# 904K    2024-08-25 01:00        /backups/weekly/2024-08-25
# 780K    2024-08-04 01:00        /backups/weekly/2024-08-04/suitecrm-mariadb-galera-advocase_2024-08-04_01-00-00.sql.gz
# 784K    2024-08-04 01:00        /backups/weekly/2024-08-04
# 3.4M    2024-08-25 01:00        /backups/weekly
# 9.4M    2024-08-26 01:00        /backups/
# ================================================================================================================================
```
After selecting the backup file you want to restore, you can run the following command:

> [!WARNING]
>
> By running this command you will overwrite the current database with the backup data.
> Make sure you are in the right environment before running this command.

```bash
oc exec -n <license plate>-<namespace> suitecrm-backup-storage-5864c8d497-5h9bs -- ./backup.sh -r <backup configuration> -f <backup file>
```
> [!NOTE]
>
> You can replace the `<backup configuration>` placeholder with with the value set in the [`backup-storage.backupConfig`](./helm/suitecrm/README.md#backup-storagebackupconfig) parameter.


## Restoring files from S3 file backup bucket

> [!CAUTION]
>
> Make sure you are restoring the files in the right environment. Restoring the files will overwrite the current files saved on your application pods.
> If you are just practicing, TRIPLE check the environment you are in before restoring the backups.

> [!TIP]
>
> Before restoring the files, if possible, create a backup of the current files to avoid any data loss. You can create a backup by running the following command inside a debug pod (check the [Creating a debug pod](#creating-a-debug-pod) section for more information):
>
> First, execute the command with the `--dryrun` flag to avoid mistakes
> ```bash
> aws s3 sync /aws/suitecrm/public/legacy/upload/ s3://${S3_BUCKET}/<environment>/upload/ --dryrun --delete
> ```
> After confirming that the command is correct, you can run the command without the `--dryrun` flag
> ```bash
> aws s3 sync /aws/suitecrm/public/legacy/upload/ s3://${S3_BUCKET}/<environment>/upload/ --delete
> ```

### Creating a debug pod

Create a debug pod to access the files stored in the S3 bucket. First, you need to get the right pod, by running the following command:

> [!NOTE]
>
> The backup pod name will follow this pattern `suitecrm-s3-file-backup-cron-job-<some random string>`

```bash
oc get pods -n <license plate>-<namespace>

# Output
# NAME                                                                    READY   STATUS      RESTARTS   AGE
# suitecrm-66b5c694bc-ffxtg                                               1/1     Running     0          36m
# suitecrm-app-cron-job-28745145-vfvp6                                    0/1     Completed   0          66m
# suitecrm-app-cron-job-28745160-9jcgd                                    0/1     Completed   0          51m
# suitecrm-app-cron-job-28745175-l6rm2                                    0/1     Completed   0          36m
# suitecrm-app-cron-job-28745190-lld7c                                    0/1     Completed   0          21m
# suitecrm-app-cron-job-28745205-jslkv                                    0/1     Completed   0          6m15s
# suitecrm-backup-storage-5864c8d497-6r5qt                                1/1     Running     0          4d
# suitecrm-mariadb-galera-0                                               1/1     Running     0          4d
# suitecrm-redis-cluster-0                                                1/1     Running     0          6d6h
# suitecrm-redis-cluster-1                                                1/1     Running     0          4d
# suitecrm-redis-cluster-2                                                1/1     Running     0          5d6h
# suitecrm-redis-cluster-3                                                1/1     Running     0          14d
# suitecrm-redis-cluster-4                                                1/1     Running     0          7d6h
# suitecrm-redis-cluster-5                                                1/1     Running     0          4d3h
# --> suitecrm-s3-file-backup-cron-job-28745190-7nrb5 <-- This one        0/1     Completed   0          21m
# --> suitecrm-s3-file-backup-cron-job-28745195-kh46d <-- Or this one     0/1     Completed   0          16m
# --> suitecrm-s3-file-backup-cron-job-28745200-cprvv <-- Or this one     0/1     Completed   0          11m
# --> suitecrm-s3-file-backup-cron-job-28745205-qqdwx <-- Or this one     0/1     Completed   0          6m15s
# --> suitecrm-s3-file-backup-cron-job-28745210-7hzbf <-- Or this one     0/1     Completed   0          75s
```
After selecting the right pod, you can run the following command to create a debug pod in the desired namespace:

```bash
oc debug -n <license plate>-<namespace> suitecrm-app-cron-job-28745145-vfvp6
```

### Restoring the files

> [!WARNING]
>
> Don't forget to replace the `<environment>` placeholder with the appropriate value. This value should be either `dev`, `test`, or `prod`, and it was defined in the [`global.env`](./helm/suitecrm/README.md#parameters) parameter when deployed.

> [!NOTE]
>
> Inside the pod, the files are stored in the `/aws/suitecrm/public/legacy/upload` directory. This is a mounted directory, sharing the same files as the SuiteCRM pods by using the `suitecrm-shared-volume-pvc` PVC.

After creating the debug pod, you will have access to it's terminal. You can run the following command to list current files available inside the S3 bucket:

> [!WARNING]
>
> By running this command you will overwrite the current state of the application.
> Make sure you are in the right environment before running this command.

```bash
aws s3 ls s3://${S3_BUCKET}/<environment>/upload/
```
Before restoring the files, use the `--dryrun` flag to ensure that your command is correct and you are restoring the right files. The `--dryrun` flag will list all operations to be perfomed without actually executing them. The `--delete` flag will delete any files in the destination that are not present in the S3 bucket.

```bash
aws s3 sync s3://${S3_BUCKET}/<environment>/upload/ /aws/suitecrm/public/legacy/upload/ --dryrun --delete
```
After confirming that the command is correct, you can run the command without the `--dryrun` flag:

```bash
aws s3 sync s3://${S3_BUCKET}/<environment>/upload/ /aws/suitecrm/public/legacy/upload/ --delete
```

## Patching

> [!TIP]
>
> Before patching the application, create a backup of the current database to avoid any data loss. You can create a backup by running the following command:
> ```bash
> oc exec -n <license plate>-<namespace> suitecrm-backup-storage-5864c8d497-5h9bs -- ./backup.sh -1
> ```

### Scaling down the pods

Before executing the commands, scale down the pods to one replica. You can do it through the Openshift web console or by running the following command:

```bash
oc scale -n <license plate>-<namespace> deployment/suitecrm --replicas=1
```

### Downloading the patch

> [!NOTE]
>
> This patching process is following the guidelines from the [SuiteCRM Upgrading Guide](https://docs.suitecrm.com/8.x/admin/upgrading/upgrading-82x-versions/)

> [!WARNING]
>
> Always patch to the `latest` version and not to a `beta` one in production. Try the `beta` version locally or in the `dev` environment

First you need to select the SuiteCRM pod to download the patch. You can do that by running the following command:

```bash
oc get pods -n <license plate>-<namespace>

# Output

# NAME                                                 READY   STATUS      RESTARTS   AGE
# --> suitecrm-86db69fd6c-xz94h <-- This one           1/1     Running     0          21m
# suitecrm-app-cron-job-28750635-zwn45                 0/1     Completed   0          70m
# suitecrm-app-cron-job-28750650-kbp4s                 0/1     Completed   0          55m
# suitecrm-app-cron-job-28750665-g99fx                 0/1     Completed   0          40m
# suitecrm-app-cron-job-28750680-gtjk6                 0/1     Completed   0          25m
# suitecrm-app-cron-job-28750695-fxs2w                 0/1     Completed   0          10m
# suitecrm-backup-storage-6bcb6d4ccf-txjgg             1/1     Running     0          43h
# suitecrm-mariadb-galera-0                            1/1     Running     0          43h
# suitecrm-redis-cluster-0                             1/1     Running     0          43h
# suitecrm-redis-cluster-1                             1/1     Running     0          43h
# suitecrm-redis-cluster-2                             1/1     Running     0          43h
# suitecrm-redis-cluster-3                             1/1     Running     0          43h
# suitecrm-redis-cluster-4                             1/1     Running     0          43h
# suitecrm-redis-cluster-5                             1/1     Running     0          43h
# suitecrm-s3-file-backup-cron-job-28750685-mxrn9      0/1     Completed   0          20m
# suitecrm-s3-file-backup-cron-job-28750690-mh4s5      0/1     Completed   0          15m
# suitecrm-s3-file-backup-cron-job-28750695-xrd7v      0/1     Completed   0          10m
# suitecrm-s3-file-backup-cron-job-28750700-mrn64      0/1     Completed   0          5m26s
# suitecrm-s3-file-backup-cron-job-28750705-mg9hq      0/1     Completed   0          26s
```

Create the folder to store the patch file:

```bash
oc exec -n <license plate>-<namespace> suitecrm-86db69fd6c-xz94h -- mkdir -p /suitecrm/tmp/package/upgrade
```

Then, download the patch from the SuiteCRM website or Github repository. For this guide, we are using the [SuiteCRM Github repository releases page](https://github.com/salesagility/SuiteCRM-Core/releases). Run the following command to download the patch:

> [!NOTE]
>
> Don't forget to replace the placeholders `<SuiteCRM version>` with the appropriate version number and also check the whole URL to make sure it's correct.

```bash
oc exec -n <license plate>-<namespace> suitecrm-86db69fd6c-xz94h -- curl -L -o /suitecrm/tmp/package/upgrade/SuiteCRM-<SuiteCRM version> https://github.com/salesagility/SuiteCRM-Core/releases/download/v<SuiteCRM version>/SuiteCRM-<SuiteCRM version>.zip
```

### Patching the application

> [!NOTE]
>
> Don't forget to replace the placeholders `<SuiteCRM version>` with the appropriate version number.

After downloading the patch, you can run the following commands to patch the application:

```bash
oc exec -n <license plate>-<namespace> suitecrm-86db69fd6c-xz94h -- /suitecrm/bin/console suitecrm:app:upgrade -t SuiteCRM-<SuiteCRM version>
```

### Building new images for BC Gov SuiteCRM and BC Gov Advocase Images

#### Changing the SuiteCRM version

You will need to change the SuiteCRM version to donwload in the [./docker/suitecrm-image/suitecrm/scripts/suitecrm/donwload.sh](./docker/suitecrm-image/suitecrm/scripts/suitecrm/download.sh) file. Change is made in the line `22`:

> [!IMPORTANT]
>
> The `<SuiteCRM new version>` placeholder should be replaced with the appropriate version number, splited by dots. I.e.: `8.6.2`.

```sh
local suitecrm_version="<SuiteCRM new version>"
```

After changing the SuiteCRM version, create a new branch and push the changes to the repository. After that, you can create a pull request to merge the changes to the `dev`, `test`, and `main` branches.

#### Building the new images

> [!IMPORTANT]
>
> After merging the changes into the `dev` and `test` branches, the pipelines will be triggered automatically to build new BC Gov Advocase images. Cancel the worflow run and run it again after the `BC Gov SuiteCRM` image is built.

> [!TIP]
>
> Before patching `prod` environment, patch the `dev` and `test` environments, respectively, to make sure everything is working as expected.

After changing the SuiteCRM version, you need to build the new image. You can do that by triggering the [BC Gov SuiteCRM build image](https://github.com/bcgov/SDPR_Case_Management_SuiteCRM/actions/workflows/suitecrm-push-to-artifactory.yaml) pipeline on the repository. Click on the `Run workflow` button, select the `main`branch for both `Use workflow from` and `Building BC GOV SuiteCRM image from (branch)` fields, and click on the `Run workflow` button.

After the BC Gov SuiteCRM image pipeline is finished, you can re-run the [[DEV/UAT] Advocase DEV/UAT Deployment](https://github.com/bcgov/SDPR_Case_Management_SuiteCRM/actions/workflows/advocase-pr-merge-deployment.yaml).

#### Building the BC Gov Advocase image to production

After patching is done in both `dev` and `test` environments, you can patch the `prod` environment. To do that, you need to trigger the [[PROD] Advocase Production Deployment](https://github.com/bcgov/SDPR_Case_Management_SuiteCRM/actions/workflows/advocase-main-deployment.yaml). Click on the `Run workflow` button, select the `main` branch for both `Use workflow from`, and click on the `Run workflow` button.

### Scaling up the pods

After patching the application, you can scale up the pods to the desired number of replicas. You can do that through the Openshift web console or by running the following command:

```bash
oc scale -n <license plate>-<namespace> deployment/suitecrm --replicas=2
```

# Design

You can find the design documentation inside the [./design](./design) directory. Bellow a list of files and their descriptions:

- [./design/Advocase Design Handoff.fig](./design/Advocase%20Design%20Handoff.fig): This file contains the design handoff for the Advocase project. It contains the design system, components, and styles used in the project in FIGMA format.
- [./design/Advocase Design Handoff.pdf](./design/Advocase%20Design%20Handoff.pdf): This file contains the design handoff for the Advocase project. It contains the design system, components, and styles used in the project in PDF format.
- [./design/Manual Accessibility Test Guideline.pdf](./design/Manual%20Accessibility%20Test%20Guideline.pdf): This file contains the manual accessibility test guideline for the Advocase project. It contains the steps to test the accessibility of the project.

# Testing

E2E test were implemented for the Advocase project, in order to validate that all the functional requirements are working as expected.

## Setting up the E2E test environment

First you need to navigate to the test directory:

```bash
cd tests
```

After that, you need to install the dependencies:

```bash
npm install
```

Make a copy of the `.env.example` file and rename it to `.env`. After that, you need to fill the environment variables with the appropriate values.

| Variable | Description |
| --- | --- |
| `KEYCLOAK_AUTH_URL` | The Keycloak/IDIR/SSO URL |
| `KEYCLOAK_REALM` | The Keycloak/IDIR/SSO realm |
| `KEYCLOAK_CLIENT_ID` | The Keycloak/IDIR/SSO client ID |
| `KEYCLOAK_USER` | The Keycloak/IDIR/SSO user |
| `KEYCLOAK_PASSWORD` | The Keycloak/IDIR/SSO password |
| `BASE_URL` | The SuiteCRM base URL |

## Running the E2E test

If you want to run the tests using the interactive mode, you can run the following command:

```bash
npm run cy:electron
```

If you want to run the tests in headless mode, you can run the following command:

```bash
npm run cy:run
```

## Accessibility tests

The accessibility tests are implemented using the `cypress-axe` plugin. The plugin will run the accessibility tests on the application and will generate a report with the results.
If you want to run the accessibility tests, you can run the following command:

```bash
npm run cy:accessibility
```