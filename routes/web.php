<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home;

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         // 'canLogin' => Route::has('login'),
//         // 'canRegister' => Route::has('register'),
//     ]);
// });

Route::get('/', [Home::class, 'index']);