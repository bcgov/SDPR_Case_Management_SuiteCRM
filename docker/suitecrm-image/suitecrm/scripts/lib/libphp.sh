#!/bin/bash

########################
# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the PHP functions used in the SuiteCRM scripts
# Created on: 2024-07-15
# Reference from: https://github.com/bitnami/containers/tree/main/bitnami/suitecrm/8/debian-12/rootfs/opt/bitnami/scripts/libphp.sh
# Globals:
#  RUN_DIR: scripts run directory. In container is /opt/suitecrm/scripts, in host is the directory of the script
########################

# Load Generic Libraries
. $RUN_DIR/lib/libos.sh

########################
# Execute/run PHP code and print to stdout
# Globals:
#   None
# Stdin:
#   Code to execute
# Arguments:
#   $1..$n - Input arguments to script
# Returns:
#   None
#########################
php_execute_print_output() {
    local php_cmd
    # Obtain the command specified via stdin
    php_cmd="$(</dev/stdin)"
    debug "Executing PHP code:\n${php_cmd}"
    php -- "$@" <<< "<?php ${php_cmd}"
}

########################
# Execute/run PHP code
# Globals:
#   None
# Stdin:
#   Code to execute
# Arguments:
#   $1..$n - Input arguments to script
# Returns:
#   None
#########################
php_execute() {
    debug_execute php_execute_print_output "$@"
}