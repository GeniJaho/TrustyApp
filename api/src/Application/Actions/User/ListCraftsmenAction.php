<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;

class ListCraftsmenAction extends CraftsmanAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $sort = $this->request->getQueryParams()['sort'] ?? 'fullName';
        $order = $this->request->getQueryParams()['order'] ?? 'asc';

        $craftsmen = $this->craftsmanRepository->findAll($sort, $order === 'asc');

        $this->logger->info("Craftsmen list was viewed.");

        return $this->respondWithData($craftsmen);
    }
}
