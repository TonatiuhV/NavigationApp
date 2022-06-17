import 'react-native-gesture-handler';

import React from 'react'
//Actaizar de acuerdo a la documentacion
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      
      {/* <StackNavigator/> */}
      <MenuLateralBasico/>
    </NavigationContainer>
  )
}

export default App;
