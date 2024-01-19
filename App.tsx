import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import MyStack from './src/stack/MyStack';
// import DrawerNavigator from './src/stack/DrawerNavigator';
import MenuLateral from './src/stack/MenuLateral';
import { AppProvider } from './src/context';

export default function App() {
  return (

    <NavigationContainer>
      <AppProvider>
        <MenuLateral/>
        {/* <DrawerNavigator/> */}
        {/* <MyStack/> */}
      </AppProvider>
    </NavigationContainer>
  );
}