<?php
declare(strict_types=1);

use App\Domain\Review\ReviewRepository;
use App\Domain\User\CraftsmanRepository;
use App\Domain\User\UserRepository;
use App\Infrastructure\Persistence\Review\InMemoryReviewRepository;
use App\Infrastructure\Persistence\User\InMemoryCraftsmanRepository;
use App\Infrastructure\Persistence\User\InMemoryUserRepository;
use DI\ContainerBuilder;
use function DI\autowire;

return function (ContainerBuilder $containerBuilder) {
    // Here we map our UserRepository interface to its in memory implementation
    $containerBuilder->addDefinitions([
        UserRepository::class => autowire(InMemoryUserRepository::class),
    ]);
    $containerBuilder->addDefinitions([
        CraftsmanRepository::class => autowire(InMemoryCraftsmanRepository::class),
    ]);
    $containerBuilder->addDefinitions([
        ReviewRepository::class => autowire(InMemoryReviewRepository::class),
    ]);
};
