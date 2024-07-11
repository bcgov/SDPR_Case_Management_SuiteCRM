#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the creation functions for SuiteCRM SSL certificates
# Created on: 2024-07-10

########################
# Create SuiteCRM SSL certificates
# Arguments:
#   None
# Returns:
#   None
#########################
function create_suitecrm_ssl_certificates() {
  info "Creating SuiteCRM SSL certificates"
  local certificates_dir="$SUITECRM_DIR/sslcerts"

  info "Creating SSL certificates directory"
  mkdir -p $certificates_dir
  info "Generating SSL certificates"
  openssl req -x509 -nodes -days 365 -newkey rsa:2048 -subj /emailAddress=support@gov./C=CA/ST=BC/L=Victoria/O=BCGov/OU=Ministry/CN=cbsuitecrm -keyout $certificates_dir/apache-selfsigned.key -out $certificates_dir/apache-selfsigned.crt
}