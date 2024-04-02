# BCGov SuiteCRM OpenShift Installation Instruction

These instructions will setup the required resources to run an instance of SuiteCRM within the BC Governmetn OpenShift cluster.

## Requirements

These instructions require that the parent project be provisioned with at least 16GB of storage space, at least 1 CPU and 4GB of RAM. 

## Setup Instructions

Follow these instructions in sequence. If something does not work, ensure that all resources have been removed before trying again or you will run into resource issues.

### Setup Secrets

Subsequent scripts and eviornment variables assume that secrets have been created. 

1. Change the values in the create-suitecrm-secrets.yaml file and deploy to the project.

### Setup Bitnami Maria DB Helm Chart

1. Edit the values in the mariadb-helm-values.yaml as needed. Ensure that the username and password matches the values created in the secrets above.

2. Login to the OpenShift CLI. Ensure you are in the correct project and then enter

> helm install mariadb oci://registry-1.docker.io/bitnamicharts/mariadb-galera -f mariadb-helm-values.yaml

3. Wait for all three replicas to be created before proceeding.

### Import SuiteCRM Database

SuiteCRM password fields in the database are enrypted. Nevertheless you should still change the cbsuitecrm username and password, or just the password, after first login.

No other sensitive, private or personal information is stored in the shell database.

1. Login to the terminal of the 0 node of the MariaDB Galera cluster.

2. Create a directory for the import

> mkdir /bitnami/mariadb/import

3. Return to the OpenShift CLI and upload the database sql file to the host. See example below

> oc rsync /home/agonistes/export mariadb-mariadb-galera-0:/bitnami/mariadb/import

4. Return to the Galera cluster pod terminal and run command to import database.

> mysql -u cbsuite_adm -p < /bitnami/mariadb/import/export/export/bcgov-suite-newest.sql

You will need to enter the password that was entered for the MariaDB cluster.

### Setup Redis

Redis is required in order to persist sessions and connections to SuiteCRM even if the pod that a client is connected to is destoryed.

1. Return to the OpenShift CLI and enter the following command.

> oc apply -f https://raw.githubusercontent.com/bcgov/EDUC-INFRA-COMMON/master/openshift/redis/redis-ha.dc.yaml

2. Wait for all six of the pods to start and enter the following command

> oc get pods -l app=redis -o jsonpath='{range.items[*]}{.status.podIP}:6379 '

3. Copy the output of the command, which should be six ip addresses and ports. Ignore the ' :6379' at the end of the string.

4. Append that output to the following command

> oc exec -it redis-0 -- redis-cli --cluster create --cluster-replicas 1 <APPEND_HERE>

5. When prompted, type yes to accept the setup of the cluster

### Setup SuiteCRM

We have heavily modified the SuiteCRM configuration to make use within OpenShift much easier.

1. Edit the setup-suitecrm-deployment.yaml file. Change all of the environment variables to values that are correct for your environment.

If you do not want to use SAML for logins, you can change the AUTH_TYPE to native. If you are not using SAML you can replace all of the environment variables with placeholder values. All of the variables are required to run.

2. Import the YAML file into your OpenShift project. 

3. Wait until deployment completes and then test the application. 



