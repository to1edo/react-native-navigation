import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import appTheme from '../themes/appTheme'
import { AppContext } from '../context'

const SettingsScreen = () => {

  const {state, onLogin, onLogout} = useContext(AppContext)

  return (
    <View style={ {backgroundColor:"#000", flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={appTheme.title}>SettingsScreen</Text>

        <Text>{ JSON.stringify(state, null, 2) }</Text>

        <TouchableOpacity onPress={() => state.isLoggedIn ? onLogout() : onLogin()}  style={{ marginTop: 20 , ...appTheme.botonGrande}} activeOpacity={0.8}>
          {state.isLoggedIn ? <Text>Logout</Text> : <Text>Login</Text>}
        </TouchableOpacity>

    </View>
  )
}

export default SettingsScreen