import React, { useEffect } from 'react'
import { FlatList } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { useDispatch, useSelector } from 'react-redux'

import CustomHeaderButton from '../components/CustomHeaderButton'
import Product from '../components/Product'

import { addToCart } from '../store/actions/shoppingCart'

const ProductsScreen = props => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)

  const shoppingCartItems = useSelector(state => state.shoppingCart.shoppingCart)

  const totalPrice = Object.keys(shoppingCartItems)
    .reduce((sum, cur) => {
      const amount = shoppingCartItems[cur]
      const price = products.find(product => product.id === cur).price
      return sum + price * amount
    }, 0)

  useEffect(() => {
    props.navigation.setParams({ totalPrice })
  }, [shoppingCartItems])

  const output = (
    <FlatList
      keyExtractor={product => product.id}
      renderItem={product => (
        <Product
          navigation={props.navigation}
          item={product.item}
          buttons={
            [
              {
                title: "Details",
                onPress: () => props.navigation.navigate({
                  routeName: "ProductDetailsScreen",
                  params: { id: product.item.id }
                })
              },
              {
                title: "Add To Cart",
                onPress: () => dispatch(addToCart(product.item.id))
              }
            ]
          }
        />
      )}
      data={products}
    />
  )

  return output
}

ProductsScreen.navigationOptions = navigationData => {
  const totalPrice = navigationData.navigation.getParam("totalPrice")
  return {
    headerTitle: "Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title={"€" + (totalPrice || 0).toFixed(2)} />
        <Item
          title="Cart"
          iconName="md-cart"
          onPress={() => navigationData.navigation.navigate("ShoppingCartScreen")}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  }
}

export default ProductsScreen