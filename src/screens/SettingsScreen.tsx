import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any,any>{};

export const SettingsScreen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown:true
  //   })
  // }, [])
  const insets  =useSafeAreaInsets()
  
  return (
    <View style={{...styles.globaMargin,marginTop: insets.top+10}}>
        <Text style={styles.title}>
            SettingsScreen
        </Text>
    </View>
  )
}
