<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home;

Route::get('/', [Home::class, 'index']);

Route::get('/klant-registratie', [klantRegistratieController::class, 'index'])->name('klant-registratie');