import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width }= useWindowDimensions()
  return (
    <Drawer.Navigator
      
      screenOptions={{
        headerShown:false,
        drawerType: (width) >= 658 ? 'permanent': 'front',
      }}
      drawerContent = {(props) => MenuInterno(props)}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );

}


const MenuInterno = (props:DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
}