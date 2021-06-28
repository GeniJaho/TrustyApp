<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Exception;
use Psr\Http\Message\ResponseInterface as Response;

class EditCraftsmanAction extends CraftsmanAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $data = $this->getFormData();

        if (!$this->isCraftsman()) {
            throw new Exception('Unauthorized');
        }

        $craftsmanId = $this->getAuthCraftsman()->id;

        $craftsman = $this->craftsmanRepository->update($craftsmanId, $data);

        return $this->respondWithData($craftsman);
    }
}
