#!/bin/bash

# Load entrypoint script
. /opt/suitecrm/scripts/entrypoint.sh

sed -i "s/0 => 'root_REMOVE_THIS_NOTICE_IF_YOU_REALLY_WANT_TO_ALLOW_ROOT',/0 => '$(whoami)',/g" /suitecrm/public/legacy/config.php

php -f /suitecrm/public/legacy/cron.php > /dev/null 2>&1