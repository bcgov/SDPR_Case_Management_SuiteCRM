#!/bin/bash

# Author: Raphael Cássio de Souza (rsouza@nautilusdigital.com)
# Description: Modified Docker entrypoint script for BC GOV SuiteCRM Docker image
# Created on: 2024-07-19

# Load entrypoint script
. /opt/suitecrm/scripts/entrypoint.sh

sed -i "s/0 => 'root_REMOVE_THIS_NOTICE_IF_YOU_REALLY_WANT_TO_ALLOW_ROOT',/0 => '$(whoami)',/g" /suitecrm/public/legacy/config.php

php -f /suitecrm/public/legacy/cron.php > /dev/null 2>&1