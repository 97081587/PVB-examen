<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class klantDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Test/dashboardTest');
    }
}
