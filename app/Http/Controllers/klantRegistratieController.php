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
        return Inertia::render('VariableTest');
    }

    public function store(Request $request)
    {
        // Validatie van de invoer
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);



        // Aanmaken van de gebruiker
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        // Redirect naar een gewenste pagina na registratie
        return redirect()->route('home')->with('success', 'Registratie succesvol!');
    }
}
