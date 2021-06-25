<?php
declare(strict_types=1);

use App\Domain\User\CraftsmanRepository;
use App\Domain\User\UserRepository;
use App\Infrastructure\Persistence\User\InMemoryCraftsmanRepository;
use App\Infrastructure\Persistence\User\InMemoryUserRepository;
use DI\ContainerBuilder;

return function (ContainerBuilder $containerBuilder) {
    // Here we map our UserRepository interface to its in memory implementation
    $containerBuilder->addDefinitions([
        UserRepository::class => \DI\autowire(InMemoryUserRepository::class),
    ]);
    $containerBuilder->addDefinitions([
        CraftsmanRepository::class => \DI\autowire(InMemoryCraftsmanRepository::class),
    ]);
};
