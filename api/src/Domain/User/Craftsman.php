<?php
declare(strict_types=1);

namespace App\Domain\User;

use App\Domain\Review\Review;
use Database\Factories\CraftsmanFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Craftsman extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = ['password'];

    public $timestamps = false;

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'to_id');
    }

    public function averageRating()
    {
        return $this->reviews()->avg('rating');
    }

    protected static function newFactory()
    {
        return new CraftsmanFactory();
    }
}
