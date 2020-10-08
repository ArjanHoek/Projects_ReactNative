import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import colors from '../constants/colors'
import CustomButton from './CustomButton'

import { addToCart } from '../store/actions/shoppingCart'

const Product = props => {
  const dispatch = useDispatch()

  const output = (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: props.item.imageUrl }}
      >
        <View style={styles.textContainer}>
          <View style={styles.productHeader}>
            <Text
              style={{ ...styles.detail, ...styles.title }}
            >{props.item.title}</Text>
            <Text
              style={{ ...styles.detail, ...styles.price }}
            >€{props.item.price}</Text>
          </View>

          <Text
            style={{ ...styles.detail, ...styles.description }}
          >{props.item.description}</Text>

        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Details"
            onPress={() => props.navigation.navigate({
              routeName: "ProductDetailsScreen",
              params: { id: props.item.id }
            })}
          />
          <CustomButton
            title="Add To Cart"
            onPress={() => dispatch(addToCart(props.item.id))}
          />
        </View>
      </ImageBackground>
    </View>
  )

  return output
}



const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: colors.black,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.black

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
    padding: 10

  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default Product