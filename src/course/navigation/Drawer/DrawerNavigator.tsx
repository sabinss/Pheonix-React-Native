import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer1 from './Drawer1';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Drawer1" component={Drawer1} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
