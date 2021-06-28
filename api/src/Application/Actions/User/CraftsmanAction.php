<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use App\Application\Actions\Action;
use App\Domain\User\CraftsmanRepository;
use App\Domain\User\UserNotFoundException;
use Psr\Log\LoggerInterface;

abstract class CraftsmanAction extends Action
{
    /**
     * @var CraftsmanRepository
     */
    protected $craftsmanRepository;

    /**
     * @param LoggerInterface $logger
     * @param CraftsmanRepository $craftsmanRepository
     */
    public function __construct(
        LoggerInterface $logger,
        CraftsmanRepository $craftsmanRepository
    )
    {
        parent::__construct($logger);
        $this->craftsmanRepository = $craftsmanRepository;
    }

    /**
     * @throws UserNotFoundException
     */
    protected function getAuthCraftsman()
    {
        if ($this->isGuest()) {
            return null;
        }

        $token = $this->request->getAttribute("token");

        $craftsmanId = (int) substr($token['user_id'], 9);

        return $this->craftsmanRepository->findCraftsmanOfId($craftsmanId);
    }
}
