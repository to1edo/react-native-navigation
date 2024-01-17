import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Home from '../screens/Home';

export type StackParams = {
  Home: { origin: string };
  Screen1: { origin: string };
  Screen2: { origin: string };
  Screen3: { origin: string };
}

const Stack = createStackNavigator<StackParams>();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: '#000' },
        headerStyle: { backgroundColor: '#f79817', height: 0 , elevation: 0 },
        animationEnabled: false
      }}
    >
      <Stack.Screen name="House" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}