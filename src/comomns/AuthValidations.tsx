import Snackbar from "react-native-snackbar";
import { User } from "../navigator/StackNavigator";
import { LoginFrom } from '../screens/LogingScreen';
import { RegisterForm } from "../screens/RegisterScreen";


export const hasErrorFormLogin=(form:LoginFrom)=>{
    return form.username === '' || form.password === ''
}
export const hasErrorFormRegister=(form:RegisterForm)=>{
  return form.email=== '' || form.password === '' || form.username === ''
}

// funcionn pra verificar si el usuario existe
export const verifyEistUser=(user :User[], form:LoginFrom)=>{
    return user.filter( user => user.username === form.username && user.password === form.password)[0]
}
//Función para que el snackbar sea reutilizable
export const showSnackBar =(message: string, background: string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:background,
        textColor:'white'
    });
}

//Función para generar los ids de los nuevos usuarios
export const getIdNewUser=(users: User[])=>{
    const getIdUSer=users.map(user=>user.id);
    return Math.max(...getIdUSer)+1;
}
