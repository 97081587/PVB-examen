<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class klantLogInController extends Controller
{
    public function index()
    {
        // return Inertia::render('LogIn');
        return Inertia::render('Test/loginTest');
    }

    public function login(Request $request)
    {
        // Validatie van de invoer
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        // Logica voor het inloggen van de gebruiker
        $user = User::where('email', $validatedData['email'])->firstOrFail();
        if (!Hash::check($validatedData['password'], $user->password)) {
            return redirect()->back()->with('error', 'Ongeldige inloggegevens');
        }

        // Redirect naar een gewenste pagina na inloggen
        return redirect()->route('Dashboard')->with('success', 'Inloggen succesvol!');
    }
}
