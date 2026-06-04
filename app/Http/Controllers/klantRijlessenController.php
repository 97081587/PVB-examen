<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class klantRijlessenController extends Controller
{
    public function index()
    {
        Inertia::render('Test/klantRijlessenTest');
    }
}
