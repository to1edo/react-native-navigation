import React from 'react'
import { Text, View } from 'react-native'
import appTheme from '../themes/appTheme'

const SettingsScreen = () => {
  return (
    <View style={ {backgroundColor:"#000", flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={appTheme.title}>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen