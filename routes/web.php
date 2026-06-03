<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home;

//landingspagina
Route::get('/', [Home::class, 'index'])->name('home');

//laat registratie pagina zien
Route::get('/klantregistratie', [\App\Http\Controllers\klantRegistratieController::class, 'index']);

//verwerk registratie formulier
Route::post('/klantregistratie', [\App\Http\Controllers\klantRegistratieController::class, 'store']);

//laat login pagina zien
Route::get('/login', [\App\Http\Controllers\klantLogInController::class, 'index']);

//verwerk login formulier
Route::post('/login', [\App\Http\Controllers\klantLogInController::class, 'login']);