import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../constants/colors'

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress} >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    borderColor: colors.dark,
    borderWidth: 2
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: colors.dark,
    fontWeight: "bold",
    textTransform: "uppercase",
  }
})

export default CustomButton