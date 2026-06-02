<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class klantRegistratieController extends Controller
{
    public function index()
    {
        return Inertia::render('SignUp');
    }

    public function store(Request $request)
    {
        // Validatie van de invoer
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'adress' => 'required|string|max:255',
            'place_of_residence' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Aanmaken van de gebruiker
        $user = User::create([
            'first_name' => $validatedData['first_name'],
            'last_name' => $validatedData['last_name'],
            'adress' => $validatedData['adress'],
            'place_of_residence' => $validatedData['place_of_residence'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        // Redirect naar een gewenste pagina na registratie
        return redirect()->route('home')->with('success', 'Registratie succesvol!');
    }
}
