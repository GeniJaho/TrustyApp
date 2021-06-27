<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use App\Domain\User\User;
use App\Domain\User\UserNotFoundException;
use Psr\Http\Message\ResponseInterface as Response;
use ReallySimpleJWT\Token;

class LoginUserAction extends AuthAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $data = $this->getFormData();

        $user = User::whereUsername($data['username'])->first();

        if (!$user) {
            throw new UserNotFoundException();
        }

        $token = Token::create(
            "u" . $user->id,
            $_ENV["JWT_SECRET"],
            time() + 3600,
            'localhost'
        );

        return $this->respondWithData(['user' => $user, 'token' => $token]);
    }
}
