import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import { HeaderButton } from 'react-navigation-header-buttons'

import { Ionicons } from '@expo/vector-icons'

import colors from '../constants/colors'

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={
        Platform.OS === 'android'
          ? colors.light
          : colors.primaryColor
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default CustomHeaderButton