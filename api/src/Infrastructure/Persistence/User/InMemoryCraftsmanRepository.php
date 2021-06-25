<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\User;

use App\Domain\User\Craftsman;
use App\Domain\User\CraftsmanRepository;
use App\Domain\User\UserNotFoundException;

class InMemoryCraftsmanRepository implements CraftsmanRepository
{
    /**
     * @var Craftsman[]
     */
    private $users;

    /**
     * InMemoryCraftsmanRepository constructor.
     *
     * @param array|null $users
     */
    public function __construct(array $users = null)
    {
        $this->users = $users ?? [
            1 => new Craftsman(1, 'bill.gates', 'Bill Gates', 26, 'painter', 'Boston, MA', 'English', 'Some description', 50, 5.0),
            2 => new Craftsman(2, 'steve.jobs', 'Steve Jobs', 26, 'developer', 'Houston, TX', 'French', 'Description', 20, 2.0),
            3 => new Craftsman(3, 'mark.zuckerberg', 'Mark Zuckerberg',26, 'driver', 'Boston, MA', 'Italian', 'Some text', 34, 3.4),
            4 => new Craftsman(4, 'evan.spiegel', 'Evan Spiegel', 26, 'painter', 'Orange, CA', 'Spanish', 'Lorem ipsum', 45, 4.5),
            5 => new Craftsman(5, 'jack.dorsey', 'Jack Dorsey', 26, 'smith', 'Boston, MA', 'English', 'Some description', 25, 2.5),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function findAll($sort = 'fullName', $ascending = true): array
    {
        return collect($this->users)
            ->sortBy($sort, SORT_REGULAR, !$ascending)
            ->values()
            ->toArray();
    }

    /**
     * {@inheritdoc}
     */
    public function findCraftsmanOfId(int $id): Craftsman
    {
        if (!isset($this->users[$id])) {
            throw new UserNotFoundException();
        }

        return $this->users[$id];
    }
}
