<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\rijlessen;

class LessenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        rijlessen::create([
            'user_id' => 6, // Koppel aan een bestaande gebruiker
            'lesson_goal' => 'Bochten en parkeren',
            'date' => '2024-06-10',
            'start_time' => '10:00:00',
            'location' => 'Ophaaladres 123, Stad',
            'instructor_name' => 'Instructeur Jan',
            'status' => 'planned',
            'note' => 'Focus op bochten en parkeren.',
        ]);
    }
}
