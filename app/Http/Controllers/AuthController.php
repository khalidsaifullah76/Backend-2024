<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        $user = User::create($input);
        $data = ['message' => 'Berhasil membuat user'];

        return response()->json($data, 200);
    }

    public function login(Request $request)
    {
        $users = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (Auth::attempt($users)) {
            $token = Auth::user()->createToken('auth_token');
            $data = [
                'message' => 'Berhasil login',
                'token' => $token->plainTextToken
            ];

            return response()->json($data, 200);
        } else {
            $data = ['message' => 'Gagal login'];
            return response()->json($data, 401);
        }
    }
}
