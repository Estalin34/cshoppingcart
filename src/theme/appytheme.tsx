import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../comomns/ConstantsColor";


export const stylesGlobal=StyleSheet.create({
    textPrincipal:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        marginVertical:1,
        marginHorizontal:1,
    padding:10,       

    },
    textDescription:{
        fontSize:16,
        color:'black',
        textAlign:'center',
        marginVertical:15,
        marginHorizontal:15,
        padding:1,
            },
    containerForm:{
        marginVertical:2,
        marginHorizontal:2,
        padding:1,
        backgroundColor: 'white',
        borderRadius:10,
        
    },
    textNavigation:{
    marginTop:20,
    fontSize:15,
    color:PRIMARY_COLOR,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:1,
    marginHorizontal:1,
    padding:1,
    
        }
})