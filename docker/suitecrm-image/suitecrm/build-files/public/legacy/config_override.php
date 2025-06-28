$sugar_config['external_cache']['redis'] = array(
    'host' => getenv('REDIS_HOST') ?: 'suitecrm-redis-cluster-headless',
    'port' => getenv('REDIS_PORT') ?: 6379,
    'password' => getenv('REDIS_PASSWORD') ?: '',
    'database' => 0
);
$sugar_config['external_cache_disabled_redis'] = false;
