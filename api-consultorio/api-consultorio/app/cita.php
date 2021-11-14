<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cita extends Model
{
    protected $table = 'citas';
    protected $primaryKey = 'idcita'; //IMPORTANTE AGREGAR SI LA COLUMNA DE LA TABLA NO SE LLAMA SOLO ID
    
    //relacion de muchos a uno 
    
    public function paciente(){
        return $this->belongsTo('App\paciente','idpaciente');
    }
    
    public function doctor(){
        return $this->belongsTo('App\doctor','iddoctor');
    }
    
}
