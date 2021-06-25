<?php
declare(strict_types=1);

namespace App\Domain\User;

use JsonSerializable;

class Craftsman extends User implements JsonSerializable
{
    /**
     * @var string
     */
    public $craft;

    /**
     * @var string
     */
    public $address;

    /**
     * @var string
     */
    public $language;

    /**
     * @var string
     */
    public $description;

    /** @var float */
    public $price;

    /** @var float */
    public $rating;

    /**
     * @param int|null $id
     * @param string $username
     * @param string $fullName
     * @param int|null $age
     * @param string|null $address
     * @param string|null $craft
     * @param string|null $language
     * @param string|null $description
     * @param float|null $price
     * @param float|null $rating
     */
    public function __construct(
        ?int $id,
        string $username,
        string $fullName,
        ?int $age,
        ?string $craft,
        ?string $address,
        ?string $language,
        ?string $description,
        ?float $price,
        ?float $rating
    )
    {
        parent::__construct($id, $username, $fullName, $age);
        $this->craft = $craft;
        $this->address = $address;
        $this->language = $language;
        $this->description = $description;
        $this->price = $price;
        $this->rating = $rating;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return array_merge(
            parent::jsonSerialize(),
            [
                'craft' => $this->craft,
                'address' => $this->address,
                'language' => $this->language,
                'description' => $this->description,
                'price' => $this->price,
                'rating' => $this->rating
            ]
        );
    }
}
