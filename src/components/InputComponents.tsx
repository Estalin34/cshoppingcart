import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { INPUT_COLOR, PRIMARY_COLOR,} from '../comomns/ConstantsColor'
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputProps{
    placeholder?:string;
    name:string;
    isPassword?: boolean;
    hasIcon?: boolean;
    hasError?: boolean;
    //metodo que captura el valor del input
    onChangeText:(name: string, value: string) => void;
    acctionIcon?:() => void;
}
export const InputComponents = ({placeholder, name, onChangeText, isPassword=false, hasIcon=false, acctionIcon=()=>{},hasError}:InputProps) => {
  return (
    <View>
        {
            (hasIcon)
            ?<Icon style={style.incon}  name="visibility" size={20} color={PRIMARY_COLOR} onPress={acctionIcon}   />
            :null
        }
        
    <TextInput 
    placeholder={placeholder}
    keyboardType={'default'}
    style={(hasError)
    ?{...style.inputText,...style.error}
    :{...style.inputText}}
    onChangeText={(value: string) =>onChangeText(name, value)}
    secureTextEntry={isPassword}
    />  
   
   {
    (hasError)
    ?<Text style={style.errorText}>Este campo es obligatorio</Text>
    :null

   }
    </View>
    
  )
}

const style= StyleSheet.create({
    
    inputText:{
        backgroundColor:INPUT_COLOR,
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:20,
        marginTop:10,

    },
    incon:{
         
         fontSize:20,
         position:'absolute',
         right:20,
         top:20,
         zIndex:1,
    }, 
    error:{
        borderColor:'red',
        borderStyle:'solid',
        borderWidth:2,
        marginTop:10,
    },
    errorText:{
        color:'red',
        fontSize:15,
        fontWeight:"bold",
    }
})