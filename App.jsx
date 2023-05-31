
import React from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './views/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WorkoutView from './views/WorkoutView';

const Stack = createNativeStackNavigator();



function App() {
  return (
      <NavigationContainer>
       <Stack.Navigator>

          <Stack.Screen options={{headerShown: false}}  name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="WorkoutView" component={WorkoutView} />

       </Stack.Navigator>
      </NavigationContainer>
  );
}




export default App;
