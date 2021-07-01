<?php
declare(strict_types=1);

namespace App\Domain\Review;

use App\Domain\User\Craftsman;

interface ReviewRepository
{
    /**
     * @return Review[]
     */
    public function findAll(Craftsman $craftsman): array;

    /**
     * @param int $id
     * @return Review
     * @throws ReviewNotFoundException
     */
    public function findReviewOfId(int $id): Review;

    /**
     * @param array $data
     * @return Review
     */
    public function store(array $data): Review;

    /**
     * @param int $id
     * @return void
     */
    public function destroy(int $id);
}
