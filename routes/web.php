<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home;
use App\Http\Controllers\klantRegistratieController;

//landingspagina
Route::get('/', [Home::class, 'index']);

//laat registratie pagina zien
Route::get('/klantregistratie', [klantRegistratieController::class, 'index']);

//verwerk registratie formulier
Route::post('/klantregistratie', [klantRegistratieController::class, 'store']);

Route::get('/login', [\App\Http\Controllers\klantLogInController::class, 'index']);