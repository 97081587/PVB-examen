<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home;

//landingspagina
Route::get('/', [Home::class, 'index'])->name('home');

//laat klant registratie pagina zien
Route::get('/klantregistratie', [\App\Http\Controllers\klantRegistratieController::class, 'index']);

//verwerk  klant registratie formulier
Route::post('/klantregistratie', [\App\Http\Controllers\klantRegistratieController::class, 'store']);

//laat klant login pagina zien
Route::get('/login', [\App\Http\Controllers\klantLogInController::class, 'index'])->name('login');

//verwerk klant login formulier
Route::post('/login', [\App\Http\Controllers\klantLogInController::class, 'login']);

//laat klant dashboard pagina zien
Route::get('/dashboard', [\App\Http\Controllers\klantDashboardController::class, 'index'])
	->middleware('auth')
	->name('Dashboard');

//verwerk klant logout
Route::post('/dashboard/logout', [\App\Http\Controllers\klantDashboardController::class, 'logout'])
    ->middleware('auth')
    ->name('Dashboard.logout');   

// klant kan rijlessen wijzigen en annuleren
Route::get('/dashboard/kalender', [\App\Http\Controllers\KalenderController::class, 'index'])
    ->middleware('auth')
    ->name('klant.rijlessen');

// Route voor het opslaan van de opmerking
Route::patch('/dashboard/kalender/{id}/update-note', [\App\Http\Controllers\KalenderController::class, 'updateNote'])
    ->middleware('auth')
    ->name('klant.updateNote');

Route::patch('/dashboard/kalender/{rijles}/update-status', [\App\Http\Controllers\KalenderController::class, 'updateStatus'])
    ->middleware('auth')
    ->name('klant.updateStatus');