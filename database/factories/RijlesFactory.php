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
            $startTime = fake()->numberBetween(8, 17) . ':00';

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

            return [
                'user_id' => $userId,
                'date' => $date->format('Y-m-d'),
                'start_time' => $startTime,
                'end_time' => $this->faker->time('H:i'),
                'location' => fake('nl_NL')->address(),
                'lesson_goal' => $this->faker->sentence(),
                'exam_info' => $this->faker->sentence(),
                'lesson_funds' => $this->faker->sentence(),
                'instructor_name' => $instructor->first_name . ' ' . $instructor->last_name,
                'status' => $status,
                'note' => '',
            ];
        }

}
