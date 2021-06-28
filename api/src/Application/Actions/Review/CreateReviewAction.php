<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use Exception;
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

        if (!$this->isCustomer()) {
            throw new Exception('Unauthorized');
        }

        $userId = $this->getAuthCustomer()->id;

        $data = $this->getFormData();

        $data['to_id'] = $craftsmanId;
        $data['from_id'] = $userId;

        $review = $this->reviewRepository->store($data);

        $this->craftsmanRepository->update($craftsmanId, [
            'rating' => $craftsman->averageRating()
        ]);

        return $this->respondWithData($review);
    }
}
