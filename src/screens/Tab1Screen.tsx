import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colores, styles } from '../theme/appTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()
  useEffect(() => {
    console.log("Tab1Screen effect");
  }, [])
  
  return (
    <View style={{...styles.globaMargin, marginTop:top+10 }}>
        <Text style={styles.title}>Icons</Text>
        <Text>

          <Icon name="airplane-outline" size={80} color={colores.primary} />
          <Icon name="search-circle-outline" size={80} color={colores.primary} />
          <Icon name="add-circle-outline" size={80} color={colores.primary} />
          <Icon name="bookmark-outline" size={80} color={colores.primary} />
          <Icon name="stats-chart-outline" size={80} color={colores.primary} />
          <Icon name="barbell-outline" size={80} color={colores.primary} />
          <Icon name="beer-outline" size={80} color={colores.primary} />
          <Icon name="browsers-outline" size={80} color={colores.primary} />
        </Text>
    </View>
  )
}
