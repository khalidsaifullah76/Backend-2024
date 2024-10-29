<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();
        $data = [
            'message'=>'Berhasil akses data',
            'data'=>$students
        ];

        return response()->json($data,200);}


    public function store(Request $request){
        $input =[
            'nama'=>$request->nama,
            'nim'=>$request->nim,
            'email'=>$request->email,
            'jurusan'=>$request->jurusan];

        $student = Student::create($input);
        $data = [
            'message' => 'Berhasil input data',
            'data' => $student,
        ];

        return response()->json($data, 201);}


    public function update(Request $request, $id) {
        $student = Student::find($id);
        $student->update([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ]);
        return response()->json([
            'message' => 'Berhasil ubah data',
            'data' => $student
        ], 200);}

    
    public function destroy($id) {
        $student = Student::find($id);
        $student->delete();
        return response()->json([
            'message' => 'Berhasil hapus data'
        ], 200);}
}
