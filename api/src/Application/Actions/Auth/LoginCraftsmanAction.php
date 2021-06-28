<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use App\Domain\User\UserNotFoundException;
use Exception;
use Psr\Http\Message\ResponseInterface as Response;

class LoginCraftsmanAction extends AuthAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        if (!$this->isGuest()) {
            throw new Exception("You're already signed in.");
        }

        $data = $this->getFormData();

        if (empty($data['username']) || empty($data['password'])) {
            throw new Exception("Required fields are missing.");
        }

        $craftsman = $this->craftsmanRepository->findCraftsmanOfUsername($data['username']);

        if (!$craftsman) {
            throw new UserNotFoundException();
        }

        if (!password_verify($data['password'], $craftsman->password)) {
            throw new Exception("Your password is incorrect.");
        }

        $token = $this->createCraftsmanToken($craftsman);

        return $this->respondWithData(['craftsman' => $craftsman, 'token' => $token]);
    }
}
