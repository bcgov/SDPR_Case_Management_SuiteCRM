#!/bin/bash

########################
# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the log OS used in the SuiteCRM scripts
# Created on: 2024-07-15
# Reference from: https://github.com/bitnami/containers/tree/main/bitnami/suitecrm/8/debian-12/prebuildfs/opt/bitnami/scripts/libvalidation.sh 
# Globals:
#  RUN_DIR: scripts run directory. In container is /opt/suitecrm/scripts, in host is the directory of the script
########################

# Load Generic Libraries
. $RUN_DIR/lib/liblog.sh

########################
# Check if the provided argument is a boolean or is the string 'yes/true'
# Arguments:
#   $1 - Value to check
# Returns:
#   Boolean
#########################
is_boolean_yes() {
    local -r bool="${1:-}"
    # comparison is performed without regard to the case of alphabetic characters
    shopt -s nocasematch
    if [[ "$bool" = 1 || "$bool" =~ ^(yes|true)$ ]]; then
        true
    else
        false
    fi
}