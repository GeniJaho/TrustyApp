<?php
declare(strict_types=1);

namespace App\Domain\User;

use App\Domain\Review\Review;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Craftsman extends Model
{
    protected $guarded = [];

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'to_id');
    }

    public function averageRating()
    {
        return $this->reviews()->avg('rating');
    }
}
