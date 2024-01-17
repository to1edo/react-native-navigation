import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import MyStack from './src/stack/MyStack';
// import DrawerNavigator from './src/stack/DrawerNavigator';
import MenuLateral from './src/stack/MenuLateral';

export default function App() {
  return (
    <NavigationContainer>
      <MenuLateral/>
      {/* <DrawerNavigator/> */}
      {/* <MyStack/> */}
    </NavigationContainer>
  );
}