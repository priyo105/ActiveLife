import { View, Text ,Image,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import FitnessData from '../data/FitnessData'

const WorkoutCard = () => {
  return (
    <View >
    <ScrollView >


    {
        FitnessData.map(data=>
        <View style={{height:140,width:'90%',marginTop:20,marginLeft:20,justifyContent:"center"}}> 
 
          <TouchableOpacity>
            <Image
            style={{
                width:"100%",
                height:140,
                marginTop:20,
                borderRadius:10,
                resizeMode: 'contain',

            }}

            source={{
                uri: data.image
            }}
            
            />

            <Text style={{fontWeight:"bold",position:"absolute",color:"white",top:30,left:10,fontFamily:"monospace"}} >{data.name} </Text>
            </TouchableOpacity>
        </View>)
      }


      
    </ScrollView>

    </View>
  )
}

export default WorkoutCard