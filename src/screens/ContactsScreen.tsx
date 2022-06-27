import React, { useContext } from 'react'
import { View, Text,Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {
  const { signIn } = useContext(AuthContext)

  return (
    <View style={styles.globaMargin}>
        <Text style={styles.title}>
          ContactsScreen
        </Text>
        <Button
          title="SignIn"
          onPress={signIn}
        />
    </View>
  )
}
