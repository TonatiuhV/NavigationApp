
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, NativeEventEmitter, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = () => {
  const navigator = useNavigation()
  return (
    <View style={styles.globaMargin}>
        <Text>Pagina2Screen</Text>
        <Button
        
          title='Ir pagína 3'
          onPress={ () => navigator.navigate("Pagina3Screen")} 
        />
    </View>
  )
}
