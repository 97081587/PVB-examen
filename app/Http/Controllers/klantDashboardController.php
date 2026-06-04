<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\Rijles;
use Illuminate\Support\Facades\Auth;

class klantDashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        // 1. Haal de aankomende lessen op
        $rijlessen = Rijles::where('user_id', $user->id)
            ->orderBy('date', 'desc')
            ->get();

        // 2. Bereken de statistieken voor de tiles
        $stats = [
            'planned' => $rijlessen->where('status', 'planned')->count(),
            'completed' => $rijlessen->where('status', 'completed')->count(),
            'exam_date' => $user->exam_date ? Carbon::parse($user->exam_date)->format('d M Y') : 'Nog niet gepland',
        ];

        // 3. Volgende les bepalen voor de groene welkomstbalk
        $nextLesson = $rijlessen->first();

        return Inertia::render('DashboardLeerling', [
            'auth' => [
                'user' => $user,
            ],
            'stats' => $stats,
            'lessons' => $rijlessen,
            'nextLesson' => $nextLesson ? [
                'date' => Carbon::parse($nextLesson->date)->translatedFormat('l j F'),
                'time' => Carbon::parse($nextLesson->start_time)->format('H:i'),
            ] : null,
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
