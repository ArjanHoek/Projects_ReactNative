import React from 'react'
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../constants/colors'

const Screen = props => {
  const products = useSelector(state => state.products.products)
  const id = props.navigation.getParam("id")
  const selectedProduct = products.find(product => product.id === id)

  const output = (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />

      </View>
    </ScrollView>
  )

  return output
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.mediumGrey,
    padding: 20,
    borderRadius: 15
  },
  textContainer: {
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.85)"
  },
  detail: {
    margin: 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center"
  },
  description: {
    fontStyle: "italic",
    textAlign: "center"
  },
  price: {
    backgroundColor: colors.dark,
    color: colors.light,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: "bold"
  },

  image: {
    width: "100%",
    height: 250,
  },
  imageContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.dark
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10

  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default Screen