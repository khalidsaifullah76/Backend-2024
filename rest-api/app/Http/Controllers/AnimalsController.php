<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller {
    public $animals = ['Harimau', 'Elang', 'Hiu', 'Buaya', 'Unta'];
    
        public function index() {
            foreach ($this->animals as $animal) {
                echo $animal  ;}}
    
        public function store(Request $request) {
            array_push($this->animals, $request->input('animal'));
            $this->index(); }
    
        public function update(Request $request, $id) {
            if (isset($this->animals[$id])) {
                $this->animals[$id] = $request->input('animal');}
            $this->index(); }
    
        public function destroy($id) {
            if (isset($this->animals[$id])) {
                unset($this->animals[$id]);
                }
        }
    }
    
    
    
