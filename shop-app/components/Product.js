import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import CustomButton from './CustomButton'

const Product = ({ buttons, item, amount }) => {
  // In order to add buttons to the product, the component needs to receive an array of buttons through props. Each array item needs to be an object with a title (string) and an onPress (function) property.
  const buttonContainer = (
    <View style={styles.buttonContainer}>
      {
        buttons.map(button => (
          <CustomButton
            key={button.title}
            style={styles.button}
            titleStyle={styles.buttonTitle}
            title={button.title}
            onPress={button.onPress}
          />
        ))
      }
    </View>
  )

  const textContainer = (
    <View style={styles.textContainer}>
      <View style={styles.productHeader}>
        <Text style={{ ...styles.detail, ...styles.title }}>
          {item.title}
        </Text>
        <Text style={{ ...styles.detail, ...styles.price }}>
          {amount ? `Amount: ${amount}` : `Price: €${item.price}`}
        </Text>
      </View>
      <Text style={{ ...styles.detail, ...styles.description }}>
        {item.description}
      </Text>
    </View>
  )

  const output = (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: item.imageUrl }}
      >
        {textContainer}
        {buttonContainer}
      </ImageBackground>
    </View>
  )

  return output
}



const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: colors.transparentWhite,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2
  },
  textContainer: {
    padding: 10,
    backgroundColor: colors.transparentWhite
  },
  detail: {
    margin: 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  description: {
    fontStyle: "italic"
  },
  price: {
    backgroundColor: colors.black,
    color: colors.white,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: "bold"
  },

  backgroundImage: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: colors.transparentWhite,
    borderWidth: 2,
    borderColor: colors.black,
    margin: 10,
    paddingHorizontal: 15,

  },
  buttonTitle: {
    color: colors.black
  }
})

export default Product