
import React from 'react';
import HomeScreen from './views/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutView from './views/WorkoutView';
import ExcerciseDetailCard from './views/ExcerciseDetailCard';
import RestView from './views/RestView';
import { FitnessContext } from './Context';
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
    <FitnessContext>    
       <Stack.Navigator>

          <Stack.Screen options={{headerShown: false}}  name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}}  name="WorkoutView" component={WorkoutView} />
          <Stack.Screen options={{headerShown: false}}  name="ExcerciseDetailCard" component={ExcerciseDetailCard} />
          <Stack.Screen options={{headerShown: false}}  name="RestView" component={RestView} />

       </Stack.Navigator>
    </FitnessContext>
      </NavigationContainer>
  );
}

export default App;
