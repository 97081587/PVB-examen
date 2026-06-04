<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class klantRijlessenController extends Controller
{
    public function index()
    {
        return Inertia::render('Test/klantRijlessenTest');
    }
}
