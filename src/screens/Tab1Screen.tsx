import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()
  useEffect(() => {
    console.log("Tab1Screen effect");
  }, [])
  
  return (
    <View style={{...styles.globaMargin, marginTop:top+10 }}>
        <Text style={styles.title}>Icons</Text>
        <Text>

          <TouchableIcon iconName="airplane-outline"/>
          <TouchableIcon iconName="search-circle-outline"/>
          <TouchableIcon iconName="add-circle-outline"/>
          <TouchableIcon iconName="bookmark-outline"/>
          <TouchableIcon iconName="stats-chart-outline"/>
          <TouchableIcon iconName="barbell-outline"/>
          <TouchableIcon iconName="beer-outline"/>
          <TouchableIcon iconName="browsers-outline"/>
        </Text>
    </View>
  )
}
