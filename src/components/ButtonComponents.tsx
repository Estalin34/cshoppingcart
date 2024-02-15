import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PRIMARY_COLOR } from '../comomns/ConstantsColor'


interface ButtonProps{
    title:string
    
    onPress: () => void
}
export const ButtonComponents = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
        
        <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

     button:{
        backgroundColor: PRIMARY_COLOR,
        textAlign:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        marginTop:30,
        color: 'white'
      },
    
})
