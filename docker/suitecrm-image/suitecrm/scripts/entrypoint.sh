#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: Docker entrypoint script for BC GOV SuiteCRM Docker image
# Created on: 2024-07-09

RUN_DIR=${RUN_DIR:-"/opt/suitecrm/scripts"}

export RUN_DIR

# Load the libraries
. $RUN_DIR/lib/liblog.sh
. $RUN_DIR/lib/libfs.sh

# Validate the number of arguments
if [ "$#" -eq 0 ]; then
  error "entrypoint.sh script requires at least the source path argument"
  exit 1
fi

info "Starting SuiteCRM entrypoint script"
copy_files_with_source_dir_structure "$1" "$2"