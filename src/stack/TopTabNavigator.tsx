import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Top1 from '../screens/Top1';
import Top2 from '../screens/Top2';
import Top3 from '../screens/Top3';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route})=>({
        tabBarActiveTintColor: '#f79817',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#f79817',
          borderTopWidth: 0
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#f79817'
        },
        tabBarIcon: ({ color }) => {
          let iconName:string =''
          switch(route.name){
            case 'Chat':
              iconName = 'chatbubble-ellipses-outline'
              break
            case 'Reels':
              iconName = 'play-circle-outline'
              break
            case 'Friends':
              iconName = 'people-outline'
              break
          }
          return <Text style={{color}}><Icon name={iconName} size={20} /></Text>
        },
      })}
    >
      <Tab.Screen name="Chat" component={Top1} />
      <Tab.Screen name="Reels" component={Top2} />
      <Tab.Screen name="Friends" component={Top3} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator