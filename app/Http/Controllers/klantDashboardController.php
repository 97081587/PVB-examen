 <?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\rijlessen; // Zorg dat dit model bestaat
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // 1. Haal de aankomende lessen op
        $lessons = $user->lessons()
            ->where('date', '>=', now())
            ->with('instructor') // Als je een relatie hebt met instructeurs
            ->orderBy('date', 'asc')
            ->get();

        // 2. Bereken de statistieken voor de tiles
        $stats = [
            'planned' => $user->lessons()->where('status', 'planned')->count(),
            'completed' => $user->lessons()->where('status', 'completed')->count(),
            'exam_date' => $user->exam_date ? Carbon::parse($user->exam_date)->format('d M Y') : 'Nog niet gepland',
        ];

        // 3. Volgende les bepalen voor de groene welkomstbalk
        $nextLesson = $lessons->first();

        return Inertia::render('Dashboard', [
            'stats' => $stats,
            'lessons' => $lessons,
            'nextLesson' => $nextLesson ? [
                'date' => Carbon::parse($nextLesson->date)->translatedFormat('l j F'),
                'time' => Carbon::parse($nextLesson->start_time)->format('H:i'),
            ] : null,
        ]);
    }
}
