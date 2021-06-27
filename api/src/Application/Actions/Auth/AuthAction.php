<?php
declare(strict_types=1);

namespace App\Application\Actions\Auth;

use App\Application\Actions\Action;
use App\Domain\User\User;
use App\Domain\User\UserRepository;
use Psr\Log\LoggerInterface;
use ReallySimpleJWT\Token;

abstract class AuthAction extends Action
{
    /**
     * @var UserRepository
     */
    protected $userRepository;

    /**
     * @param LoggerInterface $logger
     * @param UserRepository $userRepository
     */
    public function __construct(LoggerInterface $logger,
                                UserRepository $userRepository
    ) {
        parent::__construct($logger);
        $this->userRepository = $userRepository;
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
}
