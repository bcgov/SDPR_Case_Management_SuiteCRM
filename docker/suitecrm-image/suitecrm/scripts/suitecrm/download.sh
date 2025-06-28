#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the download functions for SuiteCRM
# Created on: 2024-07-11

RUN_DIR=${RUN_DIR:-"/opt/suitecrm/scripts"}

# Load the libraries
. $RUN_DIR/lib/liblog.sh

########################
# Download and extract SuiteCRM
# Arguments:
#   Extension list
# Returns:
#   None
#########################
function download_suitecrm() {
  info "Downloading SuiteCRM"

  local suitecrm_file="/suitecrm-8-7-0.zip"
  local url="https://suitecrm.com/download/165/suite88/565090/suitecrm-8-7-0.zip"

  info "Downloading zip package from $url"
  curl -L -o $suitecrm_file $url

  info "Unzipping SuiteCRM"
  unzip -q $suitecrm_file -d /suitecrm

  info "Removing zip package"
  rm $suitecrm_file
}

function main() {
  info "Starting SuiteCRM installation script"

  download_suitecrm
}

main "$@"