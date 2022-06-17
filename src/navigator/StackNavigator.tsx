import React from 'react'; // Importante que sin este no funciona
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
//import { StatusBar } from 'react-native';

/**
 * Tipado de las rutas 
 * se recomeinta type ya que no va extender
 * tambien utilizar undefine
 */
export type RootStackParams = {
  Pagina1Screen:undefined,
  Pagina2Screen:undefined,
  Pagina3Screen:undefined,
  PersonaScreen:{id: number, nombre:string},
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = ()  => {
  return (
    <>

 {/*    <StatusBar
    backgroundColor={'transparent'} 
    barStyle={'dark-content'}/> */}
      <Stack.Navigator
      // initialRouteName='Pagina2Screen'

          screenOptions={{
            cardStyle: {
              backgroundColor: 'white'
            },
            headerStyle: {
              elevation:2,
              shadowColor: 'gray'
            },
            // title: 'paginas' opciones globales
          }}
        >
        <Stack.Screen name="Pagina1Screen" options={{title:'Página 1'}} component={Pagina1Screen} />
        <Stack.Screen name="Pagina2Screen" options={{title:'Página 2'}} component={Pagina2Screen} />
        <Stack.Screen name="Pagina3Screen" options={{title:'Página 3'}} component={Pagina3Screen} />
        <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
      </Stack.Navigator>
    </>
  );
}