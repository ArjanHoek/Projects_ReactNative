import React from 'react'
import { FlatList } from 'react-native'

import Product from '../components/Product'

import PRODUCTS from '../data/dummy-data'

import { enableScreens } from 'react-native-screens'
enableScreens();

const ProductsScreen = props => {
  const output = (
    <FlatList
      keyExtractor={product => product.id}
      renderItem={Product}
      data={PRODUCTS}
    />
  )

  return output
}

ProductsScreen.navigationOptions = {
  headerTitle: "Products"
}


export default ProductsScreen