import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { BODY_COLOR } from '../comomns/ConstantsColor';

export const BodyComponents = ( props:any) => {
    const { height}=useWindowDimensions();

  return (
    <View style={{height:height*0.88,
    ...styles.container}}>
        {props.children}
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:BODY_COLOR,
        borderTopRightRadius:10,
        paddingHorizontal:10,
        paddingVertical:12,
        
    }
})