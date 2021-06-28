<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use Exception;
use App\Domain\User\User;
use App\Domain\User\UserAlreadyExistsException;
use App\Domain\User\UserNotFoundException;
use Psr\Http\Message\ResponseInterface as Response;
use ReallySimpleJWT\Token;

class RegisterCraftsmanAction extends AuthAction
{
    /**
     * {@inheritdoc}
     * @throws UserAlreadyExistsException
     */
    protected function action(): Response
    {
        if (!$this->isGuest()) {
            throw new Exception("You're already signed in.");
        }

        $data = $this->getFormData();

        if (empty($data['username']) || empty($data['full_name']) ||
            empty($data['password']) || empty($data['conf_password']) ||
            empty($data['address']) || empty($data['craft']) ||
            empty($data['price']) || empty($data['language'])) {
            throw new Exception("Required fields are missing.");
        }

        if ($data['password'] !== $data['conf_password']) {
            throw new Exception("Passwords do not match.");
        }

        $craftsman = $this->craftsmanRepository->findCraftsmanOfUsername($data['username']);

        if ($craftsman) {
            throw new UserAlreadyExistsException();
        }

        $craftsman = $this->craftsmanRepository->store($data);

        $token = $this->createCraftsmanToken($craftsman);

        return $this->respondWithData(['craftsman' => $craftsman, 'token' => $token]);
    }

}
