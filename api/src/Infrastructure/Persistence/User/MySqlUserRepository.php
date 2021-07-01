<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\User;

use App\Domain\User\User;
use App\Domain\User\UserNotFoundException;
use App\Domain\User\UserRepository;

class MySqlUserRepository implements UserRepository
{
    /**
     * {@inheritdoc}
     */
    public function findAll(): array
    {
         return User::all()->toArray();
    }

    /**
     * {@inheritdoc}
     */
    public function findUserOfId(int $id): User
    {
        $user = User::find($id);

        if (!$user) {
            throw new UserNotFoundException();
        }

        return $user;
    }

    public function store(array $data): User
    {
        return User::create([
            'username' => $data['username'],
            'full_name' => $data['full_name'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT)
        ]);
    }

    /**
     * @throws UserNotFoundException
     */
    public function update(int $id, array $data): User
    {
        $user = User::find($id);

        if (!$user) {
            throw new UserNotFoundException();
        }

        $user->username = $data['username'] ?? $user->username;
        $user->full_name = $data['full_name'] ?? $user->full_name;
        $user->save();

        return $user;
    }

    public function findUserOfUsername(string $username): ?User
    {
        return User::whereUsername($username)->first();
    }
}
