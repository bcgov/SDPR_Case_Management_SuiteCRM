# SDPR_Case_Management_SuiteCRM

Proof of Concept for SuiteCRM installation

## Contents


### api-connections

This folder contains a starting place for api connections to the database. It includes some sample Javascript code to connect to the GraphSQL API that is part of SuiteCRM. It also contains some sample Postman json for getting started.

### dockerfiles

Contains the dockerfile used to create the image from php:8.2apache, and dockerfiles for updates and upgrades to SuiteCRM. The updates and upgrades have not been tested as both the server and SuiteCRM are at latest versions.

### suitecrm

This directory is a result of running the SuiteCRM Core 8.5 installer. This installer and GitHub repo is located at:

https://github.com/salesagility/SuiteCRM-Core

The installer was run with the folling comamnd within the downloaded repo.

./bin/console suitecrm:app:install -u "suitecrm_admin_username" -p "suitecrm_admin_password" -U "db_user" -P "db_password" -H "db_host" -N "db_name"

https://docs.suitecrm.com/8.x/admin/installation-guide/running-the-cli-installer/

This was installed and extracted locally. We then went through the directories and removed all files that contain passwords or other sensitive information. All URLs and configurations were instead made to use environment variables.

Every file that was modified for this is contained in the suitecrm-modified-files directory for reference. 

The current dockerfiles in use install and configure all of the dependencies for the SuiteCRM installer. If you wish to run the installer again from within the dockerfile, just ensure that it runs after the isntallation of all of the php dependencies and before all of the chmod commands a the end of the file.

If you run the installer the database will be deployed again, which is generaly not desired. If you wish to do so but keep the data, ensure you backup the data, run the installer and then restore the data.

### suitecrm-cronjob

Contains a Cronjob file for handling scheduled taks in SuiteCRM. This file will create a working Cronjob that will get the scheduled tasks running but has some issues with cleanup. It needs to be tweaked slightly before use.

### suitecrm-modified-files

A directory with all of the files that were modfified to get the deployment to work well in the BCGov OpenShift enviornment with Keycloak SAML SSL and other featured enabled. This directory structure matched deployed SuiteCRM and can be used to move all modified files in. These files are not environment spcecific.

### suitecrm-new-deployment

Instructions and files for creating a new deployment from scratch.

