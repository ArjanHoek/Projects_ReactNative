import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'

const CustomButton = props => {
  return (
    <View style={styles.container}>
      <Text onPress={props.onPress} style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    padding: 5,
    backgroundColor: colors.orange,
  },
  title: {
    color: colors.light
  }
})

export default CustomButton