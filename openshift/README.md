Table of Contents
- [Deployment pre-requisites](#deployment-pre-requisites)
  - [Allowing other namespaces to pull images from `-tools` namespace](#allowing-other-namespaces-to-pull-images-from--tools-namespace)
  - [Creating required components prior to HELM/ArgoCD deployment](#creating-required-components-prior-to-helmargocd-deployment)
- [Creating Github Actions service account](#creating-github-actions-service-account)
- [Building images on Openshift](#building-images-on-openshift)
  - [Creating ImageStream and BuildConfig](#creating-imagestream-and-buildconfig)
    - [`REPOSITORY_REF`](#repository_ref)
    - [Starting a build](#starting-a-build)

> [!WARNING]
>
> Always make sure to use the `-n <license plate>-<namespace>` flag when running `oc` commands to ensure you are running commands in the correct namespace.

## Deployment pre-requisites

### Allowing other namespaces to pull images from `-tools` namespace

Run the following command in all namespaces (`-dev`, `-test`, `-prod`) to allow other namespaces to pull images from the `-tools` namespace:

```bash
oc policy add-role-to-group system:image-puller system:serviceaccounts:<license plate>-<namespace> -n <license plate>-tools
```

### Creating required components prior to HELM/ArgoCD deployment

Copy the `./openshift/pre-deployment-envs.example.env` file to `./openshift/pre-deployment-envs.env` and fill in the required values:

| Variable Name | Description | Required | Default value |
| --- | --- | --- | --- |
| `APP_NAME` | The name of the application | False | suitecrm |
| `DB_ROOT_USER` | MariaDB Galera Cluster Root User | False | root |
| `DB_ROOT_PASSWORD` | MariaDB Galera Cluster Root Password | True | |
| `DB_BACKUP_USER` | MariaDB Galera Cluster Backup User | True | |
| `DB_BACKUP_PASSWORD` | MariaDB Galera Cluster Backup Password | True | |
| `DB_PASSWORD` | MariaDB Galera Cluster Database Password | True | |
| `DB_USER` | MariaDB Galera Cluster Database User | False | suitecrm |
| `DB_NAME` | MariaDB Galera Cluster Database Name | False | suitecrm |
| `DB_HOST` | MariaDB Galera Cluster Database Host | True | |
| `REDIS_PASSWORD` | Redis Cluster Password | True | |
| `REDIS_HOST` | Redis Cluster Host | True | |
| `SUITECRM_ADMIN_PASSWORD` | SuiteCRM Admin Password | True | |
| `SSO_IDP_X509_CERT` | The SSO IDP X509 certificate for IDIR/Keycloak integration | False | cert |
| `OAUTH_KEY` | The OAuth key for SuiteCRM | False | key |
| `AWS_ACCESS_KEY_ID` | The AWS access key ID for S3 backup | True | |
| `AWS_SECRET_ACCESS_KEY` | The AWS secret access key for S3 backup | True | |
| `S3_ENDPOINT_URL` | The AWS S3 endpoint URL for S3 backup | True | |
| `S3_BUCKET_NAME` | The AWS S3 bucket name for S3 backup | True | |
| `BACKUP_VOLUME_SIZE` | The size of the backup volume | False | 5Gi |
| `VERIFICATION_VOLUME_SIZE` | Backup Verification Volume Size | False | 2Gi |
| `SUITECRM_SHARED_VOLUME_SIZE` | The size of the volume shared among SuiteCRM pods for file storage | False | 5Gi |

> [!NOTE]
> The `S3URI` and `bucketName` are provide by BC Gov DevOps team. You should contact them and submit a request to create a new S3 bucket for your project.
> 
> The `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `S3_ENDPOINT_URL`, and `S3_BUCKET_NAME` variables are extracted from the `s3-iam` secret provided by BC Gov DevOps team. The `S3URI` is in the format `https://<aws-access-key-id>:<aws-secret-access-key>@<aws-endpoint-url>`.

> [!NOTE]
> The `DB_USER` and `DB_NAME` variables should match `mariadb-galera.db.user` and `mariadb-galera.db.name` in the HELM chart `values.yaml` file. Also, the `DB_HOST` variable should match the name of the MariaDB Galera Cluster service in the Openshift project.
> 
> The name of the service is in the format `<chart name>-mariadb-galera`.

> [!NOTE]
> The `REDIS_HOST` variable should match the name of the Redis Cluster service in the Openshift project.
> 
> The name of the service is in the format `<chart name>-redis-cluster`.

Run the following command to create the components required for the HELM/ArgoCD deployment:

```bash
oc process -f ./openshift/pre-deployment-template.yaml --param-file=./openshift/pre-deployment-envs.env | oc create -n <licence plate>-<namespace> -f -
```

## Creating Github Actions service account

Run the following command in all required namespaces (`-dev`, `-test`, `-prod`) to create the Github Actions service account in your current Openshift project:

```bash
oc process -f ./openshift/github-actions-template.yaml | oc -n <license plate>-<namespace> apply -f -
```

## Building images on Openshift

### Creating ImageStream and BuildConfig

If you need to build images on Openshift, you can use the `./openshift/local-build-config-template.yaml` file to create an `ImageStream` and a `BuildConfig` for your project. Copy the `./openshift/local-build-config-envs.example.env` file to `./openshift/local-build-config-envs.env` and fill in the required values

| Variable Name | Description | Required | Default value |
| --- | --- | --- | --- |
| `IMAGE_STREAM_NAME` | The name of the image stream | True | |
| `TAG` | The tag to apply to the image stream | False | latest |
| `DOCKERFILE_NAME` | The name of the Dockerfile to use | False | Dockerfile |
| `REPOSITORY_URL` | The URL of the git repository | True | |
| `REPOSITORY_REF` | The git reference to use | False | main |
| `CONTEXT_DIR` | The context directory to use | False | . |

Run the following command to create the `ImageStream` and `BuildConfig`:

```bash
oc process -f ./openshift/local-build-config-template.yaml --param-file=./openshift/local-build-config-envs.env | oc create -n <license plate>-<namespace> -f -
```

#### `REPOSITORY_REF`
This variable accepts any valid git reference, such as branch name, tag, commit hash, pull request, etc. To reference a pull request, you can use the following format: `refs/pull/<pull request number>/head`. Check the [Openshift documentation](https://docs.openshift.com/container-platform/4.16/cicd/builds/creating-build-inputs.html#builds-source-code_creating-build-inputs) for more information.

Also, you can list all remote refs by running the following command:

```bash
git ls-remote
```
#### Starting a build

To start a build, run the following command:

```bash
oc start-build bc/<build config name> -n <license plate>-<namespace>
```

If you want to start a build with your local files, you can use the `oc start-build` command with the `--from-dir` flag:

```bash
oc start-build bc/<build config name> --from-dir=. -n <license plate>-<namespace>
```