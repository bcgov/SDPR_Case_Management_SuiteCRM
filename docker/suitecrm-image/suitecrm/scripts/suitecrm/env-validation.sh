#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script validates required environment variables for SuiteCRM
# Created on: 2024-07-12

########################
# Install SuiteCRM
# Arguments:
#   Extension list
# Returns:
#   None
#########################
function env_validation() {
  info "Validating SuiteCRM environment variables"

  if [ -z "$SUITECRM_ADMIN_PWD" ]; then
    error "SUITECRM_ADMIN_PWD environment variable is required"
    exit 1
  fi

  if [ -z "$SUITE_DB_USER" ]; then
    error "SUITE_DB_USER environment variable is required"
    exit 1
  fi

  if [ -z "$SUITE_DB_PASSW" ]; then
    error "SUITE_DB_PASSW environment variable is required"
    exit 1
  fi

  if [ -z "$SUITE_DB_HOST" ]; then
    error "SUITE_DB_HOST environment variable is required"
    exit 1
  fi

  if [ -z "$SUITE_DB_NAME" ]; then
    error "SUITE_DB_NAME environment variable is required"
    exit 1
  fi

  if [ -z "$SUITECRM_URL" ]; then
    error "SUITECRM_URL environment variable is required"
    exit 1
  fi
}