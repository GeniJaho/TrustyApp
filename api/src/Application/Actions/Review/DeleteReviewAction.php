<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use Psr\Http\Message\ResponseInterface as Response;

class DeleteReviewAction extends ReviewAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $id = (int) $this->resolveArg('id');

        $this->reviewRepository->destroy($id);

        return $this->respondWithData();
    }
}
