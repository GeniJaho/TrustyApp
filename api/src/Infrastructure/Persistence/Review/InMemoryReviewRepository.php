<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\Review;

use App\Domain\Review\ReviewRepository;
use App\Domain\Review\Review;
use App\Domain\Review\ReviewNotFoundException;
use App\Domain\User\Craftsman;

class InMemoryReviewRepository implements ReviewRepository
{
    /**
     * @var Review[]
     */
    private $reviews;

    /**
     * InMemoryReviewRepository constructor.
     *
     * @param array|null $reviews
     */
    public function __construct(array $reviews = null)
    {
        $this->reviews = $reviews ?? [
            1 => new Review(1, 'good review', 5, 1, 1, null),
            2 => new Review(2, 'bad review', 4, 2, 1, null),
            3 => new Review(3, 'test', 2, 1, 2, null),
            4 => new Review(4, 'test', 3, 2, 3, null),
            5 => new Review(5, 'review', 4, 3, 4, null),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function findAll(Craftsman $craftsman): array
    {
        return collect($this->reviews)
            ->where('fromId', '=', $craftsman->getId())
            ->values()
            ->toArray();
    }

    /**
     * {@inheritdoc}
     */
    public function findReviewOfId(int $id): Review
    {
        if (!isset($this->reviews[$id])) {
            throw new ReviewNotFoundException();
        }

        return $this->reviews[$id];
    }


    public function store(array $data): Review
    {
        $review = new Review(
            array_key_last($this->reviews) + 1,
            $data['body'],
            $data['rating'],
            $data['fromId'],
            $data['toId'],
            $data['createdAt'] ?? null
        );

        $this->reviews[] = $review;

        return $review;
    }

    /**
     * @throws ReviewNotFoundException
     */
    public function destroy(int $id)
    {
        if (!isset($this->reviews[$id])) {
            throw new ReviewNotFoundException();
        }

        unset($this->reviews[$id]);
    }
}
