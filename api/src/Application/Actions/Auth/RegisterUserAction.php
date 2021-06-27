<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use Exception;
use App\Domain\User\User;
use App\Domain\User\UserAlreadyExistsException;
use App\Domain\User\UserNotFoundException;
use Psr\Http\Message\ResponseInterface as Response;
use ReallySimpleJWT\Token;

class RegisterUserAction extends AuthAction
{
    /**
     * {@inheritdoc}
     * @throws UserAlreadyExistsException
     */
    protected function action(): Response
    {
        $data = $this->getFormData();

        if (empty($data['username']) || empty($data['full_name']) ||
            empty($data['password']) || empty($data['conf_password'])) {
            throw new Exception("Required fields are missing.");
        }

        if ($data['password'] !== $data['conf_password']) {
            throw new Exception("Passwords do not match.");
        }

        $user = $this->userRepository->findUserOfUsername($data['username']);

        if ($user) {
            throw new UserAlreadyExistsException();
        }

        $user = $this->userRepository->store($data);

        $token = Token::create(
            "u" . $user->id,
            $_ENV["JWT_SECRET"],
            time() + 3600,
            'localhost'
        );

        return $this->respondWithData(['user' => $user, 'token' => $token]);
    }
}
