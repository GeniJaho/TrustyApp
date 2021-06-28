<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Exception;
use Psr\Http\Message\ResponseInterface as Response;

class EditUserAction extends UserAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $data = $this->getFormData();

        if (!$this->isCustomer()) {
            throw new Exception('Unauthorized');
        }

        $userId = $this->getAuthCustomer()->id;

        $user = $this->userRepository->update($userId, $data);

        return $this->respondWithData($user);
    }
}
