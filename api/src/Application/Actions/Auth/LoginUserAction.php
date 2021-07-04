<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use App\Domain\User\UserNotFoundException;
use Exception;
use Psr\Http\Message\ResponseInterface as Response;

class LoginUserAction extends AuthAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        if (!$this->isGuest()) {
            throw new Exception("Sie sind bereits angemeldet.");
        }

        $data = $this->getFormData();

        if (empty($data['username']) || empty($data['password'])) {
            throw new Exception("Erforderliche Felder fehlen.");
        }

        $user = $this->userRepository->findUserOfUsername($data['username']);

        if (!$user) {
            throw new UserNotFoundException();
        }

        if (!password_verify($data['password'], $user->password)) {
            throw new Exception("Passwort ist falsch.");
        }

        $token = $this->createCustomerToken($user);

        return $this->respondWithData(['user' => $user, 'token' => $token]);
    }
}
