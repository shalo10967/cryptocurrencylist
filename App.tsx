import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './src/types';
import {HomeScreen} from './src/screens/Home/HomeScreen';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Crypto List'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Crypto Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
