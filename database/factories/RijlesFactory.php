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
            'instructor_name' => User::where('role', 'instructeur')->inRandomOrder()->first()->first_name . ' ' . User::where('role', 'instructeur')->inRandomOrder()->first()->last_name,
            'status' => fake()->randomElement(['gepland', 'afgerond', 'geannuleerd']),
            'note' => '',
        ];

        
        $date = fake()->dateTimeBetween('2026-06-01', '2026-06-30');
        $startTime = fake()->dateTimeBetween('08:00', '17:00')->format('H:i');

        $lessonDateTime = Carbon::parse(
        $date->format('Y-m-d') . ' ' . $startTime
        );

        //checkt of de les in het verleden ligt. Als dat zo is, markeert het als 'afgerond', anders krijgt het een willekeurige status.
        return [
            'date' => $date->format('Y-m-d'),
            'start_time' => $startTime,
            'status' => $lessonDateTime->isPast()
            ? 'afgerond'
            : fake()->randomElement([
                'afgerond',
                'afgerond',
                'afgerond',
                'geannuleerd',
            ])
            'status' => $lessonDateTime->isFuture()
            ? 'gepland',
        ];
            return [
                'status' => $status,
            ];
        

    }
}
