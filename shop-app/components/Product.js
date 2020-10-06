import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

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
    backgroundColor: "rgba(255, 255, 255, 0.7)"
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
    flex: 1,
    alignItems: "flex-end",
    borderRadius: 20,

  },
  price: {
    backgroundColor: "black",
    color: "white",
    padding: 5,
  },

  backgroundImage: {
    width: "100%",
    height: 200
  }
})

export default Product