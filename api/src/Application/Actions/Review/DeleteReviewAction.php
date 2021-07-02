<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use Exception;
use Psr\Http\Message\ResponseInterface as Response;

class DeleteReviewAction extends ReviewAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $id = (int) $this->resolveArg('id');

        $review = $this->reviewRepository->findReviewOfId($id);

        if (!$this->isCustomer() ||
            !$review->customer->is($this->getAuthCustomer())) {
            throw new Exception('Unauthorized');
        }

        $this->reviewRepository->destroy($id);

        $this->craftsmanRepository->update($review->to_id, [
            'rating' => $review->craftsman->averageRating()
        ]);

        return $this->respondWithData();
    }
}