import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globaMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button
          title='Ir Página 2'
          onPress={() => navigation.navigate('Pagina2Screen')}
        />
        <Text>Navegar con argumentos</Text>
        <View style={{flexDirection: 'row', 
        height:100,
        justifyContent:'space-around'}}>
          <TouchableOpacity
            style={[styles.botonGrande, {backgroundColor: '#5856D6'}]}
            onPress={()=> navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro'
            })}
          >
            <Text style={[styles.textBotonGrande]}>
              Pedro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botonGrande,{backgroundColor: '#FF9427'}]}  
            onPress={()=> navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria'
            })}
          >
            <Text style={[styles.textBotonGrande]}>
              Maria
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
