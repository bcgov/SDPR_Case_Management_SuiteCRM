#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: Docker entrypoint script for BC GOV SuiteCRM Docker image
# Created on: 2024-07-09

RUN_DIR=${RUN_DIR:-"/opt/suitecrm/scripts"}
SUITECRM_DIR=${SUITECRM_DIR:-"/suitecrm"}
DEV_DEBUG=${DEV_DEBUG:-false}
APACHE_RUN_USER=${APACHE_RUN_USER:-"#$(id -u)"}
APACHE_RUN_GROUP=${APACHE_RUN_GROUP:-"#0"}


export RUN_DIR
export SUITECRM_DIR
export DEV_DEBUG
export APACHE_RUN_USER
export APACHE_RUN_GROUP

# Load the libraries
. $RUN_DIR/lib/liblog.sh
. $RUN_DIR/lib/libfs.sh
. $RUN_DIR/suitecrm/permissions.sh
. $RUN_DIR/suitecrm/certificates.sh
. $RUN_DIR/suitecrm/env-validation.sh
. $RUN_DIR/suitecrm/install.sh

function main() {
  info "Starting SuiteCRM entrypoint script"

  copy_files_with_source_dir_structure "/opt/suitecrm/build-files"

  env_validation
  install_suitecrm

  # This is necessary due to a weird behaviour when
  # running this image in a Openshift environment
  # when the pod starts
  info "Changing /var/run/apache2 permissions"
  chmod -R 777 /var/run/apache2

  info "Enabling Apache modules"
  a2enmod rewrite
}

main "$@"

# Load original entrypoint script
. /usr/local/bin/docker-php-entrypoint
