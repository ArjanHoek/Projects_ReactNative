import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import CustomHeaderButton from '../components/CustomHeaderButton'

import { addToCart, removeFromCart } from '../store/actions/shoppingCart'
import { addOrder } from '../store/actions/orders'


import CustomButton from '../components/CustomButton'
import colors from '../constants/colors'

const ShoppingCartScreen = props => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const shoppingCart = useSelector(state =>
    state.shoppingCart.shoppingCart)
  const productsInCart = Object.keys(shoppingCart)

  const productComponents = productsInCart.map(id => {
    const product = products.find(product => product.id === id)
    const amount = shoppingCart[id]
    return (
      <Product
        navigation={props.navigation}
        amount={amount}
        item={product}
        buttons={
          [
            {
              title: "-1",
              onPress: () => dispatch(removeFromCart(id))
            },
            {
              title: "+1",
              onPress: () => dispatch(addToCart(id))
            }
          ]
        }
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
    <View>
      <CustomButton
        style={styles.orderButton}
        title="Order Now"
        onPress={() => {
          console.log(shoppingCart)
          dispatch(addOrder(shoppingCart))
        }}
      />

      <ScrollView style={styles.cartItems}>
        {productComponents}
      </ScrollView>
    </View>
  )

  return productsInCart.length ? output : placeHolder
}

const styles = StyleSheet.create({

  placeHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  orderButton: {
    borderRadius: 0,
    backgroundColor: colors.lightGrey,
    borderBottomColor: colors.black,
    borderBottomWidth: 1
  },
  cartItems: {
    marginBottom: 30
  }
})

ShoppingCartScreen.navigationOptions = navigationData => {
  const totalPrice = navigationData.navigation.getParam("totalPrice")
  return {
    headerTitle: "Your Order",
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