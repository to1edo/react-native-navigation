import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, TouchableOpacity, View } from 'react-native'
import appTheme from '../themes/appTheme'

interface Props extends StackScreenProps<any, any> { }

const Screen2 = ({ navigation }:Props) => {
  return (
    <View style={appTheme.globalMargin}>
        <Text style={appTheme.title}>Screen2</Text>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8} onPress={() => navigation.navigate('Screen1')}>
            <Text>Ir a Screen1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.navigate('Screen3')}>
            <Text>Ir a Screen3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.popToTop()}>
            <Text>Ir a Home</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Screen2