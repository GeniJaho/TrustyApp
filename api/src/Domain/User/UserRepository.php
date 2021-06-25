<?php
declare(strict_types=1);

namespace App\Domain\User;

interface UserRepository
{
    /**
     * @return User[]
     */
    public function findAll(): array;

    /**
     * @param int $id
     * @return User
     * @throws UserNotFoundException
     */
    public function findUserOfId(int $id): User;

    /**
     * @param array $data
     * @return User
     */
    public function store(array $data): User;

    /**
     * @param int $id
     * @param array $data
     * @return User
     */
    public function update(int $id, array $data): User;
}
