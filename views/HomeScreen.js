import {Button, StyleSheet, Text, View,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import HomeScreenData from '../components/HomeScreenData'
import WorkoutCard from '../components/WorkoutCard'

const HomeScreen = ({navigation}) => {
  return (
    <View>
                   <ScrollView style={{marginTop:5}}>

                                <View style={styles.topContainer}>
                                    <Text style={styles.boldText}>ActiveLife</Text> 

                                    <HomeScreenData  calories={10} excercise={1} minutes={3}   />
                                </View> 
                          <View style={{marginTop:40}}>        
                           <WorkoutCard navigation={navigation} />
                           </View>
            </ScrollView>
      
    </View>
  )
}

export default HomeScreen

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
  }


})