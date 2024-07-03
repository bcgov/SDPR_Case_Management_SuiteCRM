#!/bin/bash

# Define the source directory
SOURCE_DIR="./build-files"

# Function to copy files to the destination
copy_files() {
    local src_file="$1"
    local dest_file="${src_file#${SOURCE_DIR}}"

    # Exclude this script and specific files from the copy operation
    if [[ "$src_file" == "$(realpath "$0")" ]]; then
        return
    fi

    # Get the directory part of the destination file
    local dest_dir=$(dirname "$dest_file")

    # Create the destination directory if it doesn't exist
    mkdir -p "$dest_dir"

    # Copy the file to the destination
    cp "$src_file" "$dest_file"
    echo "Copied $src_file to $dest_file"
}

# Export the function and variable for use in find's exec
export -f copy_files
export SOURCE_DIR

# Find all files in the source directory and copy them
find "$SOURCE_DIR" -type f -exec bash -c 'copy_files "$0"' {} \;
