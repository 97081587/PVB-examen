<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class rijlessen extends Model
{
    protected $table = 'rijlessen';

    protected $fillable = [
        'user_id',
        'date',
        'start_time',
        'location',
        'instructor_name',
        'status',
        'note',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
