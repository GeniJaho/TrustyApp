<?php
declare(strict_types=1);

namespace App\Domain\Review;

use App\Domain\User\Craftsman;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    protected $guarded = [];

    public function craftsman(): BelongsTo
    {
        return $this->belongsTo(Craftsman::class, 'to_id');
    }
}
