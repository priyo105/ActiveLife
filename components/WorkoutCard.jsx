import {Button, View, Text ,Image,ScrollView, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import FitnessData from '../data/FitnessData'
import { useNavigation } from '@react-navigation/native';


const RenderFitnessCards= ()=>{
  const navigation = useNavigation();

  return (
        <View>  
            {
              FitnessData.map(data=>
              <View style={{height:140,width:'90%',marginTop:20,marginLeft:20,justifyContent:"center"}}> 

                <TouchableOpacity onPress={()=>{
                  navigation.navigate("WorkoutView")
          }}>
                  <Image
                  style={styles.imageStyle}
                  source={{
                      uri: data.image
                  }}/>
                  <Text style={{fontWeight:"bold",position:"absolute",color:"white",top:30,left:10,fontFamily:"monospace"}} >{data.name} </Text>
                  </TouchableOpacity>
              </View>)
            }
          </View>
  )

}


const WorkoutCard = (navigation) => {
  return (
    <View >
    <ScrollView >

       <RenderFitnessCards />

    </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

    topContainer:{
      backgroundColor:"#2D2727",height:200,padding:10,width:'100%'
    },
  
    text:{
      color:'#fff'
    },
  
    boldText:{
      color:'#FFF',
      fontWeight:"bold",
      fontSize:19
    },
    imageStyle:{
        width:"100%",
        height:140,
        marginTop:20,
        borderRadius:10,
        resizeMode: 'contain',

    }
  
  
  })

export default WorkoutCard