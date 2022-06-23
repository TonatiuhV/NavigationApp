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
            
            let iconName:String = '';
            switch(route.name){
              case 'Tab1Screen':
                iconName= 'T1'
                break;
              case 'TopTabNavigator':
                iconName= 'TopTab'
                break;
              case 'StackNavigator':
                iconName= 'SN'
                break;
            }
            return <Text style={{color}}>{iconName}</Text>
          }  
        })}
      >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{tabBarLabel: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{tabBarLabel: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{tabBarLabel: 'Tab3'}} component={StackNavigator} />
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
          
          let iconName:String = '';
          switch(route.name){
            case 'Tab1Screen':
              iconName= 'T1'
              break;
            case 'Tab2Screen':
              iconName= 'T2'
              break;
            case 'StackNavigator':
              iconName= 'SN'
              break;
          }


          return <Text style={{color}}>{iconName}</Text>
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