<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\paciente;

class PacienteController extends Controller {

    public function __construct() {
        $this->middleware('api.auth', ['except' => ['index', 'show','getImage']]);
    }

    public function index() {
        $pacientes = paciente::all();

        return response()->json([
                    'code' => 200,
                    'status' => 'success',
                    'pacientes' => $pacientes
        ]);
    }

    public function show($idpaciente) {
        $paciente = paciente::find($idpaciente);

        if (is_object($paciente)) {
            $data = [
                'code' => 200,
                'status' => 'success',
                'paciente' => $paciente
            ];
        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'paciente no exite.'
            ];
        }
        return response()->json($data, $data['code']);
    }

    public function store(Request $request) {
        //Recoger los datos por POST

        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        if (!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                        'nombrepaciente' => 'required',
                        'dui' => 'required',
                        'telefono' => 'required',
                        'descripcion' => 'required'
            ]);


            //Guardar la paciente

            if ($validate->fails()) {
                $data = [
                    'code' => 400,
                    'status' => 'error',
                    'message' => 'no se ha registrado el paciente.'
                ];
            } else {
                $paciente = new paciente();
                $paciente->nombrepaciente = $params_array['nombrepaciente'];
                $paciente->dui = $params_array['dui'];
                $paciente->telefono = $params_array['telefono'];
                $paciente->descripcion = $params_array['descripcion'];
                $paciente->image = $params_array['image'];
                $paciente->save();

                $data = [
                    'code' => 200,
                    'status' => 'success',
                    'paciente' => $paciente
                ];
            }
        } else {
            $data = [
                'code' => 400,
                'status' => 'error',
                'message' => 'no se han enviado datos de ningun paciente.'
            ];
        }
        //Devolver el resultado
        return response()->json($data, $data['code']);
    }

    public function update($idpaciente, Request $request) {
        //recoger datos por POST
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);


        if (!empty($params_array)) {
            //validar los datos
            $validate = \Validator::make($params_array, [
                        'nombrepaciente' => 'required',
                        'telefono' => 'required'
            ]);


            //quitar lo que no se actualizara
            unset($params_array['idpaciente']);
            unset($params_array['dui']);
            unset($params_array['created_at']);

            //actualizar el registro 
            $paciente = paciente::where('idpaciente', $idpaciente)->update($params_array);
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
                
                \Storage::disk('pacientes')->put($image_name, \File::get($image));
                
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
        $isset=\Storage::disk('pacientes')->exists($filename);
        
        if($isset){        
        //conseguir la imagen 
        $file=\Storage::disk('pacientes')->get($filename);
        
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
