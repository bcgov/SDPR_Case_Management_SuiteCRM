Table of Contents

- [Secrets](#secrets)
  - [Generating Base64 encoded values](#generating-base64-encoded-values)
  - [Creating SuiteCRM database secrets](#creating-suitecrm-database-secrets)
  - [Creating SuiteCRM secrets](#creating-suitecrm-secrets)
  - [Creating S3 Bucket file backup secrets](#creating-s3-bucket-file-backup-secrets)
- [Creating database backup and verification volume claims](#creating-database-backup-and-verification-volume-claims)
  - [Creating the backup volume claim](#creating-the-backup-volume-claim)
  - [Creating the verification volume claim](#creating-the-verification-volume-claim)

## Secrets

### Generating Base64 encoded values

**Note 1:** Secret values should be base64 encoded. You can use the following command to encode a string:

```bash
echo -n 'your-string' | base64
```

**Note 2:** Keep in mind that <ins>*base64 encoding is not encryption*</ins>. The actual secrets **MUST NOT** be stored in this repository.
**Note 3:** The password related keys **should not be changed** as they follow the naming convention of the MariaDB Galera Helm chart. Refer to the [MariaDB Galera Helm chart documentation](https://artifacthub.io/packages/helm/bitnami/mariadb-galera) and to [MariaDB Galera Helm chart Github repository](https://github.com/bitnami/charts/tree/main/bitnami/mariadb-galera) (specifically the `templates/secrets.yaml` file) for more information.

### Creating SuiteCRM database secrets

Fill in the following values in the `./openshift/db-secrets.yaml` file:

- `mariadb-galera-root-user`: The root user for the MariaDB Galera cluster.
- `mariadb-root-password`: The password for the MariaDB Galera root user.
- `mariadb-galera-backup-user`: The backup user for the MariaDB Galera cluster.
- `mariadb-galera-mariabackup-password`: The password for the MariaDB Galera backup user.
- `mariadb-password`: The password for the MariaDB Galera database user.

Run the following command to create the secrets in your current Openshift project:

```bash
oc create -f ./openshift/db-secrets.yaml
```
### Creating SuiteCRM secrets

Fill in the following values in the `./openshift/suitecrm-secrets.yaml` file:

- `DATABASE_URL`: The Database URL used on instead of `.env.local` file
- `suitecrmadminpwd`: The SuiteCRM admin password
- `sso_idp_x509`: The SSO IDP X509 certificate for SAML integration
- `oauthkey`: The SuiteCRM OAuth key

```bash
oc create -f ./openshift/suitecrm-secrets.yaml
```

### Creating S3 Bucket file backup secrets

Fill in the following values in the `./openshift/s3-backup-secrets.yaml` file:

- `aws-access-key-id`: AWS access key ID
- `aws-secret-access-key`: AWS secret access key
- `aws-endpoint-url`: The AWS endpoint URL
- `bucketName`: The S3 bucket name
- `S3URI`: The S3 URI

```bash
oc create -f ./openshift/s3-backup-secrets.yaml
```

**Note 1:** The `S3URI` and `bucketName` are provide by BC Gov DevOps team. You should contact them and submit a request to create a new S3 bucket for your project.
**Note 2:**: The `aws-access-key-id`, `aws-secret-access-key` and `aws-endpoint-url` are derived from the `S3URI` secret provided by BC Gov DevOps team. The `S3URI` is in the format `https://<aws-access-key-id>:<aws-secret-access-key>@<aws-endpoint-url>`.

## Creating database backup and verification volume claims

The backup and backup verification volume claims are necessary for the backup and verification processes to work. Check the following documenations for more info:

- [BC Gov Backup-container documentation](https://github.com/BCDevOps/backup-container): how to configure the backup container
- [BC Gov Backup Storage Helm Chart](https://github.com/bcgov/helm-charts/tree/master/charts/backup-storage): how to deploy using Helm
- [BC Gov Database backup best practices documentation](https://developer.gov.bc.ca/docs/default/component/platform-developer-docs/docs/database-and-api-management/database-backup-best-practices/)

### Creating the backup volume claim

Run the following command to create the backup persistent volume claim in your current Openshift project:

```bash
oc create -f ./openshift/db-backup-pvc.yaml
```

### Creating the verification volume claim

Run the following command to create the verification persistent volume claim in your current Openshift project:

```bash
oc create -f ./openshift/db-backup-verification-pvc.yaml
```