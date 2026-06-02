<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home;
use App\Http\Controllers\klantRegistratieController;

Route::get('/', [Home::class, 'index']);

Route::get('/klantregistratie', [klantRegistratieController::class, 'index']);

Route::post('/klantregistratie', [klantRegistratieController::class, 'store']);