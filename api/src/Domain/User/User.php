<?php
declare(strict_types=1);

namespace App\Domain\User;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = ['password'];

    public $timestamps = false;

    protected static function newFactory()
    {
        return new UserFactory();
    }
}
