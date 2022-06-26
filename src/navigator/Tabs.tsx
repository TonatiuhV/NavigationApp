import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon  from 'react-native-vector-icons/Ionicons';


export const Tabs = () =>{
  return Platform.OS === 'ios'
    ? <TabsIOS/>
    :<TabsAndroid/>
}




const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
        barStyle ={{
          backgroundColor: colores.primary,
          
        }}
      
        // activeColor={colores.primary}

        screenOptions={({route}) =>({
                    
          tabBarIcon: ({color, focused}) => {
            
            let iconName:string = '';
            switch(route.name){
              case 'Tab1Screen':
                iconName= 'help-buoy-outline'
                break;
              case 'TopTabNavigator':
                iconName= 'map-outline'
                break;
              case 'StackNavigator':
                iconName= 'bookmarks-outline'
                break;
            }
  
  
            return <Icon name={iconName} size={25} color={color}/>
          }  
        })}
      >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{tabBarLabel: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{tabBarLabel: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{tabBarLabel: 'Stck'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS =() => {
  return (
    <BottomTabIOS.Navigator
      
      screenOptions={({route}) => ({
          
        // tabBarActiveTintColor: colores.primary,  
        tabBarStyle: {
          borderTopColor: colores.primary,
          elevation:0
        },
        tabBarLabelStyle:{
          fontSize:15,
        },
        tabBarIcon: ({color, focused, size}) => {
          
          let iconName:string = '';
          switch(route.name){
            case 'Tab1Screen':
              iconName= 'help-buoy-outline'
              break;
            case 'Tab2Screen':
              iconName= 'map-outline'
              break;
            case 'StackNavigator':
              iconName= 'people-outline'
              break;
          }


          return <Text style={{color}}>
            <Icon name={iconName} size={35} color={color}/>
            </Text>
        }

      })}

      sceneContainerStyle={{
        backgroundColor:'white'
      }}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{tabBarLabel: 'Tab1', tabBarIcon:(props) =><Text style={{color: props.color}}>T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{tabBarLabel: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{tabBarLabel: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{headerShown:false, tabBarLabel: 'Tab3'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}