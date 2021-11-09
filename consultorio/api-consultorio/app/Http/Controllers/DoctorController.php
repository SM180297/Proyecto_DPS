<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\doctor;

class DoctorController extends Controller {

     public function __construct() {
        $this->middleware('api.auth',['except'=>['index','show','getImage']]);
    }
    
    public function index() {
        $doctores = doctor::all();

        return response()->json([
                    'code' => 200,
                    'status' => 'success',
                    'pacientes' => $doctores
        ]);
    }

    public function show($iddoctor) {
        $iddoctor = doctor::find($iddoctor);

        if (is_object($iddoctor)) {
            $data = [
                'code' => 200,
                'status' => 'success',
                'paciente' => $iddoctor
            ];
        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'el doctor no exite.'
            ];
        }
        return response()->json($data, $data['code']);
    }

    public function store(Request $request) {

        //Recoger los datos por POST
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        //Validar los datos
        if (!empty($params_array)) {
            $validate = \Validator::make($params_array, [
                        'nombredoctor' => 'required',
                        'años' => 'required',
                        'image'=>'required'
            ]);

            //Guardar la paciente
            if ($validate->fails()) {
                $data = [
                    'code' => 400,
                    'status' => 'error',
                    'message' => 'no se ha registrado el doctor.'
                ];
            } else {
                $doctor = new doctor();
                $doctor->nombredoctor = $params_array['nombredoctor'];
                $doctor->años = $params_array['años'];
                $doctor->telefono = $params_array['telefono'];
                $doctor->descripcion = $params_array['descripcion'];
                $doctor->image = $params_array['image'];
                $doctor->save();

                $data = [
                    'code' => 200,
                    'status' => 'success',
                    'paciente' => $doctor
                ];
            }
        } else {
            $data = [
                'code' => 400,
                'status' => 'error',
                'message' => 'no se han enviado datos de ningun doctor.'
            ];
        }
        //Devolver el resultado
        return response()->json($data, $data['code']);
    }

    public function update($iddoctor, Request $request) {
        //recoger datos por POST
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);


        if (!empty($params_array)) {
            //validar los datos
            $validate = \Validator::make($params_array, [
                        'nombredoctor' => 'required',
                        'telefono' => 'required',
                        'descripcion' => 'required'
            ]);
            //quitar lo que no se actualizara
            unset($params_array['iddoctor']);
            unset($params_array['created_at']);

            //actualizar el registro 
            $doctor = doctor::where('iddoctor', $iddoctor)->update($params_array);
            $data = [
                'code' => 200,
                'status' => 'success',
                'paciente' => $params_array
            ];
        } else {
            $data = [
                'code' => 400,
                'status' => 'error',
                'message' => 'no se han enviado datos actualizados de ningun paciente.'
            ];
        }
        //devolver los datos
        return response()->json($data, $data['code']);
    }
    public function upload(Request $request) {
        //Recoger la imagen de la peticion
        $image=$request->file('file0');
        
        //Validar la imagen 
        $validate=\Validator::make($request->all(),
                [
                    'file0'=>'required|image|mimes:jpg,jpeg,png,gif'
                ]);
        
        //guardar la imagen 
            if(!$image || $validate->fails()){
                $data=[
                  'code'=>400,
                  'status'=>'error',
                  'message'=>'Error al subir la imagen'
                ];
            }else{
                $image_name=time().$image->getClientOriginalName();
                
                \Storage::disk('doctores')->put($image_name, \File::get($image));
                
                $data=[
                  'code'=>200,
                  'status'=>'success',
                  'image'=>$image_name
                ];
            }
        
        //Devolver datos
            return response()->json($data,$data['code']);
    }
    
    public function getImage($filename){
        //comprobar si existe el fichero
        $isset=\Storage::disk('doctores')->exists($filename);
        
        if($isset){        
        //conseguir la imagen 
        $file=\Storage::disk('doctores')->get($filename);
        
        //devolver la imagen 
        return new Response($file,200);
        }else{
             //mostrar error
            $data=[
                'code'=>400,
                'status'=>'error',
                'message'=>'La imagen no existe.'
            ];
        }
        return response()->json($data,$data['code']);
       
    }
}
