<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use App\Domain\Review\Review;
use Psr\Http\Message\ResponseInterface as Response;

class CreateReviewAction extends ReviewAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $craftsmanId = (int) $this->resolveArg('craftsmanId');

        $craftsman = $this->craftsmanRepository->findCraftsmanOfId($craftsmanId);

        $data = $this->getFormData();

        $data['to_id'] = $craftsmanId;
        $data['from_id'] = 1; // TODO should be auth()->id()

        $review = $this->reviewRepository->store($data);

        $this->craftsmanRepository->update($craftsmanId, [
            'rating' => $craftsman->averageRating()
        ]);

        return $this->respondWithData($review);
    }
}
