<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\cita;
use App\paciente;

class Pruebascontroller extends controller{
    public function testORM(){
        
        //cosultas sql
        $pacientes=paciente::all();
            foreach($pacientes as $paciente){
                echo "<h1>".$paciente->nombrepaciente."</h1>";
                echo "<p>".$paciente->dui."</p>";
            }
        die();
    }
}