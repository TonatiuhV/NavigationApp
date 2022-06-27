import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'
import { colores, styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any,any>{};

export const SettingsScreen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown:true
  //   })
  // }, [])
  const insets  =useSafeAreaInsets()
  const { authState } = useContext(AuthContext)



  return (
    <View style={{
      ...styles.globaMargin,
      marginTop: insets.top+10}}>
        <Text style={styles.title}>
            SettingsScreen
        </Text>
        <Text>
          {JSON.stringify(authState, null,4)}
        </Text>
        {
          authState.favoriteIcon && (
          <Icon
          
            name={authState.favoriteIcon}
            size={150}
            color={colores.primary}
          />
          )
        }
    </View>
  )
}
