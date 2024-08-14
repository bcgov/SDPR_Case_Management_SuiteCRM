<?php
$sugar_config = array (
  'cron' => 
  array (
    'max_cron_jobs' => 10,
    'max_cron_runtime' => 30,
    'min_cron_interval' => 30,
    'allowed_cron_users' => 
    array (
      0 => 'root_REMOVE_THIS_NOTICE_IF_YOU_REALLY_WANT_TO_ALLOW_ROOT',
    ),
  ),
  'dbconfig' =>
  array (
    'db_host_name' => getenv('SUITE_DB_HOST'),
    'db_host_instance' => '',
    'db_user_name' => getenv('SUITE_DB_USER'),
    'db_password' => getenv('SUITE_DB_PASSW'),
    'db_name' => getenv('SUITE_DB_NAME'),
    'db_type' => 'mysql',
    'db_port' => getenv('SUITE_DB_PORT'),
    'db_manager' => 'MysqliManager',
  ),
  'dbconfigoption' =>
  array (
    'persistent' => true,
    'autofree' => false,
    'debug' => 0,
    'ssl' => false,
  ),
  'default_theme' => 'suite8',
  'host_name' => 'localhost',
  'languages' => 
  array (
    'en_us' => 'English (US)',
  ),
  'site_url' => getenv('SUITECRM_URL'),
);