import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../constants/colors'

const CustomButton = props => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...props.style }} onPress={props.onPress} >
      <Text style={{ ...styles.title, ...props.titleStyle }}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    borderColor: colors.black,
    borderWidth: 2
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: colors.black,
    fontWeight: "bold",
    textTransform: "uppercase",
  }
})

export default CustomButton