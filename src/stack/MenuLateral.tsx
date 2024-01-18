import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View} from 'react-native';
import BottomTabs from './BottomTabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const MenuLateral = ()=> {

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerStyle: { backgroundColor: '#000'},
        headerTitleStyle: { color: '#000' },
        headerStyle: { backgroundColor: '#000', height: 50, elevation: 0 },
        headerTintColor: '#fff',
      }}
      drawerContent={(props)=> <MenuContent {...props}/>}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />

      {/* <Drawer.Screen name="Home" component={MyStack} /> */}
      <Drawer.Screen name="Settings" component={SettingsScreen}/> 
    </Drawer.Navigator>
  );
}

export default MenuLateral

const MenuContent = ( {navigation}:DrawerContentComponentProps ) => {

  return (
    <DrawerContentScrollView>

      <View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeynseeYUXIzqSmxGXMPegJAfX9VHvnOWFEaMAD2OONw_IMXYkAi87dLEkad-1Dl-nkI&usqp=CAU'
          }}
          style = {{
            width:290,
            height: 50
          }}
        />
      </View>

      <View style={{marginTop: 20, paddingHorizontal: 20, gap: 20, alignItems: 'center'}}>
        <TouchableOpacity style={{flexDirection: 'row', gap: 10}} activeOpacity={0.7} onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={{color: '#f79817'}}><Icon name='home' size={20} /></Text>
          <Text style={{fontSize: 20}}>Ir a Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{flexDirection: 'row', gap: 10}} activeOpacity={0.7} onPress={() => navigation.navigate('Settings')}>
          <Text style={{color: '#f79817'}}><Icon name='settings-outline' size={20} /></Text>
          <Text style={{fontSize: 20}}> Ir a Settings</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}