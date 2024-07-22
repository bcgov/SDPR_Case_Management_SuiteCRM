#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: This script contains the copy files function used in the SuiteCRM scripts
# Created on: 2024-07-09

########################
# Copy files from source directory to destination directory
# Arguments:
#   $1: Source directory
#   $2: Destination directory
# Returns:
#   None
#########################
function copy_files_with_source_dir_structure() {
  local source_dir="$1"

  info "Copying files from $source_dir to $destination_dir";

  for FILE in $(find "$source_dir" -type f); do
    if [[ -f "$FILE" ]]; then
      local dest_file

      if [[ -z ${2} ]]; then
        dest_file="${FILE#${source_dir}}"
      else
        dest_file="$2${FILE#${source_dir}}"
      fi

      local dest_dir=$(dirname "$dest_file")
      create_dir_if_not_exists "$dest_dir"

      info "Copying $FILE to $dest_file";
      cp "$FILE" "$dest_file"
    fi
  done
}


########################
# Create directory if it does not exist
# Arguments:
#   $1: Directory path
# Returns:
#   None
#########################
function create_dir_if_not_exists() {
  local dir="$1"

  if [[ ! -d "$dir" ]]; then
    info "Creating directory $dir";
    mkdir -p "$dir"
  fi
}