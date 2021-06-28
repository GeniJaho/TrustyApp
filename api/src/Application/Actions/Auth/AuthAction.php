<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use App\Application\Actions\Action;
use App\Application\Actions\AuthorizesUsers;
use App\Domain\User\Craftsman;
use App\Domain\User\CraftsmanRepository;
use App\Domain\User\User;
use App\Domain\User\UserRepository;
use Psr\Log\LoggerInterface;
use ReallySimpleJWT\Token;

abstract class AuthAction extends Action
{
    use AuthorizesUsers;

    protected UserRepository $userRepository;
    protected CraftsmanRepository $craftsmanRepository;

    /**
     * @param LoggerInterface $logger
     * @param UserRepository $userRepository
     */
    public function __construct(
        LoggerInterface $logger,
        UserRepository $userRepository,
        CraftsmanRepository $craftsmanRepository
    )
    {
        parent::__construct($logger);
        $this->userRepository = $userRepository;
        $this->craftsmanRepository = $craftsmanRepository;
    }

    /**
     * @param User $user
     * @return string
     */
    protected function createCustomerToken(User $user): string
    {
        $token = Token::create(
            "customer" . $user->id,
            $_ENV["JWT_SECRET"],
            time() + 3600,
            'localhost'
        );
        return $token;
    }

    /**
     * @param Craftsman $craftsman
     * @return string
     */
    protected function createCraftsmanToken(Craftsman $craftsman): string
    {
        return Token::create(
            "craftsman" . $craftsman->id,
            $_ENV["JWT_SECRET"],
            time() + 3600,
            'localhost'
        );
    }
}
