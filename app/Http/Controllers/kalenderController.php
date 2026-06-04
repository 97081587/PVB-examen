<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Rijles; // Zorg dat dit model bestaat
use Illuminate\Support\Facades\Auth;

class kalenderController extends Controller
{
    public function index()
    {
        // 1. Haal de ingelogde gebruiker op
        $user = Auth::user();

        // 2. Haal alle rijlessen op die bij deze gebruiker horen
        // We sorteren ze van oud naar nieuw (of gebruik desc voor nieuw naar oud)
        $rijlessen = Rijles::where('user_id', $user->id)
            ->orderBy('date', 'asc')
            ->get();

        // 3. Stuur de data naar de React view
        return Inertia::render('Kalender', [
            'auth' => [
                'user' => $user,
            ],
            'rijlessen' => $rijlessen, // Dit is de variabele die jij in React gebruikt!
            'stats' => [
                'totaal' => $rijlessen->count(),
                'gepland' => $rijlessen->where('status', 'gepland')->count(),
                'afgerond' => $rijlessen->where('status', 'afgerond')->count(),
            ]
        ]);
    }

    // Functie voor het opslaan van de opmerking
    public function updateNote(Request $request, Rijles $rijles)
    {
        // Controleer of de les wel van deze gebruiker is (veiligheid)
        if ($rijles->user_id !== Auth::id()) {
            return back()->with('error', 'Niet toegestaan');
        }

        $request->validate([
            'note' => 'nullable|string|max:1000',
        ]);

        $rijles->update([
            'opmerking' => $request->note // Check of de kolom in DB 'opmerking' heet
        ]);

        return back();
    }

    // Functie voor annuleren
    public function destroy(Rijles $rijles)
    {
        if ($rijles->user_id === Auth::id() && $rijles->status === 'gepland') {
            $rijles->delete();
        }

        return back();
    }
}
