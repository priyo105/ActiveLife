import { View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({color,textcolor}) => {
  return (
    <View style={{width:120,height:40,backgroundColor:color}}>
      <Text style={{color:textcolor,textAlign:'center',padding:6}}>Start</Text>
    </View>
  )
}

export default CustomButton