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
        $query = $this->request->getQueryParams()['query'] ?? null;
        $sort = $this->request->getQueryParams()['sort'] ?? 'full_name';
        $order = $this->request->getQueryParams()['order'] ?? 'asc';

        $craftsmen = $query
            ? $this->craftsmanRepository->search($query, $sort, $order === 'asc')
            : $this->craftsmanRepository->findAll($sort, $order === 'asc');

        return $this->respondWithData($craftsmen);
    }
}
