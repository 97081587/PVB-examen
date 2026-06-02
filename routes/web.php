<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\test;
use App\Http\Controllers\klantRegistratieController;

// Route::get('/', [Home::class, 'index']);

Route::get('/klantregistratie', [klantRegistratieController::class, 'index'])->name('klant-registratie');

Route::post('/klantregistratie', [klantRegistratieController::class, 'store'])->name('klant-registratie.store');