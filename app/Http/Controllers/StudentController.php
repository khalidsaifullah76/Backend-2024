<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function index(){
        $student = Student::all();
        if ($students){
        $data = [
            'message'=>'Berhasil mengakses student',
            'data'=>$student
        ];}
    else{
        $data = [
            'message' => 'Gagal mengakses student',
        ];
    }
        return response()->json($data,200);}


        public function store(Request $request) {
            $validator = Validator::make($request->all(), [
                'nama' => 'required',
                'nim' => 'numeric|required',
                'email' => 'email|required',
                'jurusan' => 'required',
            ]);
        
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'validation errors',
                    'errors' => $validator->errors()
                ], 422);
            }
        
            $validatedData = $validator->validated();
            $student = Student::create($validatedData);
        
            $data = [
                'message' => 'Berhasil menginput student',
                'data' => $student,
            ];
        
            return response()->json($data, 201);
        }
        

    public function update(Request $request, $id) {
        $student = Student::find($id);
        if ($student){
        $student->update([
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ]);
        return response()->json([
            'message' => 'Berhasil mengubah student',
            'data' => $student
        ], 200);}
        else {
            $data = [ 'message' => 'Gagal mengubah student'];

            return reponse()->json($data,404);
        }
}

    public function destroy($id) {
        $student = Student::find($id);
        if ($student){
        $student->delete();
        return response()->json([
            'message' => 'Berhasil menghapus student'
        ], 200);}
        else {
            $data = [
                'message' => 'Gagal menghapus student'];

            return response()->json($data,404);
        }
    }
    
    public function show($id){
        $student = Student::find($id);

        if($student){
            $data = 
            ['message' => 'Berhasil mendapat detail student',
            'data' => $student];

            return response()->json($data,200);
        }
        else {
            $data = [
                'message' => 'Gagal mendapat detail student'];

            return response()->json($data,404);
        }
    }

}
