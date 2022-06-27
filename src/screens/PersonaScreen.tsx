import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'


// SE IMPORTA EL TIPADO DE STACK NAVIGATOR Y  SELECIONA EL SCREEN CORRESPONDINETE 
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};

// FORMA RAPIDA DE TIPAR LOS PARAETROS
/* interface RouteParams {
  id:number;
  nombre:string;
} */

export const PersonaScreen = ({navigation, route}: Props) => {

  const { changeUserName } = useContext(AuthContext)
  // const params = route.params as RouteParams;
  const params = route.params
  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre
    })
  }, [])
  useEffect(() => {
      changeUserName(params.nombre);
  }, [])
  
  

  return (
      <View style={styles.globaMargin}>
          <Text style={styles.title}>
            {
              JSON.stringify(params, null, 3)
            }
          </Text>

      </View>
  )
}
