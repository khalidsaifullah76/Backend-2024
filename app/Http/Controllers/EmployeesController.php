<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employees;
use Illuminate\Support\Facades\Validator;

class EmployeesController extends Controller
{
    // Menampilkan semua pegawai
    public function index(){
        $employees = Employees::all();
        if ($employees) {
            $data = [
                'message' => 'Get All Resource',
                'data' => $employees
            ];
        } else {
            $data = [
                'message' => 'Data is Empty',
            ];
        }
        return response()->json($data, 200);
    }

    // Menambah pegawai baru
    public function store(Request $request) {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'gender' => 'required|in:M,F', 
            'phone' => 'required|string|max:15',
            'address' => 'required|string',
            'email' => 'required|email|unique:employees,email', 
            'status' => 'required|string',
            'hired_on' => 'required|date',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation errors',
                'errors' => $validator->errors()
            ], 422);
        }
    
        $validatedData = $validator->validated();
        $employees = Employees::create($validatedData);
    
        $data = [
            'message' => 'Resource is added Successfully',
            'data' => $employees,
        ];
    
        return response()->json($data, 201);
    }

    // Menampilkan detail pegawai berdasarkan ID
    public function show($id){
        $employees = Employees::find($id);

        if ($employees) {
            $data = [
                'message' => 'Get Detail Resource',
                'data' => $employees
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not Found'
            ];
            return response()->json($data, 404);
        }
    }

    // Mengupdate data pegawai berdasarkan ID
    public function update(Request $request, $id) {
        $employees = Employees::find($id);
        if ($employees) {
            $employees->update([
                'name' => $request->name,
                'gender' => $request->gender,
                'phone' => $request->phone,
                'address' => $request->address,
                'email' => $request->email,
                'status' => $request->status,
                'hired_on' => $request->hired_on
            ]);
            return response()->json([
                'message' => 'Resource is Update Successfully',
                'data' => $employees
            ], 200);
        } else {
            $data = [ 'message' => 'Resource not Found'];
            return response()->json($data, 404);
        }
    }

    // Menghapus data pegawai berdasarkan ID
    public function destroy($id) {
        $employees = Employees::find($id);
        if ($employees) {
            $employees->delete();
            return response()->json([
                'message' => 'Resource is Delete Successfully'
            ], 200);
        } else {
            $data = [
                'message' => 'Resource not Found'
            ];
            return response()->json($data, 404);
        }
    }

    // Mencari pegawai berdasarkan nama
    public function search($name) {
        $employees = Employees::where('name', 'like', '%' . $name . '%')->get();

        if ($employees->isEmpty()) {
            return response()->json([
                'message' => 'Resource not Found'
            ], 404);
        }

        return response()->json([
            'message' => 'Get Searched Resource',
            'data' => $employees
        ], 200);
    }

    // Menampilkan pegawai dengan status 'Aktif'
    public function active() {
        $employees = Employees::where('status', 'Aktif')->get();
        $totalactive = $employees->count();

        return response()->json([
            'message' => 'Get Active Resource',
            'total' => $totalactive,
            'data' => $employees
        ], 200);
    }

    // Menampilkan pegawai dengan status 'Cuti'
    public function inactive() {
        $employees = Employees::where('status', 'Cuti')->get();
        $totalactive = $employees->count();

        return response()->json([
            'message' => 'Get Inactive Resource',
            'total' => $totalactive,
            'data' => $employees
        ], 200);
    }

    // Menampilkan pegawai dengan status 'resign'
    public function Terminated() {
        $employees = Employees::where('status', 'resign')->get();
        $totalactive = $employees->count();

        return response()->json([
            'message' => 'Get Terminated Resource',
            'total' => $totalactive,
            'data' => $employees
        ], 200);
    }
}
