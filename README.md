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

# Technologies Used

- [SuiteCRM](https://suitecrm.com/)
  - [Ubuntu](https://ubuntu.com/)
  - [PHP](https://www.php.net/)
  - [Apache](https://httpd.apache.org/)
  - [Angular](https://angular.dev/)
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