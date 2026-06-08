<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Rijles;
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
                'geannuleerd' => $rijlessen->where('status', 'geannuleerd')->count(),
            ]
        ]);
    }

    // Functie voor het bijwerken van de locatie van een rijles
    public function updateLocation(Request $request, $id)
    {
        $rijles = Rijles::find($id);
        if ($rijles->user_id !== Auth::id()) {
            return back()->with('error', 'Niet toegestaan');
        }

        $request->validate([
            'location' => 'required|string|max:255',
        ]);

        $rijles->update([
            'location' => $request->location
        ]);

        return back()->with('message', 'Locatie bijgewerkt');
    }

    // Functie voor het opslaan van de opmerking
    public function updateNote(Request $request, $id)
    {
        // Controleer of de les wel van deze gebruiker is (veiligheid)
        // dd($request->all());
        $rijles = Rijles::find($id);
        if ($rijles->user_id !== Auth::id()) {
            return back()->with('error', 'Niet toegestaan');
        }
        // dd($request->all());
        $request->validate([
            'note' => 'nullable|string|max:1000',
        ]);

        $rijles->update([
            'note' => $request->note // Check of de kolom in DB 'note' heet
        ]);

        return back();
    }
    
    // rijles annuleren met reden
    public function updateStatus (Request $request, $id, Rijles $rijles) {
        $rijles = Rijles::find($id);

        if ($rijles->user_id !== Auth::id()) {
            return back()->with('error', 'Niet toegestaan');
        }

        $request->validate([
            // 'status' => 'required|in:gepland,afgerond,geannuleerd',
            'cancel_reason' => 'required_if:status,geannuleerd|string|max:500',
        ]);
        // dd($request->all());
        // dd($request->all(), $request->status);
        $rijles->update([
            'status' => $request->status,
            'cancel_reason' => $request->cancel_reason,
        ]);
        // dd($request->all());

        return back()->with('message', 'Status bijgewerkt');
    }
}
