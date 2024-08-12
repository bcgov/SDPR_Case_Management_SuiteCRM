Table of Contents

- [Deployment pre-requisites](#deployment-pre-requisites)
  - [Allowing other namespaces to pull images from `-tools` namespace](#allowing-other-namespaces-to-pull-images-from--tools-namespace)
  - [Creating required components prior to HELM deployment](#creating-required-components-prior-to-helm-deployment)
- [Creating Github Actions service account](#creating-github-actions-service-account)

**IMPORTANT:** Always make sure to use the `-n <license plate>-<namespace>` flag when running `oc` commands to ensure you are running commands in the correct namespace.

## Deployment pre-requisites

### Allowing other namespaces to pull images from `-tools` namespace

Run the following command in all namespaces (`-dev`, `-test`, `-prod`) to allow other namespaces to pull images from the `-tools` namespace:

```bash
oc policy add-role-to-group system:image-puller system:serviceaccounts:<license plate>-<namespace> -n <license plate>-tools
```

### Creating required components prior to HELM deployment

Copy the `./openshift/pre-deployment-envs.example.env` file to `./openshift/pre-deployment-envs.env` and fill in the required values:

<!-- Table with all variables with the following headers: Variable Name, Description, Required, Default value -->
| Variable Name | Description | Required | Default value |
| --- | --- | --- | --- |
| `APP_NAME` | The name of the application | False | suitecrm |
| `DB_ROOT_USER` | MariaDB Galera Cluster Root User | True | |
| `DB_ROOT_PASSWORD` | MariaDB Galera Cluster Root Password | True | |
| `DB_BACKUP_USER` | MariaDB Galera Cluster Backup User | True | |
| `DB_BACKUP_PASSWORD` | MariaDB Galera Cluster Backup Password | True | |
| `DB_PASSWORD` | MariaDB Galera Cluster Database Password | True | |
| `DB_USER` | MariaDB Galera Cluster Database User | True | |
| `DB_NAME` | MariaDB Galera Cluster Database Name | True | suitecrm |
| `DB_HOST` | MariaDB Galera Cluster Database Host | True | |
| `SUITECRM_ADMIN_PASSWORD` | SuiteCRM Admin Password | True | |
| `SSO_IDP_X509_CERT` | The SSO IDP X509 certificate for IDIR/Keycloak integration | False | |
| `OAUTH_KEY` | The OAuth key for SuiteCRM | False | |
| `AWS_ACCESS_KEY_ID` | The AWS access key ID for S3 backup | True | |
| `AWS_SECRET_ACCESS_KEY` | The AWS secret access key for S3 backup | True | |
| `S3_ENDPOINT_URL` | The AWS S3 endpoint URL for S3 backup | True | |
| `S3_BUCKET_NAME` | The AWS S3 bucket name for S3 backup | True | |
| `BACKUP_VOLUME_SIZE` | The size of the backup volume | True | 5Gi |
| `VERIFICATION_VOLUME_SIZE` | Backup Verification Volume Size | True | 2Gi |
| `SUITECRM_SHARED_VOLUME_SIZE` | The size of the volume shared among SuiteCRM pods for file storage | True | 5Gi |

**Note 1:** The `S3URI` and `bucketName` are provide by BC Gov DevOps team. You should contact them and submit a request to create a new S3 bucket for your project. The `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_ENDPOINT_URL`, and `S3_BUCKET_NAME` variables are extracted from the `s3-iam` secret provided by BC Gov DevOps team. The `S3URI` is in the format `https://<aws-access-key-id>:<aws-secret-access-key>@<aws-endpoint-url>`.
<br />
**Note 2:** The `DB_USER` and `DB_NAME` variables should match `mariadb-galera.db.user` and `mariadb-galera.db.name` in the HELM chart `values.yaml` file. Also, the `DB_HOST` variable should match the name of the MariaDB Galera Cluster service in the Openshift project. The name of the service is in the format `<chart name>-mariadb-galera`.

Run the following command to create the components requiered for the HELM deployment:

```bash
oc process -f ./openshift/pre-deployment-template.yaml --param-file=./openshift/pre-deployment-envs.env | oc create -n <licence plate>-<namespace> -f -
```

## Creating Github Actions service account

Run the following command in all required namespaces (`-dev`, `-test`, `-prod`) to create the Github Actions service account in your current Openshift project:

```bash
oc process -f ./openshift/github-actions-template.yaml | oc -n <license plate>-<namespace> apply -f -
```