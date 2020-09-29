import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import fonts from '../constants/fonts'

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 25,
  },
  title: {
    color: colors.light,
    fontFamily: fonts.regular,
    fontSize: 18

  }
})

export default MainButton