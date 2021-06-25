<?php
declare(strict_types=1);

namespace App\Domain\User;

use JsonSerializable;

class User implements JsonSerializable
{
    /**
     * @var int|null
     */
    protected $id;

    /**
     * @var string
     */
    public $username;

    /**
     * @var string
     */
    public $fullName;

    /**
     * @var int
     */
    public $age;

    /**
     * @param int|null $id
     * @param string $username
     * @param string $fullName
     * @param int|null $age
     */
    public function __construct(?int $id, string $username, string $fullName, ?int $age)
    {
        $this->id = $id;
        $this->username = strtolower($username);
        $this->fullName = ucwords($fullName);
        $this->age = $age;
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
            'username' => $this->username,
            'fullName' => $this->fullName,
            'age' => $this->age,
        ];
    }
}
