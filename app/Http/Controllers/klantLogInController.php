<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class klantLogInController extends Controller
{
    public function index()
    {
        return view('klantLogIn');
    }

    public function store(Request $request)
    {
        // Validatie van de invoer
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        // Logica voor het inloggen van de gebruiker
        // Hier zou je de gebruikersgegevens kunnen controleren en een sessie kunnen starten

        // Redirect naar een gewenste pagina na inloggen
        return redirect()->route('home')->with('success', 'Inloggen succesvol!');
    }
}
