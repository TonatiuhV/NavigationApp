

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator=() => {


  const {top} = useSafeAreaInsets()
  return (
    <Tab.Navigator
      style={{
        paddingTop:top
      }}
      
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon:true,
        tabBarIndicatorStyle:{
         backgroundColor:colores.primary 
        },
        tabBarActiveTintColor:colores.primary,
        tabBarLabelStyle: { 
          fontSize: 12
        },
        
        tabBarStyle: { 
          // backgroundColor: 'powderblue',
          borderBottomWidth:0,
          elevation:0
        },

        tabBarIcon: ({color, focused}) => {
            
          let iconName:String = '';
          switch(route.name){
            case 'ChatScreen':
              iconName= 'CT'
              break;
            case 'ContactsScreen':
              iconName= 'C'
              break;
            case 'AlbumsScreen':
              iconName= 'A'
              break;
          }
          return <Text style={{color}}>{iconName}</Text>
        }  
      })}

    >
      <Tab.Screen name="ChatScreen" options={{title:'Chat'}} component={ChatScreen}/>
      <Tab.Screen name="ContactsScreen" options={{title:'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title:'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}