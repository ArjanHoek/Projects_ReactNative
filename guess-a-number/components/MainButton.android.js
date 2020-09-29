import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import colors from '../constants/colors'
import fonts from '../constants/fonts'

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  Platform.Version >= 21 && (ButtonComponent = TouchableNativeFeedback)

  return (
    <View style={styles.buttons}>
      <ButtonComponent onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.title}>
            {props.title}
          </Text>
        </View>
      </ButtonComponent>
    </View>

  )
}

const styles = StyleSheet.create({
  buttons: {
    borderRadius: 25,
    overflow: "hidden"
  },
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