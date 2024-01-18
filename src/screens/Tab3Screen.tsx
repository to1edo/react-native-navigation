import React from 'react'
import { Text, View } from 'react-native'
import appTheme from '../themes/appTheme'

const Tab3Screen = () => {
  return (
    <View style={ {backgroundColor:"#000", flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={appTheme.title}>Tab3 Screen</Text>
    </View>
  )
}

export default Tab3Screen