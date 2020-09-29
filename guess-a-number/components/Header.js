import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import TitleText from './TitleText'

import colors from '../constants/colors'

const Header = props => {
  return (
    <View style={{
      ...styles.headerBase,
      ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid
      })
    }}>
      <TitleText style={styles.text}>{props.title}</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: colors.light,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: colors.primary,
  },
  text: {
    color: Platform.OS === "ios" ? colors.primary : colors.light
  }
})

export default Header