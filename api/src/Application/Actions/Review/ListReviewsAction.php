<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use Psr\Http\Message\ResponseInterface as Response;

class ListReviewsAction extends ReviewAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $craftsmanId = (int) $this->resolveArg('craftsmanId');

        $craftsman = $this->craftsmanRepository->findCraftsmanOfId($craftsmanId);

        $reviews = $this->reviewRepository->findAll($craftsman);

        return $this->respondWithData($reviews);
    }
}
