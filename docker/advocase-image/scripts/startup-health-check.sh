#!/usr/bin/bash

if [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8181/auth)" != "200" ]];
then
  echo "SuiteCRM is not available";
fi