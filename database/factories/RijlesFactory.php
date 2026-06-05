<?php

namespace Database\Factories;

use App\Models\Rijles;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        $userId = User::query()->where('role', 'klant')->value('id');

        return [
            'user_id' => $userId,
            'date' => $this->faker->dateTimeBetween('2026-06-01', '2026-06-30')->format('Y-m-d'),
            'start_time' => $this->faker->dateTimeBetween('08:00', '17:00')->format('H:i'),
            'end_time' => $this->faker->dateTimeBetween('08:00', '17:00')->format('H:i'),
            'location' => $this->faker->address(),
            'lesson_goal' => $this->faker->sentence(),
            'exam_info' => $this->faker->sentence(),
            'lesson_funds' => $this->faker->sentence(),
            'instructor_name' => User::where('role', 'instructeur')->inRandomOrder()->first()->first_name,
            'status' => fake()->randomElement(['gepland', 'afgerond', 'geannuleerd']),
            'note' => '',
        ];
    }
}
