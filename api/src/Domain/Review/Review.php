<?php
declare(strict_types=1);

namespace App\Domain\Review;

use App\Domain\User\Craftsman;
use Database\Factories\ReviewFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $timestamps = false;

    public function craftsman(): BelongsTo
    {
        return $this->belongsTo(Craftsman::class, 'to_id');
    }

    protected static function newFactory()
    {
        return new ReviewFactory();
    }
}
