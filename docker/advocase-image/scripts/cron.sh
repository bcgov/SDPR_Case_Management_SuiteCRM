#!/bin/bash

sed -i "s/0 => 'some other root cron',/0 => '$(whoami)',/g" /suitecrm/public/legacy/config.php

php -f /suitecrm/public/legacy/cron.php > /dev/null 2>&1