import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import appTheme from '../themes/appTheme'

interface Props extends StackScreenProps<any, any> { }

const Screen3 = ({ navigation }:Props) => {
  return (
    <View style={appTheme.globalMargin}>
        <Text style={appTheme.title}>Screen3</Text>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8} onPress={() => navigation.navigate('Screen1',{ msg: 'Hola mundo de nuevo' })}>
            <Text>Ir a Screen1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.navigate('Screen2')}>
            <Text>Ir a Screen2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.popToTop()}>
            <Text>Ir a Home</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Screen3