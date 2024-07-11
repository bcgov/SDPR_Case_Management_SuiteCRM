#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the download functions for SuiteCRM
# Created on: 2024-07-11

function download_suitecrm() {
  info "Downloading SuiteCRM"

  local suitecrm_file="/suitecrm-8-6-0.zip"
  local url="https://suitecrm.com/download/147/suite86/563895$suitecrm_file"

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