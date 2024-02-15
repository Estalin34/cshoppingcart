import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { ERROR_COLOR, PRIMARY_COLOR } from '../comomns/ConstantsColor';
import { stylesGlobal } from '../theme/appytheme';
import { User } from '../navigator/StackNavigator';
import { showSnackBar, verifyExistUser } from '../comomns/AuthValidations';
import { InputComponents } from '../components/InputComponents';
import { ButtonComponents } from '../components/ButtonComponents';
import { BodyComponents } from '../components/BodyComponents';
import { TitleComnponents } from '../components/TitleComnponents';


export interface UserForm{
  username: string;
  password: string;
  hasError: boolean;
}
interface LoginProps{
  users:User[]
}

//interface Props extends StackScreenProps<any,any>{};

export const LogingScreen = ({users}:LoginProps) => {

  //Hook de navegación
 const navigation=useNavigation();

  //Hook - control de los datos en el form
  const[form, setForm]=useState<UserForm>({
    username:'',
    password:'',
    hasError: false,
  });
 

  //const [numero, setNumero] = useState(0);

  //Hook - desencriptar el password
  const [hiddenPassword, setHiddenPassword] = useState(true);

  //Función que cambie el valor del useState (form)
  const handlerChangeText=(name: string, value:string)=>{
    //console.log(name);
    //console.log(value); 
    setForm(prevState=>({
      ...prevState,
      [name]:value,
    }))
  }

  //Funcion que envie los datos del formulario
  const handlerSendInfo=()=>{
  //Validar formulario
  if(hasErrorForm(form) ){ 
    setForm(prevState=>({
      ...prevState,
      hasError:true
      
  }))
  return;  
  }
  setForm(prevState=>({
    ...prevState,
    hasError:false
  }))
  function hasErrorForm(_form: UserForm) {
    throw new Error('Function not implemented.');
  }
    

  // llamar función que verifica si el usuario existe en el arreglo
  const existUser=verifyExistUser(users,form);
  if(!existUser || existUser.password != form.password){
    showSnackBar("Usuario y/o contraseña incorrecta!", ERROR_COLOR);
    return;
  }
  console.log(form);
}

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComnponents title='Iniciar Sesión'/>
        <BodyComponents>
          <Text style={stylesGlobal.textPrincipal}>Bienvenido de nuevo!</Text>
          <Text style={stylesGlobal.textDescription}>Realiza tus compras de manera rápida y segura</Text>
          <View style={stylesGlobal.containerForm}>
            <InputComponents placeholder='Usuario' name={'username'} onChangeText={handlerChangeText} hasError={form.hasError}/>
            <InputComponents 
              placeholder='Contraseña' 
              name={'password'} 
              onChangeText={handlerChangeText} 
              isPassword={hiddenPassword}
              hasIcon={true}
              acctionIcon={()=>setHiddenPassword(!hiddenPassword)}
              hasError={form.hasError}/>
              {/* <TextInput
                placeholder='numero'
                keyboardType='numeric'
                onChangeText={(numero:string)=>setNumero(parseInt(numero))}/> */}
          </View>
          <ButtonComponents title='Iniciar Sesión' onPress={handlerSendInfo}/>

          <TouchableOpacity 
            onPress={()=>navigation.dispatch(CommonActions.navigate({name:'RegisterScreen'}))}>
            <Text style={stylesGlobal.textNavigation}>No tienes una cuenta? Regístrate ahora!</Text>
          </TouchableOpacity>
        </BodyComponents>
    </View>
  )
}


function hasErrorForm(_form: UserForm) {
  throw new Error('Function not implemented.');
}

