import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import MyStack from './MyStack';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View} from 'react-native';

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
      <Drawer.Screen name="Home" component={MyStack} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
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
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pornhub-logo.svg/800px-Pornhub-logo.svg.png'
          }}
          style = {{
            width:290,
            height: 50
          }}
        />
      </View>

      <View style={{marginTop: 20, paddingHorizontal: 20, gap: 20, alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 20}}>Ir a Home</Text>
        </TouchableOpacity>
        <TouchableOpacity  activeOpacity={0.7} onPress={() => navigation.navigate('Settings')}>
          <Text style={{fontSize: 20}}> Ir a Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}