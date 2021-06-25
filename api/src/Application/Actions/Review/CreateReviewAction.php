<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use Psr\Http\Message\ResponseInterface as Response;

class CreateReviewAction extends ReviewAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $craftsmanId = (int) $this->resolveArg('craftsmanId');

        $data = $this->getFormData();

        $data['toId'] = $craftsmanId;
        $data['fromId'] = 1; // TODO should be auth()->id()

        $review = $this->reviewRepository->store($data);

        return $this->respondWithData($review);
    }
}
