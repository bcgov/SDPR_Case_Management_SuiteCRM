#!/usr/bin/bash

# Check if database is available using timeout and /dev/tcp
timeout 1 bash -c "</dev/tcp/suitecrm-mariadb-galera/3306";
if [[ $? -ne 0 ]];
then
  echo "Database is not available";
  exit 1;
fi
# Check if redis-cluster is available using timeout and /dev/tcp
timeout 1 bash -c "</dev/tcp/suitecrm-redis-cluster/6379";
if [[ $? -ne 0 ]];
then
  echo "Redis-cluster is not available";
  exit 1;
fi
# Check if `localhost:8181/auth` returns 200 OK using curl
if [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:8181/auth)" != "200" ]];
then
  echo "SuiteCRM is not available";
  exit 1;
fi