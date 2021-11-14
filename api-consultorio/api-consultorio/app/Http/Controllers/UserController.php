<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;

class UserController extends Controller {

    public function pruebas(Request $request) {
        return "accion de pruebas de USER-CONTROLLER ";
    }

    public function registro(Request $request) {
        //Recoger datos del usuario por post

        $json = $request->input('json', null);

        $params = json_decode($json); //objeto
        $params_aray = json_decode($json, true);


        if (!empty($params) && ($params_aray)) {
            //Limpiar datos

            $params_aray = array_map('trim', $params_aray);

            //validar datos
            $validate = \Validator::make($params_aray, [
                        'nombre' => 'required|alpha|unique:users', //comprobar si el usuario existe
                        'contraseña' => 'required',
                        'rol' => 'required'
            ]);

            if ($validate->fails()) {
                //validacion fallada
                $data = array(
                    'status' => 'error',
                    'code' => 404,
                    'message' => 'El usuario no se creo correctamente',
                    'errors' => $validate->errors()
                );
            } else {
                //Validacion pasada
                //cifrar la contraseña

                $pwd = hash('sha256', $params->contraseña);

                //crear el usuario

                $user = new User();
                $user->nombre = $params_aray['nombre'];
                $user->contraseña = $pwd;
                $user->rol = $params_aray['rol'];

                //Guardar el usuario
                $user->save();

                $data = array(
                    'status' => 'success',
                    'code' => 200,
                    'message' => 'El usuario  se creo correctamente',
                    'user' => $user
                );
            }
        } else {
            $data = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El usuario no se creo correctamente',
            );
        }
        return response()->json($data, $data['code']);
    }

    public function login(Request $request) {

        $jwtAuth = new \JWTAuth;

        //Recibir el post

        $json = $request->input('json', null);
        $params = json_decode($json);
        $params_array = json_decode($json, true);

        //Validar esos datos

        $validate = \Validator::make($params_array, [
                    'nombre' => 'required|alpha',
                    'contraseña' => 'required'
        ]);

        if ($validate->fails()) {
            //validacion fallada
            $signup = array(
                'status' => 'error',
                'code' => 404,
                'message' => 'El usuario no se ha podido identificar',
                'errors' => $validate->errors()
            );
        } else {

            //cifrar la contraseña

            $pwd = hash('sha256', $params->contraseña);

            //devolver token o datos

            $signup = $jwtAuth->signup($params->nombre, $pwd);

            if (!empty($params->getToken)) {
                $signup = $jwtAuth->signup($params->nombre, $pwd, true);
            }
        }

        return response()->json($signup, 200);
    }

    public function update(Request $request) {

        //Comprobar que el usuario este identificado
        $token = $request->header('Authorization');
        $jwtAuth = new \App\Helpers\JwtAuth();
        $checkToken = $jwtAuth->checkToken($token);

        //Recoger datos por POST 
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        if ($checkToken && !empty($params_array)) {
            //Actualizar ususario
            //Sacar usuario identificado
            $user = $jwtAuth->checkToken($token, true);

            //Validar datos

            $validate = \Validator::make($params_array, [
                        'nombre' => 'required|alpha|unique:users' . $user->sub //comprobar si el usuario existe
            ]);

            //Quitar los datos que no quiero 

            unset($params_array['iduser']);
            unset($params_array['rol']);
            unset($params_array['contraseña']);
            unset($params_array['created_at']);
            unset($params_array['remember_token']);
            //actualizar los datos  en bd

            $user_update = User::where('iduser', $user->sub)->update($params_array);

            //Devolver array con resultado

            $data = array(
                'code' => 200,
                'status' => 'success',
                'message' => $user,
                'changes' => $params_array
            );
        } else {
            $data = array(
                'code' => 400,
                'status' => 'error',
                'message' => 'El usuario no esta identificado.'
            );
        }
        return response()->json($data, $data['code']);
    }
    
    public function upload(Request $request){
        
        //Recoger datos de la peticion
        
       $image=$request->file('file0'); 
       
       //Validacion de imagen 
       
       $Validate=\Validator::make($request->all(),[
           'file0'=>'requiered|image|mimes:jpg,jpeg,png,gif'
       ]); 
       
        //guardar imagen
       
       if(!$image && $Validate->fails()){
         $data=array(
            'code' => 400,
            'status' => 'error',
            'message' => 'Error al subir imagen'
              );
       }else{
             $image_name=time().$image->getClientOriginalName();
           \Storage::disk('pacientes')->put($image_name,\File::get($image));
           
           $data=array(
               'code'=>200,
               'status'=>'success',
               'image'=>$image_name
           );
       }
        return response()->json($data,$data['code']);
       
    }

    public function getImage($filename){
        
        $isset=\Storage::disk('pacientes')->exists($filename);
        if($isset){
            $file=\Storage::disk('pacientes')->get($filename);
            return new Response($file,200);
        }else{
            $data=array(
            'code' => 404,
            'status' => 'error',
            'message' => 'Error la imagen no existe.'
              );
             return response()->json($data,$data['code']);
        }
       
    }
    
    public function detail($iduser){
        $user= User::find($iduser);
        
        if(is_object($user)){
             $data=array(
               'code'=>200,
               'status'=>'success',
               'user'=>$user
           );
        }else{
            $data=array(
            'code' => 400,
            'status' => 'error',
            'message' => 'Error el usuario no fue encontrado.'
              );
        }
         return response()->json($data,$data['code']);
    }
}
