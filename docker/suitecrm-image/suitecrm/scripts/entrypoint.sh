#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: Docker entrypoint script for BC GOV SuiteCRM Docker image
# Created on: 2024-07-09

RUN_DIR=${RUN_DIR:-"/opt/suitecrm/scripts"}
SUITECRM_DIR=${SUITECRM_DIR:-"/suitecrm"}

export RUN_DIR
export SUITECRM_DIR

# Load the libraries
. $RUN_DIR/lib/liblog.sh
. $RUN_DIR/lib/libfs.sh
. $RUN_DIR/suitecrm/permissions.sh
. $RUN_DIR/suitecrm/certificates.sh

function main() {
  info "Starting SuiteCRM entrypoint script"

  copy_files_with_source_dir_structure "/opt/suitecrm/build-files"
  create_suitecrm_ssl_certificates
  change_suitecrm_permissions

  # This is necessary due to a weird behaviour when
  # running this image in a Openshift environment
  # when the pod starts
  info "Changing /var/run/apache2 permissions"
  chmod -R 777 /var/run/apache2

  info "Enabling Apache modules"
  a2enmod rewrite ssl
}

main "$@"

# Load original entrypoint script
. /usr/local/bin/docker-php-entrypoint
