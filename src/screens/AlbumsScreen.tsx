import React, { useContext } from 'react'
import { View, Text, Button} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {
  const {logout,authState: {isLoggedIn}} = useContext(AuthContext)
  return (
    <View style={styles.globaMargin}>
        <Text style={styles.title}>
          AlbumsScreen
        </Text>
        {
          isLoggedIn && (
            <Button
              title="Logot"
              onPress={logout}
            />
          )
        }
    </View>
  )
}
