import { createStackNavigator } from '@react-navigation/stack';
import { LogingScreen } from '../screens/LogingScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import  { useState } from 'react';
import { PRIMARY_COLOR } from '../comomns/ConstantsColor';


//Data de prueba
export interface User{
  id: number,
  username: string,
  password: string
}

const users:User[]=[
  {id:1, username:'estalin', password:'123456'},
  {id:2, username:'leon', password:'12345678'},
]

const Stack = createStackNavigator();

export const StackNavigator=()=> {

  //Hook gestionar los usuarios registrados en el login
  const [usersLogin, setUsersLogin]=useState(users);

  //Función para agregar los nuevos usuarios desde el setUserLogin
  const handlerAddUser=(user: User)=>{
    setUsersLogin([...usersLogin, user])
  }

  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}
        >
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} children={()=><LogingScreen users={usersLogin}/>}/>
      <Stack.Screen name="RegisterScreen" options={{headerShown:false}} children={()=><RegisterScreen usersLogin={usersLogin} setUsersLogin={handlerAddUser}/>} />
    </Stack.Navigator>
  );
}