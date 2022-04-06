<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();

        return response()->json([
            'status' => true,
            'employee' => $employees,
        ], 200);
    }

    public function show(Employee $employee)
    {
        return response()->json([
            'status' => true,
            'employee' => $employee,
        ], 200);
    }

    public function store(StorePostRequest $request)
    {
        $employee = Employee::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Employee created successfully!',
            'employee' => $employee,
        ], 200);
    }

    public function update(StorePostRequest $request, Employee $employee)
    {
        $employee->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Employee uptated successfully!',
            'employee' => $employee,
        ], 200);
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->json([
            'status' => true,
            'message' => 'Employee deleted',
            'employee' => $employee,
        ], 200);
    }
}
