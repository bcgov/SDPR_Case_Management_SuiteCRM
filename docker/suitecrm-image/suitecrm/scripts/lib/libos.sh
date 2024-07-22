#!/bin/bash

########################
# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the log OS used in the SuiteCRM scripts
# Created on: 2024-07-15
# Reference from: https://github.com/bitnami/containers/tree/main/bitnami/suitecrm/8/debian-12/prebuildfs/opt/bitnami/scripts/libos.sh
# Globals:
#  RUN_DIR: scripts run directory. In container is /opt/suitecrm/scripts, in host is the directory of the script
########################

# Load Generic Libraries
. $RUN_DIR/lib/libvalidation.sh

#########################
# Redirects output to /dev/null if debug mode is disabled
# Globals:
#   DEV_DEBUG
# Arguments:
#   $@ - Command to execute
# Returns:
#   None
#########################
debug_execute() {
    if is_boolean_yes "${DEV_DEBUG:-false}"; then
        "$@"
    else
        "$@" >/dev/null 2>&1
    fi
}