#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script installs SuiteCRM
# Created on: 2024-07-12
# Reference from: https://github.com/bitnami/containers/blob/main/bitnami/suitecrm/8/debian-12/rootfs/opt/bitnami/scripts/libsuitecrm.sh

# Load Generic Libraries
. $RUN_DIR/lib/liblog.sh
. $RUN_DIR/lib/libphp.sh

########################
# Install SuiteCRM
# Arguments:
#   Extension list
# Returns:
#   None
#########################
function install_suitecrm() {
  info "Installing SuiteCRM"

  # For some reason, the SuiteCRM installation CLI command only works after
  # we access the SuiteCRM URL. So, we need to access the SuiteCRM URL first
  curl -S localhost:8181/install.php

  info "Running SuiteCRM installation command"
  $SUITECRM_DIR/bin/console suitecrm:app:install \
                -u "admin" \
                -p $SUITECRM_ADMIN_PWD \
                -U $SUITE_DB_USER \
                -P $SUITE_DB_PASSW \
                -H $SUITE_DB_HOST \
                -N $SUITE_DB_NAME \
                -S $SUITECRM_URL \
                -d "no"

  # Remove .env.local file
  info "Removing .env.local file"
  rm $SUITECRM_DIR/.env.local

  # Clear cache
  info "Clearing SuiteCRM cache"
  rm -r cache/* public/legacy/cache/*

  # Rebuild SuiteCRM's configuration file
  suitecrm_rebuild_files
  if [[ $? -ne 0 ]]; then
    error "Failed to rebuild SuiteCRM configuration file"
    return 1
  fi
}

########################
# Rebuild SuiteCRM's configuration file
# Globals:
#   *
# Arguments:
#   None
# Returns:
#   true if succeded, false otherwise
#########################
suitecrm_rebuild_files() {
    # The below script executes the code from "Repair > Rebuild Config File" to regenerate the configuration file
    # We prefer to run a script rather than via cURL requests because it would require to login, and could cause
    # issues with SUITECRM_SKIP_BOOTSTRAP
    php_execute <<EOF
chdir('$SUITECRM_DIR/public/legacy');
define('sugarEntry', true);
require_once('include/utils.php');

// Based on 'install.php' includes
require_once('include/SugarLogger/LoggerManager.php');
require_once('sugar_version.php');
require_once('suitecrm_version.php');
require_once('include/TimeDate.php');
require_once('include/Localization/Localization.php');
require_once('include/SugarTheme/SugarTheme.php');
require_once('include/utils/LogicHook.php');
require_once('data/SugarBean.php');
// Include files that are loaded by 'entryPoint.php'
// (Note: We cannot include 'entryPoint.sh' since it is only expected to work via HTTP requests)
require_once('include/SugarEmailAddress/SugarEmailAddress.php');
require_once('include/utils/file_utils.php');

// Rebuild the configuration file
// Based on the RebuildConfig action in the admin panel
\$clean_config = loadCleanConfig();
rebuildConfigFile(\$clean_config, \$sugar_version);

// Rebuild the .htaccess file
// Based on the UpgradeAccess action in the admin panel
// require_once 'include/upload_file.php';
// UploadStream::register();
// require('modules/Administration/UpgradeAccess.php');
EOF
}