<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use App\Domain\User\User;
use App\Domain\User\UserNotFoundException;
use Exception;
use Psr\Http\Message\ResponseInterface as Response;
use ReallySimpleJWT\Token;

class LoginUserAction extends AuthAction
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

        $user = $this->userRepository->findUserOfUsername($data['username']);

        if (!$user) {
            throw new UserNotFoundException();
        }

        if (!password_verify($data['password'], $user->password)) {
            throw new Exception("Your password is incorrect.");
        }

        $token = $this->createCustomerToken($user);

        return $this->respondWithData(['user' => $user, 'token' => $token]);
    }
}
