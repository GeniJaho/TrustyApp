<?php
declare(strict_types=1);

namespace App\Domain\User;

interface CraftsmanRepository
{
    /**
     * @return Craftsman[]
     */
    public function findAll(?string $sort, ?bool $ascending): array;

    /**
     * @param int $id
     * @return Craftsman
     * @throws UserNotFoundException
     */
    public function findCraftsmanOfId(int $id): Craftsman;
}
