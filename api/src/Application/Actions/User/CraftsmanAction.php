<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use App\Application\Actions\Action;
use App\Application\Actions\AuthorizesUsers;
use App\Domain\User\CraftsmanRepository;
use Psr\Log\LoggerInterface;

abstract class CraftsmanAction extends Action
{
    use AuthorizesUsers;

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
}