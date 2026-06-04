<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class rijlessen extends Model
{
    use HasFactory;

    protected $table = 'rijlessen';

    protected $fillable = [
        'user_id',
        'date',
        'start_time',
        'end_time',
        'location',
        'lesson_goal',
        'exam_info',
        'lesson_funds',
        'instructor_name',
        'status',
        'note',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
