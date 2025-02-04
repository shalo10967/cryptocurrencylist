import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailScreen, HomeScreen} from '../src/screens';
import {RootStackParamList} from '../src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

describe('App Navigation', () => {
  test('renders home screen correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Crypto List'}}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    expect(getByText('Crypto List')).toBeTruthy();
  });

  test('renders detail screen correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{title: 'Crypto Detail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>,
    );

    expect(getByText('Crypto Detail')).toBeTruthy();
  });
});
