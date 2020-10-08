import React from 'react'
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../store/actions/shoppingCart'

import CustomButton from '../components/CustomButton'

import colors from '../constants/colors'

const ProductDetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const id = navigation.getParam("id")
  const selectedProduct = products.find(product => product.id === id)

  const { title, description, price, imageUrl } = selectedProduct

  const output = (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>€{price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          titleStyle={styles.buttonTitle}
          title="Add To Cart"
          onPress={() => dispatch(addToCart(id))}
        />
      </View>
    </ScrollView>
  )

  return output
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    borderRadius: 15
  },
  textContainer: {
    padding: 15,
    backgroundColor: colors.darkRed,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.transparentWhite
  },
  detail: {
    margin: 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: colors.white

  },
  description: {
    fontStyle: "italic",
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    marginHorizontal: 40
  },
  price: {
    margin: 15,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontWeight: "bold",
    textAlign: "center"
  },

  image: {
    width: "100%",
    height: 250,
  },
  imageContainer: {
    marginVertical: 15,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.transparentWhite
  },

  buttonContainer: {

  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: colors.darkGreen,
    borderWidth: 1,
    borderColor: colors.transparentWhite,
    padding: 10
  },
  buttonTitle: {
    color: colors.white
  }
})

export default ProductDetailsScreen