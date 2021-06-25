<?php
declare(strict_types=1);

namespace App\Domain\Review;

use JsonSerializable;

class Review implements JsonSerializable
{
    /**
     * @var int|null
     */
    protected $id;

    /**
     * @var string
     */
    public $body;

    /**
     * @var int
     */
    public $rating;

    /**
     * @var int
     */
    public $fromId;

    /**
     * @var int
     */
    public $toId;

    /**
     * @var string
     */
    public $createdAt;

    /**
     * @param int|null $id
     * @param string $body
     * @param int $rating
     * @param int $from
     * @param int $to
     * @param string|null $createdAt
     */
    public function __construct(?int $id, string $body, int $rating, int $from, int $to, ?string $createdAt)
    {
        $this->id = $id;
        $this->body = $body;
        $this->rating = $rating;
        $this->fromId = $from;
        $this->toId = $to;
        $this->createdAt = $createdAt ?? date("Y-m-d H:i:s");
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'body' => $this->body,
            'rating' => $this->rating,
            'from_id' => $this->fromId,
            'to_id' => $this->toId,
            'created_at' => $this->createdAt
        ];
    }
}
