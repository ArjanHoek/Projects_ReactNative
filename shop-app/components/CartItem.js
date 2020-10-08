import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import CustomButton from './CustomButton'

const CartItem = props => {
  const output = (
    <View style={styles.container}>
      <Text>{props.product.title}</Text>
      <Text>{props.product.price}</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={{ ...styles.removeButton, ...styles.button }}
          titleStyle={styles.buttonTitle}
          title="-1"
          onPress={props.onPress.remove}
        />
        <Text>{props.amount}</Text>
        <CustomButton
          style={{ ...styles.addButton, ...styles.button }}
          titleStyle={styles.buttonTitle}
          title="+1"
          onPress={props.onPress.add}
        />
      </View>
    </View >
  )

  return output
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  removeButton: {
    backgroundColor: colors.darkRed,
  },
  addButton: {
    backgroundColor: colors.darkGreen,
  },
  button: {
    paddingVertical: 0,
    borderWidth: 0,
    borderRadius: 15
  },
  buttonTitle: {
    color: colors.white
  }
})

export default CartItem