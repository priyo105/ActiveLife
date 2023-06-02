import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({color,textcolor,title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{width:120,height:40,backgroundColor:color}}>
        <Text style={{color:textcolor,textAlign:'center',padding:10,fontWeight:'bold'}}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton