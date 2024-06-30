Table of Contents

- [Creating database secrets](#creating-database-secrets)

## Creating database secrets

Fill in the following values in the `./db-secrets.yaml` file:

- `mariadb-galera-root-user`: The root user for the MariaDB Galera cluster.
- `mariadb-root-password`: The password for the MariaDB Galera root user.
- `mariadb-galera-backup-user`: The backup user for the MariaDB Galera cluster.
- `mariadb-galera-mariabackup-password`: The password for the MariaDB Galera backup user.
- `mariadb-password`: The password for the MariaDB Galera database user.

Run the following command to create the secrets in your current Openshift project:

```bash
oc create -f db-secrets.yaml
```
**Note 1:** You need to apply the `db-secrets.yaml` file only once per project.
**Note 2:** Secret values should be base64 encoded. You can use the following command to encode a string:

```bash
echo -n 'your-string' | base64
```

**Note 3:** Keep in mind that <ins>*base64 encoding is not encryption*</ins>. The actual secrets **MUST NOT** be stored in this repository.
**Note 4:** The password related keys **should not be changed** as they follow the naming convention of the MariaDB Galera Helm chart. Refer to the [MariaDB Galera Helm chart documentation](https://artifacthub.io/packages/helm/bitnami/mariadb-galera) and to [MariaDB Galera Helm chart Github repository](https://github.com/bitnami/charts/tree/main/bitnami/mariadb-galera) (specifically the `templates/secrets.yaml` file) for more information. 