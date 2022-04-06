<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;

// use Illuminate\Support\Facades\DB;

class AutocompleteController extends Controller
{
    public function index()
    {
        return view('employees.index');
    }

    public function single()
    {
        return view('employees.single');

    }

    public function multy()
    {
        return view('employees.multi');

    }
}
