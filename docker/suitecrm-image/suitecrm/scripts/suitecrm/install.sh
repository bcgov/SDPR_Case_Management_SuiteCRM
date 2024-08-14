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
#   None
# Returns:
#   None
#########################
function install_suitecrm() {
  #Check if /tmp/custom/suitecrm exists
  if [[ -d "/tmp/custom/suitecrm" ]]; then
    info "Copying custom files to SuiteCRM directory"
    copy_files_with_source_dir_structure "/tmp/custom/suitecrm" "/suitecrm"
  fi

  info "Installing SuiteCRM"

  # For some reason, the SuiteCRM installation CLI command only works after
  # we access the SuiteCRM URL. So, we need to access the SuiteCRM URL first
  curl -S localhost:8181/install.php

  suitecrm_install_or_rebuild
}

########################
# Install or Rebuild SuiteCRM
# Arguments:
#   None
# Returns:
#   None
#########################
function suitecrm_install_or_rebuild() {
  info "Checking if SuiteCRM is already installed"

  info "Running query to check if SuiteCRM is already installed"
  local query_result=$(echo "SELECT COUNT(*) FROM users" | mariadb -s -N --host $SUITE_DB_HOST --port $SUITE_DB_PORT --user $SUITE_DB_USER --database $SUITE_DB_NAME --password=$SUITE_DB_PASSW)

  if [[ $query_result -ge 1 ]]; then
    info "SuiteCRM is already installed"

    info "Copying SuiteCRM temporary configuration file"
    cp /opt/suitecrm/scripts/suitecrm/php/config-db-tpl.php $SUITECRM_DIR/public/legacy/config.php
    
    # Remove .env.local file
    info "Removing .env.local file"
    rm $SUITECRM_DIR/.env.local

    # Clear cache
    info "Clearing SuiteCRM cache"
    rm -r cache/* public/legacy/cache/*

    suitecrm_rebuild_files
    # 1st run to ensure SuiteCRM is properly configured
    suitecrm_repair
  else
    info "SuiteCRM is not installed"

    suitecrm_install_command
  fi

  # 2nd run to ensure customizations are applied
  suitecrm_repair
}

########################
# Install SuiteCRM command
# Arguments:
#   None
# Returns:
#   None
#########################
function suitecrm_install_command() {
  info "Running SuiteCRM installation command"
  $SUITECRM_DIR/bin/console suitecrm:app:install \
                -u "admin" \
                -p $SUITECRM_ADMIN_PWD \
                -U $SUITE_DB_USER \
                -P $SUITE_DB_PASSW \
                -H $SUITE_DB_HOST \
                -N $SUITE_DB_NAME \
                -S 'http://localhost:8181/ \
                -d "no"
}

########################
# Rebuild SuiteCRM's configuration file
# Globals:
#   SUITECRM_DIR: SuiteCRM installation directory
# Arguments:
#   None
# Returns:
#   None
#########################
function suitecrm_rebuild_files() {
  # The below script executes the code from "Repair > Rebuild Config File" to regenerate the configuration file
  # We prefer to run a script rather than via cURL requests because it would require to login, and could cause
  # issues with SUITECRM_SKIP_BOOTSTRAP

  info "Rebuilding SuiteCRM configuration file"
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
EOF

  if [[ $? -ne 0 ]]; then
    error "Failed to rebuild SuiteCRM configuration file"
    exit 1
  fi
}

function suitecrm_repair() {
  info "Executing Quick Repair and Rebuild script"
  php /opt/suitecrm/scripts/suitecrm/php/rebuild-suitecrm.php --instance /suitecrm/public/legacy

  if [[ $? -ne 0 ]]; then
    error "Failed to run Quick Repair and Rebuild script"
    exit 1
  fi
}