## Environment Variable Map

The following environment variables need to be defined for the SuiteCRM deployment to work properly.

### Used in /suitecrm/config/packages/hslavich_onelogin_saml.yaml

- SAML_IDP_ENTITY_ID - The SAML provider ID
- SAML_ISP_SSO_URL - The URL for the SAML provider
- SAML_IDP_LOGOUT_URL - Logout URL for the SAML provider
- SAML_IDP_X509 - the X509 certificate for the SAML provider. This should all be on one line.
- SAML_SP_ENTITY_ID - the entity ID recorded by the SAML provider.
- SAML_SP_ASSERTION_URL - SuiteCRM route URL/saml/acs
- SAML_SP_SINGLE_LOGOUT - SuiteCRM route URL/saml/logout
- SAML_SP_BASE_URL - SuiteCRM route URL/saml
- SAML_SP_PRIVATE_KEY - not needed for BCGov KeyCloak, using placeholder value
- SAML_SP_X509 - not needed for BCGov KeyCloak, using placeholder value

### Replaced in /suitecrm/.env 

- AUTH_TYPE - can be changed between saml and native
- SAML_AUTO_CREATE - if enabled, you will need to modify saml.yaml
- SAML_USERNAME_ATTRIBUTE - attribute to identify username - in this case idir_username
- SAML_USE_ATTRIBUTE_FRIENDLY_NAME - set to false for use with BC Gove KeyCloak

### Replaced in /suitecrm/.env.local

- DATABASE_URL - used for logins. String contains password, a secret should be used.

### Used in /suitecrm/public/legacy/config.php

- SUITE_DB_HOST - this should be pointed at the Galera cluster
- SUITE_DB_USER - the default value in use has been cbsuite_adm
- SUITE_DB_PASSW - this should point to the secret with the same name 
- SUITE_DB_PORT - the MariaDB cluster is listening on port 3306

### Used in /usr/local/etc/php/php.ini

- SESSION_SAVE_HANDLER - can be set to files, redis, or rediscluster. Redis is required for HA session failover.
- SESSION_SAVE_PATH - can be a file path for files, a redis command, or a rediscluster command.

- 
