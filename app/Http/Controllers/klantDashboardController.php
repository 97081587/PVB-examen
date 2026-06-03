<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class klantDashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // 1. Haal de aankomende lessen op
        $lessons = $user->rijlessen()
            ->where('date', '>=', now())
            ->orderBy('date', 'asc')
            ->get();

        // 2. Bereken de statistieken voor de tiles
        $stats = [
            'planned' => $user->rijlessen()->where('status', 'planned')->count(),
            'completed' => $user->rijlessen()->where('status', 'completed')->count(),
            'exam_date' => $user->exam_date ? Carbon::parse($user->exam_date)->format('d M Y') : 'Nog niet gepland',
        ];

        // 3. Volgende les bepalen voor de groene welkomstbalk
        $nextLesson = $lessons->first();

        return Inertia::render('DashboardLeerling', [
            'stats' => $stats,
            'lessons' => $lessons,
            'nextLesson' => $nextLesson ? [
                'date' => Carbon::parse($nextLesson->date)->translatedFormat('l j F'),
                'time' => Carbon::parse($nextLesson->start_time)->format('H:i'),
            ] : null,
        ]);
    }
}
