<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use App\Application\Actions\Action;
use App\Domain\User\UserRepository;
use Psr\Log\LoggerInterface;

abstract class UserAction extends Action
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
     * @throws \App\Domain\User\UserNotFoundException
     */
    protected function getAuthCustomer()
    {
        if ($this->isGuest()) {
            return null;
        }

        $token = $this->request->getAttribute("token");

        $userId = (int) substr($token['user_id'], 8);

        return $this->userRepository->findUserOfId($userId);
    }
}
