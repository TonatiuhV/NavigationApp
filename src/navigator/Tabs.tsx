import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs =() => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          elevation:0
        }
        
      }}
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
    >
      <Tab.Screen name="Tab1Screen" options={{tabBarLabel: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{tabBarLabel: 'Tab2'}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{headerShown:false, tabBarLabel: 'Tab3'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}