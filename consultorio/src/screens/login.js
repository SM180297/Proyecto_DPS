import React, { useState } from 'react';
import {View, Text,Component,Container,Form,Item,Input} from 'react-native';

export default function Login({navigation}){
    
    const [user,setuser]=useState('');
    const [userError,setuserError]=usesState('');

    const [contraseña,setconstraseña]=useState('');
    const [contraseñaError,setconstraseñaError]=useState('');

    const[message, setmessage]=useState('');

   const signin =async()=>{
            if(user!="" && contraseña!=""){
               //alert('Sesion inciada.');
               await fetch('http://consultorio.com.devel:8080/api/login',{ 
                   method: 'POST',
                   headers:{
                       'Accept':'application/json',
                       'Content-type':'application/json'
                   },
                   body:JSON.stringify({
                        'user':user,
                        'contraseña':contraseña
                   })
               }).then(res=>res.json())
               .then(resData =>{
                    setmessage(resData.menssage);
               })
            }
    }
    if(user!=""){
        alert(user);
        setuserError('');
    }else{
        setuserError('El usuario esta vacio.');
    }

    if(contraseña!=""){
        alert(contraseña);
        setconstraseñaError('');
    }else{
        setconstraseñaError('La contraseña esta vacia.');
    }

    
    return(
       <Container>
           <View style={{alignItems:'center',margin:20}}>
               <Image source={require('../img/usuario.png')} style={{width:150,height:170}}/>
               <Text style={{marginTop:10, fontSize:20, color:'green'}}>{message}</Text>
           </View>
           <Form style={{paddingLeft:20,paddingRight:20}}>
           <Item style={{marginTop:20}}>
               <Input placeholder = "Usuario" value={user} onChangeText={(user)=>setuser(user)} onChange={()=>setuserError('')}/>
           </Item>
           <Text style={{color:'red',marginLeft:20}}>{userError}</Text>

           <Item style={{marginTop:20}}>
               <Input placeholder = "Contraseña" value={contraseña} onChangeText={(contraseña)=>setconstraseña(contraseña)} onChange={()=>setconstraseñaError('')} secureTextEntry={true}/>
           </Item>
           <Text style={{color:'red',marginLeft:20}}>{contraseñaError}</Text>

           </Form>

       </Container>
    );

}