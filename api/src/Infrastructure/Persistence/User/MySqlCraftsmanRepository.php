<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\User;

use App\Domain\User\Craftsman;
use App\Domain\User\CraftsmanRepository;
use App\Domain\User\UserNotFoundException;

class MySqlCraftsmanRepository implements CraftsmanRepository
{
    /**
     * {@inheritdoc}
     */
    public function findAll($sort = 'full_name', $ascending = true): array
    {
        return Craftsman::orderBy($sort, $ascending ? 'asc' : 'desc')
            ->get()
            ->values()
            ->toArray();
    }

    public function search(string $query, ?string $sort, ?bool $ascending): array
    {
        return Craftsman::where('username', 'like', "%$query%")
            ->orWhere('full_name', 'like', "%$query%")
            ->orWhere('craft', 'like', "%$query%")
            ->orWhere('language', 'like', "%$query%")
            ->orWhere('address', 'like', "%$query%")
            ->orWhere('description', 'like', "%$query%")
            ->orderBy($sort, $ascending ? 'asc' : 'desc')
            ->get()
            ->values()
            ->toArray();
    }

    /**
     * {@inheritdoc}
     */
    public function findCraftsmanOfId(int $id): Craftsman
    {
        $craftsman = Craftsman::find($id);

        if (!$craftsman) {
            throw new UserNotFoundException();
        }

        return $craftsman;
    }


    public function findCraftsmanOfUsername(string $username): ?Craftsman
    {
        return Craftsman::whereUsername($username)->first();
    }

    public function store(array $data): Craftsman
    {
        return Craftsman::create([
            'username' => $data['username'],
            'password' => password_hash($data['password'], PASSWORD_DEFAULT),
            'full_name' => $data['full_name'],
            'price' => $data['price'],
            'address' => $data['address'] ?? '',
            'craft' => $data['craft'] ?? '',
            'language' => $data['language'] ?? '',
            'description' => $data['description'] ?? '',
            'rating' => $data['rating'] ?? 0
        ]);
    }

    /**
     * @throws UserNotFoundException
     */
    public function update(int $id, array $data): Craftsman
    {
        $craftsman = Craftsman::find($id);

        if (!$craftsman) {
            throw new UserNotFoundException();
        }

        $craftsman->username = $data['username'] ?? $craftsman->username;
        $craftsman->full_name = $data['full_name'] ?? $craftsman->full_name;
        $craftsman->address = $data['address'] ?? $craftsman->address;
        $craftsman->craft = $data['craft'] ?? $craftsman->craft;
        $craftsman->language = $data['language'] ?? $craftsman->language;
        $craftsman->description = $data['description'] ?? $craftsman->description;
        $craftsman->price = $data['price'] ?? $craftsman->price;
        $craftsman->rating = $data['rating'] ?? $craftsman->rating;
        $craftsman->save();

        return $craftsman;
    }
}
