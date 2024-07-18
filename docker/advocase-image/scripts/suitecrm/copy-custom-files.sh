#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: Script to copy custom files to SuiteCRM directory
# Created on: 2024-07-09

RUN_DIR=${RUN_DIR:-"/opt/suitecrm/scripts"}
SUITECRM_DIR=${SUITECRM_DIR:-"/suitecrm"}
DEV_DEBUG=${DEV_DEBUG:-false}

export RUN_DIR
export SUITECRM_DIR
export DEV_DEBUG

# Load the libraries
. $RUN_DIR/lib/liblog.sh
. $RUN_DIR/lib/libfs.sh

function main() {
  info "Copying custom files to SuiteCRM directory"
  copy_files_with_source_dir_structure "/tmp/build-files/suitecrm" "/suitecrm"
}

main "$@"