import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

interface Props extends DrawerScreenProps<any,any>{};

export const SettingsScreen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown:true
  //   })
  // }, [])
  
  return (
    <View>
        <Text>
            SettingsScreen
        </Text>
    </View>
  )
}
