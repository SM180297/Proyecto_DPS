<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//cargando clases
use App\Http\Middleware\ApiAuthMiddleware;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/pacientes','pruebascontroller@testORM');
        //metodos http comunes
        //GET:CONSEGUIR DATOS O RECURSOS
        //POST: Guardar datos o recursos o hacer logica desde un formulario 
        //PUT: Actualizar datos o recursos 
        //DELETE:Eliminar datos o recursos
        //
//Rutas de la api
    
        //Rutas de prueba
       // Route::get('/usuario/pruebas','UserController@pruebas');
        //Route::get('/paciente/pruebas','PacienteController@pruebas');
        //Route::get('/doctor/pruebas','DoctorController@pruebas');
        //Route::get('/cita/pruebas','CitaController@pruebas');
        
    //Rutas del controlador de usuario
        Route::post('/api/registro','UserController@registro');
        Route::post('/api/login','UserController@login');
        Route::put('/api/user/update','UserController@update');
       // Route::post('/api/paciente/upload','UserController@upload')->middleware(ApiAuthMiddleware::class);
        Route::get('/api/paciente/avatar/{filename}','UserController@getImage');
        Route::get('/api/paciente/detail/{iduser}','UserController@detail');
        
        //Rutas del controlador Paciente
        Route::resource('/api/pacientes','PacienteController');
        Route::post('/api/paciente/upload','PacienteController@upload');
        Route::get('/api/paciente/image/{filename}','PacienteController@getImage');
        
        //Rutas del controlador Doctor
        Route::resource('/api/doctores','DoctorController');
        Route::post('/api/doctores/upload','DoctorController@upload');
        Route::get('/api/doctores/image/{filename}','DoctorController@getImage');
        
        //Rutas del controlador Citas
        Route::resource('/api/citas','CitaController');
        Route::get('/api/citas/paciente/{idcita}','CitaController@getCitasbyPaciente');
        Route::get('/api/citas/doctor/{idcita}','CitaController@getCitasbyDoctor');