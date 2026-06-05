<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class MensenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Klant
        User::create([
            'first_name' => 'Klant',
            'last_name' => 'Demo',
            'email' => 'klant@test.nl',
            'password' => Hash::make('12345678'),
            'adress' => 'Klantstraat 1',
            'place_of_residence' => 'Klantstad',
            'role' => 'klant',
        ]);

        // Eigenaar
        User::create([
            'first_name' => 'Eigenaar',
            'last_name' => 'Eigenaar',
            'email' => 'eigenaar@test.nl',
            'password' => Hash::make('12345678'),
            'adress' => 'Eigenaarstraat 1',
            'place_of_residence' => 'Eigenaarstad',
            'role' => 'eigenaar',
        ]);

        // Instructeur 1
        User::create([
            'first_name' => 'InstructeurNaam',
            'last_name' => '1',
            'email' => 'instructeur1@test.nl',
            'password' => Hash::make('12345678'),
            'adress' => 'Instructeurstraat 1',
            'place_of_residence' => 'Instructeurstad',
            'role' => 'instructeur',
        ]);

        // Instructeur 2
        User::create([
            'first_name' => 'InstructeurNaam2',
            'last_name' => '2',
            'email' => 'instructeur2@test.nl',
            'password' => Hash::make('12345678'),
            'adress' => 'Instructeurstraat 2',
            'place_of_residence' => 'Instructeurstad',
            'role' => 'instructeur',
        ]);

        // Instructeur 3
        User::create([
            'first_name' => 'InstructeurNaam3',
            'last_name' => '3',
            'email' => 'instructeur3@test.nl',
            'password' => Hash::make('12345678'),
            'adress' => 'Instructeurstraat 3',
            'place_of_residence' => 'Instructeurstad',
            'role' => 'instructeur',
        ]);
    }
}
