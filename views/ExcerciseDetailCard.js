import { View, Text,SafeAreaView,Image,Alert} from 'react-native'
import React, { useState,useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { FitnessItems } from '../Context';

const ExcerciseDetailCard = () => {

  const [index,setIndex]=useState(0);
  const route= useRoute()
  const navigation=useNavigation();
  const data= route.params;
  console.log(data.excercises[index].image)

  const {completed, setCompleted, workout,setWorkout,calories,setCalories,minutes,setMinutes}=useContext(FitnessItems)

  const onRestButtonPressed= ()=>{
    navigation.navigate('RestView'),                      
    setTimeout(()=>{
      console.log(data.excercises.length+":"+index)
      if(index<data.excercises.length-1){
          setIndex(index+1)

      }
      else{
      console.warn('well done')
      }
    } ,2000)

    setCalories(calories+6.5)
    setWorkout(workout+1)
    setCompleted([...completed,data.excercises[index].name]) 
    setMinutes(minutes+1.5)
    console.log(completed)
  }
  
  return (
    <SafeAreaView>
        <Image style={{ width:'100%',height:300,alignSelf:'center',marginTop:30}} source={{uri:data.excercises[index].image}} />
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'black',marginTop:20}}>{data.excercises[index].name}</Text>
        <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold',color:'brown',marginTop:20}}>x {data.excercises[index].sets}</Text>

        <View style={{flex:1,flexDirection:'row',justifyContent:'center',margin:30}}>

              <CustomButton title={'Done'} 
                       color={'green'} textcolor={'white'}
                       onPress={onRestButtonPressed} />
        </View>
    </SafeAreaView>
  )
}

export default ExcerciseDetailCard