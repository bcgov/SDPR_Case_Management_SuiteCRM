# BCGov SuiteCRM OpenShift Installation Instructions

These instructions will setup the required resources to run an instance of SuiteCRM within the BC Government OpenShift cluster.

Features:
- Highly Available with session sharing between pods
- SAML support for authentication

## Requirements

These instructions require that the parent project be provisioned with at least 16GB of storage space, at least 1 CPU and 4GB of RAM. 

- Helm
- SAML client information - supports https://digital.gov.bc.ca/bcgov-common-components/pathfinder-sso/

To install, we have created a Helm Chart that includes the two following dependencies:

Dependencies:
1. Mariadb Galera Helm - https://github.com/bitnami/charts/tree/main/bitnami/mariadb-galera/
2. Redis Cluster Helm - https://github.com/bitnami/charts/tree/main/bitnami/redis-cluster

## Setup Instructions

### 1. Create Image in openshift
- Install buildconfig.yaml and imagestream.yaml in your tools area
- Run build to create image used by helm installation

### 2. Install SuiteCRM using Helm

Follow these instructions in sequence. If something does not work, ensure that all resources have been removed before trying again or you will run into resource issues.

Create a values_dev.yaml file with your specific updates.  See exmaple in repo.

> helm dependency update ./suitecrm

> helm install suitecrm ./suitecrm  -f values_dev.yaml

### One time Initial Creation of SuiteCRM Database

Initial setup requires you to seed the database.  At this time, this isn't automated.  Pull request to add this feature welcomed.

At this point, prior to launching SuiteCRM, remote shell into the newly created suite crm pod and run these commands:

> sed -i "s/'installer_locked' => true,/'installer_locked' => false,/g" /suitecrm/public/legacy/config.php

> /suitecrm/bin/console suitecrm:app:install -u suiteadmin -p $SUITECRM_ADMIN_PWD -U $SUITE_DB_USER -P $SUITE_DB_PASSW -H $SUITE_DB_HOST -N $SUITE_DB_NAME -S "https://$SUITECRM_URL/" -d "no"

And then run those two commands again. Not sure why but it is needed.

Once successful, you will need to create your first SAML supported user by logging into SuiteCRM and bypassing SAML authentication.  This is done by 

1. Go to https://<_suitecrm url>/auth
2. User name is: suiteadmin
3. Password  can be found in your values_custom_file