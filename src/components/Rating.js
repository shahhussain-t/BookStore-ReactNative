import { Text, View,Image } from 'react-native'
import React from 'react'

const Rating = ({num}) => {
    const rating=[1,2,3,4]
  return (
    <View style={{
        flexDirection: 'row',
        alignItems:'center'
    }}>
        
         <Image  source={require('../../assets/images/star.png')} />
         <Image  source={require('../../assets/images/star.png')} /> 
         <Image  source={require('../../assets/images/star.png')} /> 
         <Image  source={require('../../assets/images/star.png')} />
        <Image source={require('../../assets/images/starempty.png')} />

        <Text style={{
                color:'#B2B2B2',
                marginHorizontal:4

        }}>{num}</Text>
    </View>

  )
}

export default Rating

