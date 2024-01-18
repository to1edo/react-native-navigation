import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyStack from './MyStack';
import Tab1Screen from '../screens/Tab1Screen';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator

    screenOptions={ ({ route })=>{
      return {
        cardStyle: { backgroundColor: '#000' },
        headerStyle: { backgroundColor: '#f79817', height: 0 , elevation: 0 },
        animationEnabled: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#f79817',
          borderTopWidth: 0
        },
        tabBarActiveTintColor: '#f79817',
        tabBarIcon: ({ color, size }) => {
          let iconName:string = ''
          switch(route.name){
            case 'Tab1':
              iconName = 'image-outline'
              break
            case 'TopTabs':
              iconName = 'repeat-outline'
              break
            case 'Stack':
              iconName = 'layers-outline'
              break
          }
          return <Text style={{color}}><Icon name={iconName} size={20} /></Text>
        },
        tabBarLabelStyle: {
          fontSize: 14
        }
      }
    }}
    >
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="TopTabs" component={TopTabNavigator} />
      <Tab.Screen name="Stack" component={MyStack} />
    </Tab.Navigator>
  );
}

export default BottomTabs