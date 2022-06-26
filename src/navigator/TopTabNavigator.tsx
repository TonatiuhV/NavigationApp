

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

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
            
          let iconName:string = '';
          switch(route.name){
            case 'ChatScreen':
              iconName= 'chatbubbles-outline'
              break;
            case 'ContactsScreen':
              iconName= 'people-circle-outline'
              break;
            case 'AlbumsScreen':
              iconName= 'images-outline'
              break;
          }
          return <Text style={{color}}>
            <Icon name={iconName} size={25} color={color}/>
            </Text>
        }  
      })}

    >
      <Tab.Screen name="ChatScreen" options={{title:'Chat'}} component={ChatScreen}/>
      <Tab.Screen name="ContactsScreen" options={{title:'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title:'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}