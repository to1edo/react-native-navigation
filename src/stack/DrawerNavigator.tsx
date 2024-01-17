import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyStack from './MyStack';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=> {

  const { width } = useWindowDimensions()
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerContentStyle: { backgroundColor: '#521945' },
        drawerStyle: { backgroundColor: '#521945', width: width * 0.6}
      }}
    >
      <Drawer.Screen name="Home" component={MyStack} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator