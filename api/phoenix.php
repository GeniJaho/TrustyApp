<?php

return [
    'migration_dirs' => [
        'first' => __DIR__ . '/database/migrations/',
    ],
    'environments' => [
        'local' => [
            'adapter' => 'mysql',
            'host' => 'localhost',
            'port' => 3306,
            'username' => 'trustyUser',
            'password' => 'Bochum#2020',
            'db_name' => 'trusty',
            'charset' => 'utf8',
        ],
        'production' => [
            'adapter' => 'mysql',
            'host' => 'production_host',
            'port' => 3306, // optional
            'username' => 'user',
            'password' => 'pass',
            'db_name' => 'trusty',
            'charset' => 'utf8',
        ],
    ],
    'default_environment' => 'local',
    'log_table_name' => 'phoenix_log',
];
