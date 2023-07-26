import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Main from './Main';
import {Splash} from './Splash';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

export const AppNavigator = (): JSX.Element => {
  return (
    // this is our root navigation container
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
