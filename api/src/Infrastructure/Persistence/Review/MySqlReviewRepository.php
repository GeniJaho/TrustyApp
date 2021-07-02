<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\Review;

use App\Domain\Review\Review;
use App\Domain\Review\ReviewNotFoundException;
use App\Domain\Review\ReviewRepository;
use App\Domain\User\Craftsman;
use App\Domain\User\User;

class MySqlReviewRepository implements ReviewRepository
{
    /**
     * {@inheritdoc}
     */
    public function findAll(Craftsman $craftsman): array
    {
         return Review::where('to_id', $craftsman->id)
             ->get()
             ->map(function($review) {
                 $review->created_at_human = $review->created_at->diffForHumans();
                 return $review;
             })
             ->toArray();
    }

    /**
     * {@inheritdoc}
     */
    public function findReviewOfId(int $id): Review
    {
        $review = Review::find($id);

        if (!$review) {
            throw new ReviewNotFoundException();
        }

        return $review;
    }

    public function store(array $data): Review
    {
        return Review::create([
            'body' => $data['body'],
            'rating' => $data['rating'],
            'from_id' => $data['from_id'],
            'to_id' => $data['to_id'],
            'created_at' => $data['created_at'] ?? date("Y-m-d H:i:s")
        ]);
    }

    public function destroy(int $id)
    {
        $review = Review::find($id);

        if (!$review) {
            throw new ReviewNotFoundException();
        }

        return $review->delete();
    }
}
