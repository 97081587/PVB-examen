<?php

namespace Database\Factories;

use App\Models\Rijles;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends Factory<Rijles>
 */
class RijlesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition(): array
        {
            $userId = User::where('role', 'klant')
                ->inRandomOrder()
                ->value('id');

            $instructor = User::where('role', 'instructeur')
                ->inRandomOrder()
                ->first();

            $date = $this->faker->dateTimeBetween('2026-06-01', '2026-06-30');
            // $startTime = $this->faker->time('H:i');
            $startNumber = $this->faker->numberBetween(8, 19);
            $startTime = $startNumber . ':00';
            $endTime = ($startNumber + 1) . ':00';

            $lessonDateTime = Carbon::parse(
                $date->format('Y-m-d') . ' ' . $startTime
            );

            // Bepaal de status op basis van de datum en tijd van de les
            $status = $lessonDateTime->isPast()
                ? 'afgerond'
                : fake()->randomElement([
                    'gepland',
                    'gepland',
                    'gepland',
                    'geannuleerd',
                ]);

            $LessonGoals = [
                'Bochten en parkeren',
                'Snelweg rijden',
                'Stadsverkeer',
                'Rondje om de kerk',
                'Voorbereiding op praktijkexamen',
                'Keren en achteruitrijden',
                'Beheer van de voertuigbediening',
                'Verkeersinzicht en -gedrag',
                'Rijvaardigheid en zelfvertrouwen',
                'Nachtelijk rijden',
            ];

            return [
                'user_id' => $userId,
                'date' => $date->format('Y-m-d'),
                'start_time' => $startTime,
                'end_time' => $endTime,
                'location' => fake('nl_NL')->address(),
                'lesson_goal' => $this->faker->randomElement($LessonGoals),
                'exam_info' => $this->faker->sentence(),
                'cancel_reason' => '',
                'instructor_name' => $instructor->first_name . ' ' . $instructor->last_name,
                'status' => $status,
                'note' => '',
            ];
        }

}
