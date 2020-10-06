import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import Product from '../components/Product'

const ProductsScreen = props => {
  const products = useSelector(state => state.products.products)

  const output = (
    <FlatList
      keyExtractor={product => product.id}
      renderItem={product => (
        <Product
          navigation={props.navigation}
          item={product.item}
        />
      )}
      data={products}
    />
  )

  return output
}

ProductsScreen.navigationOptions = {
  headerTitle: "Products"
}


export default ProductsScreen