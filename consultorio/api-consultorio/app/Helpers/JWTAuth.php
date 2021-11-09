<?php

namespace App\Helpers;

use Firebase\JWT\JWT;
use IIlluminate\Support\Facades\DB;
use App\User;

class JwtAuth {

    public $key;

    public function __construct() {
        $this->key = 'esto es una clave super sercreta-06101398';
    }

    public function signup($nombre, $contraseña, $getToken = null) {

        //Buscar si existe el usuario con sus credenciales
        $user = User::where([
                    'nombre' => $nombre,
                    'contraseña' => $contraseña
                ])->first();

        //Comprobar si son correctas
        $signup = false;
        if (is_object($user)) {
            $signup = true;
        }
        //Generar el token con los datos del usuario identificado
        if ($signup) {
            $token = array(
                'sub' => $user->iduser,
                'nombre' => $user->nombre,
                'iat' => time(),
                'exp' => time() + (7 * 24 * 60 * 60)
            );
            $jwt = JWT::encode($token, $this->key, 'HS256');
            $decode = JWT::decode($jwt, $this->key, ['HS256']);
            //Devolver los datos decodificados o el token, en funcion de un parametro 

            if (is_Null($getToken)) {
                $data = $jwt;
            } else {
                $data = $decode;
            }
        } else {
            $data = array(
                'status' => 'error',
                'message' => 'login incorrecto.'
            );
        }
        return $data;
    }
        public function checkToken($jwt,$getidentity=false){
            $auth=false;
            
            try{
                $jwt= str_replace('"','',$jwt);
            $decoded= JWT::DECODE($jwt, $this->key,['HS256']);
            } catch (\UnexpectedValueException $e){
                $auth=false;
            }catch(\DomainException $e){
                $auth=false;
            }
            if(!empty($decoded)&& is_object($decoded)&& isset($decoded->sub)){
                $auth=true;
            }else{
                $auth=false;
            }
            if($getidentity){
                return $decoded;
            }
                return $auth;
        }

}
