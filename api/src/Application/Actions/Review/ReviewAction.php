<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use App\Application\Actions\Action;
use App\Application\Actions\AuthorizesUsers;
use App\Domain\Review\ReviewRepository;
use App\Domain\User\CraftsmanRepository;
use App\Domain\User\UserRepository;
use Psr\Log\LoggerInterface;

abstract class ReviewAction extends Action
{
    use AuthorizesUsers;

    protected ReviewRepository $reviewRepository;
    protected CraftsmanRepository $craftsmanRepository;
    protected UserRepository $userRepository;

    /**
     * @param LoggerInterface $logger
     * @param ReviewRepository $reviewRepository
     * @param CraftsmanRepository $craftsmanRepository
     * @param UserRepository $userRepository
     */
    public function __construct(
        LoggerInterface $logger,
        ReviewRepository $reviewRepository,
        CraftsmanRepository $craftsmanRepository,
        UserRepository $userRepository
    )
    {
        parent::__construct($logger);
        $this->reviewRepository = $reviewRepository;
        $this->craftsmanRepository = $craftsmanRepository;
        $this->userRepository = $userRepository;
    }
}
