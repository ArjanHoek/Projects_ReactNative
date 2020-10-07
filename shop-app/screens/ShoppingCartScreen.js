import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CustomButton from '../components/CustomButton'

const cartItem = (product, amount) => (
  <View>
    <Text>{product.title}</Text>
    <Text>{product.price}</Text>
    <Text>{amount}</Text>
    <View style={styles.buttonContainer}>
      <CustomButton title="-1" />
      <CustomButton title="+1" />
    </View>

  </View >
)

const ShoppingCartScreen = props => {
  const products = useSelector(state => state.products.products)
  const shoppingCart = useSelector(state => state.shoppingCart.shoppingCart)

  const shoppingCartComponents = Object.keys(shoppingCart).map(id => {
    const product = products.find(product => product.id === id)
    const amount = shoppingCart[id]
    return cartItem(product, amount)
  })

  return <View>{shoppingCartComponents}</View>
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row"
  }
})

export default ShoppingCartScreen