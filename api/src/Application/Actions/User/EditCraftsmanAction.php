<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;

class EditCraftsmanAction extends CraftsmanAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $data = $this->getFormData();

        $craftsmanId = (int) $this->resolveArg('id');

        $craftsman = $this->craftsmanRepository->update($craftsmanId, $data);

        return $this->respondWithData($craftsman);
    }
}
