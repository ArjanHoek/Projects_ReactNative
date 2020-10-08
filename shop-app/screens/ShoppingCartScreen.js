import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { addToCart, removeFromCart } from '../store/actions/shoppingCart'

const ShoppingCartScreen = props => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const shoppingCart = useSelector(state =>
    state.shoppingCart.shoppingCart)
  const productsInCart = Object.keys(shoppingCart)

  const productComponents = productsInCart.map(id => {
    const product = products.find(product => product.id === id)
    const amount = shoppingCart[id]
    const onPress = {
      add: () => dispatch(addToCart(id)),
      remove: () => dispatch(removeFromCart(id))
    }
    return (
      <CartItem
        product={product}
        amount={amount}
        onPress={onPress}
      />
    )
  })

  const totalPrice = productsInCart
    .reduce((sum, cur) => {
      const amount = shoppingCart[cur]
      const price = products.find(product => product.id === cur).price
      return sum + price * amount
    }, 0)

  useEffect(() => {
    props.navigation.setParams({ totalPrice })
  }, [totalPrice])

  const placeHolder = (
    <View style={styles.placeHolder}>
      <Text>No items found in shopping cart</Text>
    </View>
  )

  const output = (
    <ScrollView>{productComponents}</ScrollView>
  )

  return productsInCart.length ? output : placeHolder
}

const styles = StyleSheet.create({

  placeHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

ShoppingCartScreen.navigationOptions = navigationData => {
  const totalPrice = navigationData.navigation.getParam("totalPrice")
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title={"€" + (totalPrice || 0).toFixed(2)} />
        <Item
          title="Cart"
          iconName="md-cart"
          onPress={() => navigationData.navigation.navigate("ShoppingCartScreen")}
        />
      </HeaderButtons>
    )
  }
}

export default ShoppingCartScreen