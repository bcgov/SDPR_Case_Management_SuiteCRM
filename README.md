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
  - [Deploying the project on Openshift](#deploying-the-project-on-openshift)
    - [Deploying using ArgoCD](#deploying-using-argocd)

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

## Deploying the project on Openshift

### Deploying using ArgoCD

If you followed the instructions from [Enabling ArgoCD for the project](#enabling-argocd-for-the-project), you should have ArgoCD setup for the project. 