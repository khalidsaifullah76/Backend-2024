<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{
    protected $table ='employees';
    protected $fillable = ['name','gender','phone','addres','email','status','hired_on'];
    public $timestamps =false;
}
