import React from 'react'
import { Text, StyleSheet } from 'react-native'

import fonts from '../constants/fonts'

const BodyText = props => (
  <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
)

const styles = StyleSheet.create({
  text: { fontFamily: fonts.regular }
})

export default BodyText