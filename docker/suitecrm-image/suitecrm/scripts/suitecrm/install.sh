#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script installs SuiteCRM
# Created on: 2024-07-12

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

  infto "Running SuiteCRM installation command"
  $SUITECRM_DIR/bin/console suitecrm:app:install \
                -u "admin" \
                -p $SUITECRM_ADMIN_PWD \
                -U $SUITE_DB_USER \
                -P $SUITE_DB_PASSW \
                -H $SUITE_DB_HOST \
                -N $SUITE_DB_NAME \
                -S $SUITECRM_URL \
                -d "no"

  # Clear cache
  rm -r cache/* public/legacy/cache/*
}