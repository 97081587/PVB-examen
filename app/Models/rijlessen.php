<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class rijlessen extends Model
{
    protected $fillable = [
        'user_id',
        'scheduled_at',
        'instructor_name',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
