<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;

class EditUserAction extends UserAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $data = $this->getFormData();

        $userId = (int) $this->resolveArg('id');

        $user = $this->userRepository->update($userId, $data);

        return $this->respondWithData($user);
    }
}
