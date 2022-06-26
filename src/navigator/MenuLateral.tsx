import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" options={{headerShown: true, title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );

}


const MenuInterno = ({navigation}:DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
          }}
          style={styles.avatar}
        />
      {/* Opciones de menu */}
      </View>
      <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.menuBotton}
            onPress = {() =>navigation.navigate('Tabs')}
          >
            <Icon name="people-outline" size={30} style={{marginRight:4}}/>
        
            <Text style={styles.menuTexto}>Navegacion Stack</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuBotton}
            onPress = {() =>navigation.navigate('SettingsScreen')}
          >
            <Icon name="settings-outline" size={30} style={{marginRight:4}}/>
            <Text style={styles.menuTexto}>Settings</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}