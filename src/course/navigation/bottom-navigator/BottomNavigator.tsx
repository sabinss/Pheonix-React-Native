import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen3 from './Screen3';
import Screen2 from './Screen2';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarIcon: () => {
            return <Entypo name="home" size={20} />;
          },
        }}
      />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
