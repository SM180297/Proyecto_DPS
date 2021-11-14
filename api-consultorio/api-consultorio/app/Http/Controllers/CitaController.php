<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\cita;
use App\Helper\JWTAuth;

class CitaController extends Controller {

    public function __construct() {
        $this->middleware('api.auth', ['except' => ['index', 'show','getCitasbyPaciente','getCitasbyDoctor']]);
    }

    public function index() {
        $citas = cita::all()->load('paciente', 'doctor');

        return response()->json([
                    'code' => 200,
                    'status' => 'success',
                    'citas' => $citas
                        ], 200);
    }

    public function show($idcita) {
        $cita = cita::find($idcita)->load('paciente', 'doctor');

        if (is_object($cita)) {
            $data = ['code' => 200,
                'status' => 'success',
                'citas' => $cita
            ];
        } else {
            $data = [
                'code' => 404,
                'status' => 'error',
                'message' => 'La cita no existe'
            ];
        }
        return response()->json($data, $data['code']);
    }

    public function store(Request $request) {
        //recoger datos por POST
        $json = $request->input('json', null);
        $params = json_decode($json);
        $params_array = json_decode($json, true);

        if (!empty($params_array)) {
            //conseguir usuario identificado 
            $user = $this->getIdentity($request);

            //validar los datos
            $validate = \Validator::make($params_array, [
                        'consultorio' => 'required'
            ]);
            if ($validate->fails()) {
                $data = [
                    'code' => 400,
                    'status' => 'error',
                    'message' => 'no se han guardado los datos,faltan datos.'
                ];
            }
            //guardar la cita
            $cita = new cita();
            $cita->iduser = $user->sub;
            $cita->idpaciente = $params->idpaciente;
            $cita->iddoctor = $params->iddoctor;
            $cita->consultorio = $params->consultorio;
            $cita->hora_cita = $params->hora_cita;
            $cita->save();

            $data = [
                'code' => 200,
                'status' => 'success',
                'cita' => $cita
            ];
        } else {
            $data = [
                'code' => 400,
                'status' => 'error',
                'message' => 'no se han enviado datos correctamente.'
            ];
        }

        //devolver la respuesta
        return response()->json($data, $data['code']);
    }

    public function update($idcita, Request $request) {
        //Recoger datos por POST
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        $data = array(
            'code' => 400,
            'status' => 'error',
            'message' => 'No se enviaron datos correctamente.'
        );

        if (!empty($params_array)) {
            //Validar los datos
            $validate = \Validator::make($params_array, [
                        'consultorio' => 'required',
                        'hora_cita' => 'required'
            ]);

            if ($validate->fails()) {
                $data['errors'] = $validate->errors();
                return response()->json($data, $data['code']);
            }
            //Eliminar lo que no se requiere actualizar
            unset($params_array['idcita']);
            unset($params_array['iddoctor']);
            unset($params_array['idpaciente']);
            unset($params_array['created_at']);

            //conseguir usuario identificado
            $user = $this->getIdentity($request);

            //Bucar registro de cita
            $cita = cita::where('idcita', $idcita)->where('iduser', $user->sub)->first();
            if (!empty($cita) && is_object($cita)) {
                //actualizar la cita
                $cita = cita::where('idcita', $idcita)->where('iduser', $user->sub)->update($params_array);

                $data = array(
                    'code' => 200,
                    'status' => 'success',
                    'cita' => $params_array
                );
            }
        } else {
            $data = array(
                'code' => 400,
                'status' => 'error',
                'message' => 'No se enviaron datos correctamente.'
            );
        }
        return response()->json($data, $data['code']);
    }

    public function destroy($idcita, Request $request) {
        //conseguir usuario identificado
        $user = $this->getIdentity($request);

        //conseguir la cita creada
        $cita = cita::where('idcita', $idcita)->where('iduser', $user->sub)->first();
        if (!empty($cita)) {
            //Borrarlo 
            $cita->delete();

            //Devolver
            $data = [
                'code' => 200,
                'status' => 'success',
                'cita' => $cita
            ];
        } else {
            $data = [
                'code' => 400,
                'status' => 'error',
                'message' => 'la cita no existe'
            ];
        }
        return response()->json($data, $data['code']);
    }

    private function getIdentity(Request $request) {

        $jwtauth = new \App\Helpers\JwtAuth();
        $token = $request->header('Authorization', null);
        $user = $jwtauth->checkToken($token, true);

        return $user;
    }
    public function getCitasbyPaciente($idcita){
        $citas=cita::where('idpaciente',$idcita)->get();
        
        return response()->json([
            'status'=>'success',
            'citas'=>$citas
        ],200);
    }
    public function getCitasbyDoctor($idcita){
        $citas=cita::where('iddoctor',$idcita)->get();
        
        return response()->json([
            'status'=>'success',
            'citas'=>$citas
        ],200);
    }
}
