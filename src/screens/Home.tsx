import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import appTheme from '../themes/appTheme'

interface Props extends StackScreenProps<any, any> { }

const Home = ({ navigation }:Props) => {
  return (
    <View style={appTheme.globalMargin}>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.navigate('Screen1')}>
            <Text>Ir a Screen1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8} onPress={() => navigation.navigate('Screen2')}>
            <Text>Ir a Screen2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={appTheme.botonGrande} activeOpacity={0.8}  onPress={() => navigation.navigate('Screen3')}>
            <Text>Ir a Screen3</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home