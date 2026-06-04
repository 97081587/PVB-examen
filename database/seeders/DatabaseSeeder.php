<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\rijlessen;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call(MensenSeeder::class);
        $this->call(LessenSeeder::class);
        
        rijlessen::factory()->count(15)->create();

        // User::factory()->create([
        //     'first_name' => 'Test',
        //     'last_name' => 'User',
        //     'adress' => 'Teststraat 1',
        //     'place_of_residence' => 'Teststad',
        //     'email' => 'test@example.com',
        //     'password' => '12345678',
        // ]);
    }
}
