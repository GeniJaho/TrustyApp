<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;

class ViewCraftsmanAction extends CraftsmanAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $craftsmanId = (int) $this->resolveArg('id');

        $craftsman = $this->craftsmanRepository->findCraftsmanOfId($craftsmanId);

        return $this->respondWithData($craftsman);
    }
}
