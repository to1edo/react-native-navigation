import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import appTheme from '../themes/appTheme'

const Tab1Screen = () => {
  return (
    <View style={ {backgroundColor:"#000", flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={appTheme.title}>Tab1 Screen</Text>
        <Text>
          <Icon name="archive-outline" size={30} color="#f79817" />
          <Icon name="bicycle-outline" size={30} color="#f79817" />
        </Text>
          
    </View>
  )
}

export default Tab1Screen