<?php
declare(strict_types=1);

namespace App\Application\Actions\Review;

use App\Application\Actions\Action;
use App\Domain\Review\ReviewRepository;
use App\Domain\User\CraftsmanRepository;
use Psr\Log\LoggerInterface;

abstract class ReviewAction extends Action
{
    /**
     * @var ReviewRepository
     */
    protected $reviewRepository;
    /**
     * @var CraftsmanRepository
     */
    protected $craftsmanRepository;

    /**
     * @param LoggerInterface $logger
     * @param ReviewRepository $reviewRepository
     * @param CraftsmanRepository $craftsmanRepository
     */
    public function __construct(
        LoggerInterface $logger,
        ReviewRepository $reviewRepository,
        CraftsmanRepository $craftsmanRepository
    )
    {
        parent::__construct($logger);
        $this->reviewRepository = $reviewRepository;
        $this->craftsmanRepository = $craftsmanRepository;
    }
}
