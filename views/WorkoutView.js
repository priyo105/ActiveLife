import { ScrollView,SafeAreaView, View, Text,Image,StyleSheet,Button } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import ExcercisesCard from '../components/ExcercisesListCard'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
export default function WorkoutView() {
    
  const route= useRoute()
  const data= route.params.data;
  const navigation=useNavigation()
  console.log(data) // getting data from previous screen 

  return (
    <View>

        <ScrollView style={{marginBottom:40}}>
            <Text style={styles.boldText}>{data.name}</Text>
            <Image
                style={styles.imageStyle}
                source={{uri: data.image}} />

            {
                data.excersises.map(exc=>{
                    return (
                        <View>
                            <ExcercisesCard excercises={exc} />
                        </View>
                          )
                })
            }
        </ScrollView>

        {/* Floating Button */}
        <View style={{ position:'absolute',bottom:0,left:0,bottom:10,width:'100%'}}>
            <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',backgroundColor:'#f5f5f5',height:60}}>
            <CustomButton 
               color={'#260a0a'} 
               textcolor={'white'}
               title={'Start'}
               onPress={()=>{navigation.navigate('ExcerciseDetailCard',{
                excercises:data.excersises
               })}} />
            </View>
        </View>

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
      color:'black',
      fontWeight:"bold",
      fontSize:23,
      marginTop:10,
      marginLeft:10
    },
    imageStyle:{
        width:"100%",
        height:140,
        marginTop:5,
    
    }
  
  
  })