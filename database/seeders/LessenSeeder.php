<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rijles;

class LessenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userId = User::query()->where('role', 'klant')->value('id');

        Rijles::create([
            'user_id' => $userId,
            'date' => '2026-06-10',
            'start_time' => '10:00:00',
            'end_time' => '11:00:00',
            'location' => 'Ophaaladres 123, Stad',
            'lesson_goal' => 'Bochten en parkeren',
            'exam_info' => 'Voorbereiding op praktijkexamen',
            'lesson_funds' => 'Tegoed: 5 lessen',
            'instructor_name' => 'Instructeur Jan',
            'status' => 'planned',
            'note' => '',
        ]);

        Rijles::create([
            'user_id' => $userId,
            'date' => '2026-06-15',
            'start_time' => '10:00:00',
            'end_time' => '11:00:00',
            'location' => 'Ophaaladres 123, Stad',
            'lesson_goal' => 'Bochten en parkeren',
            'exam_info' => 'Voorbereiding op praktijkexamen',
            'lesson_funds' => 'Tegoed: 5 lessen',
            'instructor_name' => 'Instructeur Jan',
            'status' => 'planned',
            'note' => '',
        ]);
    }
}
