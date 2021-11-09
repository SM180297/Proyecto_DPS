<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class doctor extends Model
{
    protected $table = 'doctores';
    protected $primaryKey = 'iddoctor'; //IMPORTANTE AGREGAR SI LA COLUMNA DE LA TABLA NO SE LLAMA SOLO ID
    //relacion de uno a muchos
    public function cita(){
        return $this->hasMany('App\cita');
        
    }
}
