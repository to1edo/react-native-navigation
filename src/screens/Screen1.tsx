import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import appTheme from '../themes/appTheme'
import { StackParams } from '../stack/MyStack'

interface Props extends StackScreenProps<StackParams, 'Screen1'> { }

const Screen1 = ({ navigation, route }:Props) => {

  const params = route.params
  console.log(params)

  return (
    <View style={appTheme.globalMargin}>
        <Text style={appTheme.title}>Screen1</Text>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8} onPress={() => navigation.navigate('Screen2', {origin: 'Screen1'})}>
            <Text>Ir a Screen2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.navigate('Screen3',  {origin: 'Screen1'})}>
            <Text>Ir a Screen3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.popToTop()}>
            <Text>Ir a Home</Text>
        </TouchableOpacity>

    </View>
  )
}

export default Screen1