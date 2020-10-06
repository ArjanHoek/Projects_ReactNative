import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import CustomButton from './CustomButton'

const Product = props => (
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
        <CustomButton title="Add To Cart" />
      </View>
    </ImageBackground>

  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: "black",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.dark

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
    fontSize: 20
  },
  description: {
    fontStyle: "italic"
  },
  price: {
    backgroundColor: colors.dark,
    color: colors.light,
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