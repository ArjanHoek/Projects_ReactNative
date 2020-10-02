import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../constants/colors'

const DefaultText = props => {
  return (
    <Text style={{
      ...styles.text,
      ...props.style
    }}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "regular",
    color: colors.dark
  }
})

export default DefaultText