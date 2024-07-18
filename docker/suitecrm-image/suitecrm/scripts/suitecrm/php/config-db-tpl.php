<?php
$sugar_config = array (
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
  'languages' => 
  array (
    'en_us' => 'English (US)',
  ),
  'default_theme' => 'suite8',
);