
import React from 'react'
import {ScrollView,View,StyleSheet,Image,Text} from 'react-native'


const ExcercisesCard = (excercises) => {
  return (
  <ScrollView>
   <View style={{flexDirection:"row"}}>
             <Image              
              style={styles.imageStyle}
              source={{uri: excercises.excercises.image}} /> 
     
      <View style={{flexDirection:'column'}}>
        <Text style={styles.boldText}>{excercises.excercises.name}</Text> 
        <Text style={styles.text}>X {excercises.excercises.sets}</Text> 
      </View>
       
   </View>
  </ScrollView>
  )
}

export default ExcercisesCard




const styles = StyleSheet.create({

  topContainer:{
    backgroundColor:"#2D2727",height:200,padding:10,width:'100%'
  },

  text:{
    color:'#000',
    paddingLeft:20,
    marginTop:5
  },

  boldText:{
    color:'black',
    fontWeight:"bold",
    fontSize:15,
    marginTop:20,
    paddingLeft:20
  },
  imageStyle:{
      width:100,
      height:100,
      marginTop:20,
      borderRadius:10,
      resizeMode: 'contain',

  }


})