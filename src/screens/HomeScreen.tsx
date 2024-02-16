import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { TitleComnponents } from '../components/TitleComnponents'
import { BodyComponents } from '../components/BodyComponents'
import { CardProducts } from './HomeScreen/components/CardProducts'
import { ButtonComponents } from '../components/ButtonComponents'


export interface Product{
    
    id: number,
    name: string,
    price: number,
    stock: number,
    pathImage: string,
}
const initialCart:Product[]=[];

console.log('boton clickeado');
const product=[
    {id: 1,name: 'Iphone',price: 100,stock: 10,pathImage:'https://i.blogs.es/316a53/iphone-15-iphone-15-plus-2/1200_800.jpeg'},
    {id: 2,name: 'Samsung',price: 100,stock: 10,pathImage:'https://i.blogs.es/38366d/img_2257/1200_800.jpeg'},
    {id: 3,name: 'huawei',price: 100,stock: 10,pathImage:'https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/05/IMG_7621-scaled.jpeg'},
    {id: 4,name: 'samsung',price: 100,stock: 10,pathImage:'https://i.blogs.es/38366d/img_2257/1200_800.jpeg'},
    {id: 5,name: 'Iphone',price: 100,stock: 10,pathImage:'https://i.blogs.es/316a53/iphone-15-iphone-15-plus-2/1200_800.jpeg'},
    {id: 6,name: 'huawei',price: 100,stock: 10,pathImage:'https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/05/IMG_7621-scaled.jpeg'},
    {id: 7,name: 'samsung',price: 100,stock: 10,pathImage:'https://i.blogs.es/38366d/img_2257/1200_800.jpeg'},
    
]

export const HomeScreen = () => {

  return (
    <View>
        <TitleComnponents title="Productos"/>
        <BodyComponents>
            <FlatList 
            keyExtractor={item => item.id.toString()}
            data={product}
            renderItem={({item})=> <CardProducts Product={item}/>}
            />
            <ButtonComponents 
            title="Carrito"
            onPress={()=>{}}/>
        </BodyComponents>
    </View>
  )
}
