<?php

namespace Database\Factories;

use App\Models\Rijles;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Rijles>
 */
class rijlessenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => 1, // Koppel aan een bestaande gebruiker
            'lesson_goal' => $this->faker->sentence(),
            'date' => $this->faker->date(),
            'start_time' => $this->faker->time(),
            'location' => $this->faker->address(),
            'instructor_name' => $this->faker->name(),
            'status' => $this->faker->randomElement(['planned', 'completed', 'canceled']),
            'note' => $this->faker->paragraph(),
        ];
    }
}
