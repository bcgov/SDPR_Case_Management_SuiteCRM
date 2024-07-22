#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the permissions changes function for SuiteCRM
# Created on: 2024-07-10

########################
# Change SuiteCRM permissions according to installation guide
# https://docs.suitecrm.com/8.x/admin/installation-guide/downloading-installing/#_2_4_set_permissions
# Arguments:
#   None
# Returns:
#   None
#########################
function change_suitecrm_permissions() {
  info "Changing SuiteCRM permissions"

  local suitecrm_dir="$SUITECRM_DIR"
  local user="$APACHE_RUN_USER"
  local group="$APACHE_RUN_GROUP"

  if [[ ! -d $suitecrm_dir ]]; then
    error "SuiteCRM directory not found"
    exit 1
  fi

  info "Changing directories permissions to 2775"
  find $suitecrm_dir -type d -not -perm 2775 -exec chmod 2775 {} \;
  info "Changing files permissions to 0644"
  find $suitecrm_dir -type f -not -perm 0644 -exec chmod 0644 {} \;

  info "Changing files ownership to $user:$group"
  # Ensuring that all files are owned by www-data:www-data
  find $suitecrm_dir ! -user $user -exec chown $user:$group {} \;
  
  info "Adding execution permission to console script"
  chmod +x $suitecrm_dir/bin/console
}