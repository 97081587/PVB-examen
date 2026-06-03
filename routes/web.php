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
Route::get('/login', [\App\Http\Controllers\klantLogInController::class, 'index']);

//verwerk klant login formulier
Route::post('/login', [\App\Http\Controllers\klantLogInController::class, 'login']);

//laat klant dashboard pagina zien
Route::get('/dashboard', [\App\Http\Controllers\klantDashboardController::class, 'index'])->name('Dashboard');