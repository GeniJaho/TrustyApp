<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\User;

use App\Domain\User\User;
use App\Domain\User\UserNotFoundException;
use App\Domain\User\UserRepository;

class InMemoryUserRepository implements UserRepository
{
    /**
     * @var User[]
     */
    private $users;

    /**
     * InMemoryUserRepository constructor.
     *
     * @param array|null $users
     */
    public function __construct(array $users = null)
    {
        $this->users = $users ?? [
                1 => new User(1, 'bill.gates', 'Bill Gates', 26),
                2 => new User(2, 'steve.jobs', 'Steve Jobs', 26),
                3 => new User(3, 'mark.zuckerberg', 'Mark Zuckerberg', 26),
                4 => new User(4, 'evan.spiegel', 'Evan Spiegel', 26),
                5 => new User(5, 'jack.dorsey', 'Jack Dorsey', 26),
            ];
    }

    /**
     * {@inheritdoc}
     */
    public function findAll(): array
    {
        return array_values($this->users);
    }

    /**
     * {@inheritdoc}
     */
    public function findUserOfId(int $id): User
    {
        if (!isset($this->users[$id])) {
            throw new UserNotFoundException();
        }

        return $this->users[$id];
    }

    public function store(array $data): User
    {
        $user = new User(
            array_key_last($this->users) + 1,
            $data['username'],
            $data['fullName'],
            $data['age']
        );

        $this->users[] = $user;

        return $user;
    }

    public function update(int $id, array $data): User
    {
        $user = $this->users[$id];

        $user->username = $data['username'] ?? $user->username;
        $user->fullName = $data['fullName'] ?? $user->fullName;
        $user->age = $data['age'] ?? $user->age;

        $this->users[$id] = $user;

        return $user;
    }
}
