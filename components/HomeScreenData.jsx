import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

export default function HomeScreenData({calories,excercise,minutes}) {
  return (
   <View>
    <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:20}}>
           
           <View>
               <Text style={[styles.boldText,{textAlign:'center'}]}> {excercise} </Text>
               <Text style={styles.text}>Excercise</Text>
           </View>

           <View style={{marginLeft:50}}>
           <Text style={[styles.boldText,{textAlign:'center'}]}> {calories} </Text>
               <Text style={styles.text}>Calories</Text>
           </View>

           <View style={{marginLeft:50}}>
           <Text style={[styles.boldText,{textAlign:'center'}]}> {minutes} </Text>
               <Text style={styles.text}>Time(Min)</Text>
           </View>

    </View>

    <View style={{justifyContent:"center",alignItems:"center"}}>

<Image
  style={{
    width:"85%",
    height:140,
    marginTop:20,
    borderRadius:7,
    resizeMode: 'contain',

  }}

  source={{
    uri:'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1485&q=80'
  }}
  
  />

</View>




    </View>
  )
}

const styles = StyleSheet.create({
    topContainer:{
      backgroundColor:"#6200EE",height:200,padding:10,width:'100%'
    },
  
    text:{
      color:'#fff',
      fontSize:16
    },
  
    boldText:{
      color:'#FFF',
      fontWeight:"bold",
      fontSize:19,
    },
    imageStyle:{
        
    }
  
  })
