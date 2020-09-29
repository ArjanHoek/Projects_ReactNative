import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const NumberContainer = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textField}>{props.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    // alignItems: "center",
    // justifyContent: "center"
  },
  textField: {
    color: colors.secondary,
    fontSize: 22,
    textAlign: "center",
  }
})

export default NumberContainer