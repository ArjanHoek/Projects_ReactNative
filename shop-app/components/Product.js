import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import CustomButton from './CustomButton'

const Product = props => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.backgroundImage}
      source={{ uri: props.item.imageUrl }}
    >
      <View style={styles.textContainer}>
        <Text
          style={{ ...styles.detail, ...styles.title }}
        >{props.item.title}</Text>
        <Text
          style={{ ...styles.detail, ...styles.description }}
        >{props.item.description}</Text>
        <View style={styles.priceContainer}>
          <Text
            style={{ ...styles.detail, ...styles.price }}
          >€{props.item.price}</Text>
        </View>
      </View>

    </ImageBackground>
    <View style={styles.buttonContainer}>
      <CustomButton
        title="Details"
        onPress={() => props.navigation.navigate({
          routeName: "ProductDetailsScreen",
          params: { id: props.item.id }
        })}
      />
      <CustomButton title="Add To Cart" />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: "black",
    borderRadius: 25,
    overflow: "hidden"

  },
  textContainer: {
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  detail: {
    margin: 2
  },
  title: {
    fontWeight: "bold"
  },
  description: {
    fontStyle: "italic"
  },
  priceContainer: {
    alignItems: "flex-end"
  },
  price: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 20,
    padding: 5
  },

  backgroundImage: {
    width: "100%",
    height: 200
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

  }
})

export default Product