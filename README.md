# SDPR_Case_Management_SuiteCRM

Proof of Concept for SuiteCRM installation

## Contents


### api-connections

This folder contains a starting place for api connections to the database. It includes some sample Javascript code to connect to the GraphSQL API that is part of SuiteCRM. It also contains some sample Postman json for getting started.

### dockerfiles

Contains the dockerfile used to create the image from php:8.2apache, and dockerfiles for updates and upgrades to SuiteCRM. The updates and upgrades have not been tested as both the server and SuiteCRM are at latest versions.

### suitecrm-cronjob

Contains a Cronjob file for handling scheduled taks in SuiteCRM. This file will create a working Cronjob that will get the scheduled tasks running but has some issues with cleanup. It needs to be tweaked slightly before use.

### suitecrm-modified-files

A directory with all of the files that were modfified to get the deployment to work well in the BCGov OpenShift enviornment with Keycloak SAML SSL and other featured enabled. This directory structure matched deployed SuiteCRM and can be used to move all modified files in. These files are not environment spcecific.

### suitecrm-new-deployment

Instructions and files for creating a new deployment from scratch.

