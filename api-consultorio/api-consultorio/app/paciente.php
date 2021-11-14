<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class paciente extends Model
{
     protected $table = 'pacientes';
    protected $primaryKey = 'idpaciente'; //IMPORTANTE AGREGAR SI LA COLUMNA DE LA TABLA NO SE LLAMA SOLO ID
    //relacion de uno a muchos
    public function cita(){
        return $this->hasMany('App\cita');
        
    }
}
