<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Rijles;

class klantRijlessenController extends Controller
{
    public function index()
    {
        return Inertia::render('Test/klantRijlessenTest');
    }

    public function show($id)
    {
        $rijles = Rijles::findOrFail($id);

        return response()->json($rijles);
    }
}
