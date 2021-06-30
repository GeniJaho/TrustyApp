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
     * @return Craftsman[]
     */
    public function search(string $query, ?string $sort, ?bool $ascending): array;

    /**
     * @param int $id
     * @return Craftsman
     * @throws UserNotFoundException
     */
    public function findCraftsmanOfId(int $id): Craftsman;

    /**
     * @param string $username
     * @return Craftsman
     */
    public function findCraftsmanOfUsername(string $username): ?Craftsman;

    /**
     * @param array $data
     * @return Craftsman
     */
    public function store(array $data): Craftsman;

    /**
     * @param int $id
     * @param array $data
     * @return Craftsman
     */
    public function update(int $id, array $data): Craftsman;
}
