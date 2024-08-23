<h1>SuiteCRM Helm Chart</h1>

This Helm chart deploys a SuiteCRM instance on a Openshift/Kubernetes cluster using the Helm package manager.

- [Dependecies](#dependecies)
- [Components](#components)
  - [Network Policies](#network-policies)
- [Installing the Chart](#installing-the-chart)
  - [SSO/Keycloak/IDIR Integration](#ssokeycloakidir-integration)
  - [APS Domain Integration](#aps-domain-integration)
  - [Enabling File Backup to S3](#enabling-file-backup-to-s3)
- [Parameters](#parameters)
  - [Global Parameters](#global-parameters)
  - [Redis Cluster Dependency Parameters](#redis-cluster-dependency-parameters)
  - [MariaDB Galera Cluster Dependency Parameters](#mariadb-galera-cluster-dependency-parameters)
  - [BC Gov Backup Storage Dependency Parameters](#bc-gov-backup-storage-dependency-parameters)
    - [`backup-storage.env`](#backup-storageenv)
    - [`backup-storage.backupConfig`](#backup-storagebackupconfig)
  - [Misc Parameters](#misc-parameters)

# Dependecies

- [Bitnami MariaDB Galera Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/mariadb-galera)
- [Bitnami Redis Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/redis-cluster)
- [BCGov Backup Storage Helm Chart](https://github.com/bcgov/helm-charts/tree/master/charts/backup-storage)

To update the dependencies, run the following command:

```bash
helm dependency update helm/suitecrm
```

# Components

| Component | File | Description | Required |
| --------- | ---- | ----------- | -------- |
| Deployment | [deployment.yaml](./templates/deployment.yaml) | SuiteCRM Deployment replica set | Yes |
| Service | [service.yaml](./templates/service.yaml) | Load balancer for SuiteCRM pods | Yes |
| HPA (Horizontal Pod Autoscaler) | [hpa.yaml](./templates/hpa.yaml) | Autoscale SuiteCRM pods based on CPU and Memory utilization | No |
| Ingress | [ingress.yaml](./templates/ingress.yaml) | Ingress for external access to SuiteCRM | No |
| Network Policies | [network-policy.yaml](./templates/network-policy.yaml) | Network policies controlling communications between SuiteCRM pods, CRON Jobs, and dependencies | Yes |
| App CRON Job | [cronjob.yaml](./templates/app-cron-job.yaml) | CRON Job to run SuiteCRM scheduled tasks | Yes |
| S3 Files Backup CRON Job | [s3-backup-cronjob.yaml](./templates/s3-file-backup-cron-job.yaml) | CRON Job to backup SuiteCRM files to S3 | No |

> [!NOTE]
>
> Non-required components are optional and can be set as `enabled: false` in the `values.yaml` file.

## Network Policies

The file [network-policy.yaml](./templates/network-policy.yaml) file contains all the network policies that controls all communications between SuiteCRM pods, CRON Jobs, and dependencies. The network policies are as follows:

| Policy | Description | Required |
| ------ | ----------- | -------- |
| `allow-from-openshift-ingress` | Allow external incoming traffic to SuiteCRM pods | No |
| `allow-app-to-db` | Allow SuiteCRM pods to communicate with MariaDB Galera Cluster Pods | Yes |
| `allow-cron-to-db` | Allow CRON Job Pods to communicate with MariaDB Galera Cluster Pods | Yes |
| `allow-backup-to-db` | Allow Database Backup Pods to communicate with MariaDB Galera Cluster Pods | Yes |
| `allow-app-to-redis` | Allow SuiteCRM pods to communicate with Redis Cluster Pods | Yes |

# Installing the Chart

> [!WARNING]
>
> Always make sure to use the `-n <license plate>-<namespace>` flag to ensure you are running commands in the correct namespace.

> [!IMPORTANT]
>
> If you want to deploy the SuiteCRM chart into Openshift, make sure you are [logged in openshift](../../README.md#login-to-openshift-using-oc-cli) and have the correct permissions to deploy resources.

> [!TIP]
>
> If you run Kubernetes locally, make sure you are selecting the correct context before running the following commands. It might be the case that you switched to the Openshift context. If you are wondering why you are not seing the resources in the cluster, that might be the case.

To install the SuiteCRM chart with the release name `my-release`:

```bash
helm install -n <license plate>-<namespace> my-release helm/suitecrm
```

## SSO/Keycloak/IDIR Integration

To enable SSO/Keycloak/IDIR integration, you need to set the following parameters in the `values.yaml` file:

```yaml
global:
  suitecrmHost: <valid hostname>
  ssoDomain: <valid SSO domain>
  ssoRealm: <valid SSO realm>
  ssoClientId: <valid SSO client ID>
```
Additionally, you need to set up the `SSO_IDP_X509_CERT` parameter when setting up the project for deployment. Check the [Creating required components prior to HELM/ArgoCD deployment](../../openshift/README.md##creating-required-components-prior-to-helmargocd-deployment) page for more information.

> [!NOTE]
>
> Ask for the BC Gov CTO team to get the values for `global.suitecrmHost`, `global.ssoDomain`, `global.ssoRealm`, `global.ssoClientId`, and `SSO_IDP_X509_CERT` for each namespace (`-dev`, `-test`, `-prod`).

## APS Domain Integration

For APS Domain integration, first you need to add create network policy in all namespaces (`-dev`, `-test`, `-prod`) to allow external incoming traffic from your `*.apps.gov.bc.ca` domain. Follow the instructions from the [OCP Network Policies](https://developer.gov.bc.ca/docs/default/component/aps-infra-platform-docs/unlisted/owner-journey-v1/#ocp-network-policies) page according to the cluster you are deploying the project.

After that, you need to set the `global.suitecrmHost` parameter in the `values.yaml` file:

```yaml
global:
  suitecrmHost: <project.name>.apps.gov.bc.ca
```
> [!IMPORTANT]
>
> For production environments, you should use an APS domain or request a custom domain with SSL certificates from the BC Gov CTO team. It's not recommended to use the default Openshift Ingress for production environments.

## Enabling File Backup to S3

To enable file backup to S3, you need to set the following parameters in the `values.yaml` file:

```yaml
global:
  cron:
    filesBackup:
      enabled: true
```

# Parameters

## Global Parameters

| Name | Description |Default |
| ---- | ----------- | ------- |
| `global.env` | Namespace where the SuiteCRM resources will be deployed | `dev` |
| `global.suitecrmHost` | SuiteCRM Hostname for SSO integration | `""` |
| `global.ssoDomain` | SSO Domain for SuiteCRM SSO Integration | `""` |
| `global.ssoRealm` | SSO Realm for SuiteCRM SSO Integration | `""` |
| `global.ssoClientId` | SSO Client ID for SuiteCRM SSO Integration | `""` |
| `global.secrets.suitecrmSecretName` | Secret Name containing all the required passwords for running SuiteCRM | `suitecrm-secrets` |
| `global.secrets.databaseSecretName` | Secret Name containing all the required passwords for the Database | `suitecrm-database-credentials` |
| `global.cron.app.schedule` | CRON Job schedule for SuiteCRM scheduled tasks | `"*/15 * * * *"` |
| `global.cron.filesBackup.enabled` | Enable S3 Files Backup CRON Job | `false` |
| `global.cron.filesBackup.schedule` | CRON Job schedule for SuiteCRM files backup to S3 if `global.cron.filesBackup.enabled: true` | `"0 2 * * *"` |
| `global.volume.name` | Volume name for SuiteCRM shared volume to store uploaded files | `suitecrm-shared-volume-pvc` |
| `global.volume.claimName` | PVC name for SuiteCRM shared volume to store uploaded files | `suitecrm-shared-volume-pvc` |

## Redis Cluster Dependency Parameters

For more information on how to deploy the Redis Cluster Helm Chart, and all available parameters, please refer to the [Bitnami Redis Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/redis-cluster) page.

| Name | Description | Default |
| ---- | ----------- | ------- |
| `redis- cluster.persistence.size` | Redis Cluster PVC size | `100Mi` |
| `redis-cluster.redis.resources.requests.cpu` | CPU resource requests for Redis Cluster Pods | `10m` |
| `redis-cluster.redis.resources.requests.memory` | Memory resource requests for Redis Cluster Pods | `50Mi` |
| `redis-cluster.redis.resources.limits.cpu` | CPU resource limits for Redis Cluster Pods | `50m` |
| `redis-cluster.redis.resources.limits.memory` | Memory resource limits for Redis Cluster Pods | `250Mi` |
| `redis-cluster.userPassword` | Redis Cluster Password | `"false"` |
| `redis-cluster.networkPolicy.allowExternal` | Allow external incoming traffic to Redis Cluster Pods | `false` |
| `redis-cluster.existingSecret` | Existing Secret Name containing the Redis Cluster Password | `"suitecrm-redis-credentials"` |
| `redis-cluster.existingSecretPasswordKey` | Existing Secret Key containing the Redis Cluster Password | `"redis-password"` |

## MariaDB Galera Cluster Dependency Parameters

For more information on how to deploy the MariaDB Galera Cluster Helm Chart, and all available parameters, please refer to the [Bitnami MariaDB Galera Cluster Helm Chart](https://artifacthub.io/packages/helm/bitnami/mariadb-galera) page.

| Name | Description | Default |
| ---- | ----------- | ------- |
| `mariadb-galera.existingSecret` | Existing Secret Name containing the MariaDB Galera Cluster Password | `"suitecrm-database-credentials"` |
| `mariadb-galera.replicaCount` | Number of MariaDB Galera Cluster replicas | `3` |
| `mariadb-galera.persistence.size` | MariaDB Galera Cluster PVC size | `2Gi` |
| `mariadb-galera.db.user` | MariaDB Galera Cluster Database Username | `"suitecrm"` |
| `mariadb-galera.db.name` | MariaDB Galera Cluster Database Name | `"suitecrm"` |
| `mariadb-galera.networkPolicy.allowExternal` | Allow external incoming traffic to MariaDB Galera Cluster Pods | `false` |

## BC Gov Backup Storage Dependency Parameters

For more information on how to deploy the BC Gov Backup Storage Helm Chart, and all available parameters, please refer to the [BCGov Backup Storage Helm Chart](https://github.com/bcgov/helm-charts/tree/master/charts/backup-storage) Github page.

> [!IMPORTANT]
>
> This chart uses the [BC Gov Backup Container MariaDB Docker Image](https://github.com/BCDevOps/backup-container?tab=readme-ov-file). Check the documentation for more information on how to configure the backup storage container.
>
> Due to a bug in the MariaDB Docker image verification process, this project is bulding the image from [this Pull Request](https://github.com/BCDevOps/backup-container/pull/131), which fixes the bug (check [this issue](https://github.com/BCDevOps/backup-container/issues/82) for more information).
>
> Check the [Creating ImageStream and BuildConfig](../../openshift/README.md#creating-imagestream-and-buildconfig) section on how to build and deploy a docker image from a Pull Request.

| Name | Description | Default |
| ---- | ----------- | ------- |
| `backup-storage.image.repository` | BC Gov Backup Storage Image Repository | `docker.io/bcgovimages/backup-container-mariadb` |
| `backup-storage.image.pullPolicy` | BC Gov Backup Storage Image Pull Policy | `Always` |
| `backup-storage.image.tag` | BC Gov Backup Storage Image Tag | `latest` |
| `backup-storage.persistence.backup.claimName` | BC Gov Backup Storage PVC Name | `suitecrm-db-backup-pvc` |
| `backup-storage.persistence.verification.claimName` | BC Gov Backup Verification PVC Name | `suitecrm-db-backup-verification-pvc` |
| `backup-storage.persistence.verification.mountPath` | BC Gov Backup Verification Mount Path | `/var/lib/mysql/data` |
| `backup-storage.db.secretName` | BC Gov Backup Storage Secret Name containing the Database Credentials | `suitecrm-database-credentials` |
| `backup-storage.db.usernameKey` | BC Gov Backup Storage Secret Key containing the Database Username | `mariadb-galera-root-user` |
| `backup-storage.db.passwordKey` | BC Gov Backup Storage Secret Key containing the Database Password | `mariadb-root-password` |
| `backup-storage.env.*` | BC Gov Backup Storage Environment Variables | check [`backup-storage.env`](#backup-storageenv) section for more info |
| `backup-storage.backupConfig` | BC Gov Backup Storage Backup Configuration | check [`backup-storage.backupConfig`](#backup-storagebackupconfig) section for more info |

### `backup-storage.env`

Environment variables used by this project to configure the BC Gov Backup Storage container. The default values are:

| Name | Description | Value |
| ---- | ----------- | ----- |
| `DATABASE_SERVICE_NAME` | The name of the service/host for the default database target. | `suitecrm-mariadb-galera` |
| `NUM_BACKUPS` | This value is used with the daily backup strategy to set the number of backups to retain before pruning. | `31` |
| `DAILY_BACKUPS` | When using the rolling backup strategy this value is used to determine the number of daily (Mon-Sat) backups to retain before pruning. | `6` |
| `WEEKLY_BACKUPS` | When using the rolling backup strategy this value is used to determine the number of weekly (Sun) backups to retain before pruning. | `4` |
| `MONTHLY_BACKUPS`| When using the rolling backup strategy this value is used to determine the number of monthly (last day of the month) backups to retain before pruning. | `1` |
| `MYSQL_USER` | Username of the ephemeral database created to perform the database verification. | `user` |
| `MYSQL_PASSWORD` | Password of the ephemeral database created to perform the database verification. | `user123` |
| `MYSQL_DATABASE` | Name of the ephemeral database created to perform the database verification. | `advocase` |
| `MYSQL_ROOT_PASSWORD` | Root password of the ephemeral database created to perform the database verification. | `root` |

> [!NOTE]
>
> The values for `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`, and `MYSQL_ROOT_PASSWORD` are not sensitive since they are used for the verification process only.
>
> A database is created "on the fly" to verify if the backup file is working and can be restored. The database is deleted after the verification process is completed.

In the `values.yaml` file, you should define this property value as follows:

```yaml
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
```

### `backup-storage.backupConfig`

CRON backup configuration default value:

```
suitecrm-mariadb-galera:3306/advocase

0 1 * * * default ./backup.sh -s
0 4 * * * default ./backup.sh -s -v all
```
In the `values.yaml` file, you should define this property value as follows:

```yaml
backupConfig: |
  suitecrm-mariadb-galera:3306/advocase

  0 1 * * * default ./backup.sh -s
  0 4 * * * default ./backup.sh -s -v all
```
> [!NOTE]
>
> For more information on `backup-storage.env.*` and `backup-storage.backupConfig` parameters, check the [BCGov Backup Container](https://github.com/BCDevOps/backup-container?tab=readme-ov-file#deployment--configuration) documentation page.

## Misc Parameters

| Name | Description | Default |
| ---- | ----------- | ------- |
| `replicaCount` | Number of SuiteCRM pods | `2` |
| `image.repository` | SuiteCRM Docker Image Repository | `image-registry.openshift-image-registry.svc:5000/d0d1b5-tools/bcgovsuitecrm` |
| `image.pullPolicy` | SuiteCRM Docker Image Pull Policy | `Always` |
| `image.tag` | SuiteCRM Docker Image Tag | `latest` |
| `imagePullSecrets` | SuiteCRM Docker Image Pull Secrets | `[]` |
| `nameOverride` | Override the SuiteCRM name | `""` |
| `fullnameOverride` | Override the SuiteCRM full name | `""` |
| `podAnnotations` | Pod Annotations | `{}` |
| `podSecurityContext` | Pod Security Context | `{}` |
| `securityContext` | Security Context | `{}` |
| `service.type` | Service Type | `ClusteIP` |
| `ingress.ingressClassName` | Ingress Class Name | `openshift-default` |
| `ingress.annotations` | Ingress Annotations | `{}` |
| `ingress.enabled` | Enable Ingress | `false` |
| `ingress.hostname` | Ingress Hostname | defaults to `global.suitecrmHost` |
| `ingress.port` | Ingress Port | `8181` |
| `ingress.tls` | Ingress TLS | `true` |
| `ingress.selfSigned` | Ingress Self Signed Certificate | `false` |
| `ingress.extraTls` | Ingress Extra TLS | `- {}` |
| `resources` | SuiteCRM Pod Resources | `{}` |
| `autoscaling.enabled` | Enable HPA | `false` |
| `autoscaling.minReplicas` | HPA Min Replicas | `1` |
| `autoscaling.maxReplicas` | HPA Max Replicas | `5` |
| `autoscaling.targetCPUUtilizationPercentage` | HPA Target CPU Utilization Percentage | `80` |
| `nodeSelector` | Node Selector | `{}` |
| `tolerations` | Tolerations | `[]` |
| `affinity` | Affinity | `{}` |