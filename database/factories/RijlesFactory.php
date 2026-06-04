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
            'date' => $this->faker->date(),
            'start_time' => $this->faker->time(),
            'end_time' => $this->faker->time(),
            'location' => $this->faker->address(),
            'lesson_goal' => $this->faker->sentence(),
            'exam_info' => $this->faker->sentence(),
            'lesson_funds' => $this->faker->sentence(),
            'instructor_name' => $this->faker->name(),
            'status' => fake()->randomElement(['planned', 'completed', 'cancelled']),
            'note' => '',
        ];
    }
}
