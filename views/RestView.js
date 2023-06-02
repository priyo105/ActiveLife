import { View, Text,SafeAreaView,Image } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const RestView = () => {

  let timer=0;
  const [timeLeft,setTimeOut]=useState(3);
  const navigation=useNavigation()

  const setTimer=()=>{
    setTimeout(()=>{
        setTimeOut(timeLeft-1)}, 1000);
        if(timeLeft==0){
            navigation.goBack()
        }
  }

  useEffect( ()=>{
      setTimer();
  })

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center', backgroundColor:'white'}}> 
        <Image
            style={{
                     width:"100%",
                     height:140,
                     marginTop:20,
                     borderRadius:7,
                     resizeMode: 'contain',
                  }}
             source={require('../assets/break.png')}                          
          />

        <Text style={{textAlign:'center',fontSize:50,marginTop:30,fontWeight:'bold',color:'black'}}>{timeLeft}</Text> 
    </SafeAreaView>
  )
}

export default RestView