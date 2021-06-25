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
    private array $craftsmen;

    /**
     * InMemoryCraftsmanRepository constructor.
     *
     * @param array|null $craftsmen
     */
    public function __construct(array $craftsmen = null)
    {
        $this->craftsmen = $craftsmen ?? [
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
        return collect($this->craftsmen)
            ->sortBy($sort, SORT_REGULAR, !$ascending)
            ->values()
            ->toArray();
    }

    /**
     * {@inheritdoc}
     */
    public function findCraftsmanOfId(int $id): Craftsman
    {
        if (!isset($this->craftsmen[$id])) {
            throw new UserNotFoundException();
        }

        return $this->craftsmen[$id];
    }


    public function store(array $data): Craftsman
    {
        $craftsman = new Craftsman(
            array_key_last($this->craftsmen) + 1,
            $data['username'],
            $data['fullName'],
            $data['age'],
            $data['address'] ?? '',
            $data['craft'] ?? '',
            $data['language'] ?? '',
            $data['description'] ?? '',
            $data['price'],
            $data['rating'] ?? null
        );

        $this->craftsmen[] = $craftsman;

        return $craftsman;
    }



    public function update(int $id, array $data): Craftsman
    {
        $craftsman = $this->craftsmen[$id];

        $craftsman->username = $data['username'] ?? $craftsman->username;
        $craftsman->fullName = $data['fullName'] ?? $craftsman->fullName;
        $craftsman->age = $data['age'] ?? $craftsman->age;
        $craftsman->address = $data['address'] ?? $craftsman->address;
        $craftsman->craft = $data['craft'] ?? $craftsman->craft;
        $craftsman->language = $data['language'] ?? $craftsman->language;
        $craftsman->description = $data['description'] ?? $craftsman->description;
        $craftsman->price = $data['price'] ?? $craftsman->price;
        $craftsman->rating = $data['rating'] ?? $craftsman->rating;

        $this->craftsmen[$id] = $craftsman;

        return $craftsman;
    }
}
