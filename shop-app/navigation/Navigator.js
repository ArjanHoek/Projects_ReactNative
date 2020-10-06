import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ProductsScreen from '../screens/ProductsScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import OrderScreen from '../screens/OrderScreen'

import colors from '../constants/colors'


const ProductsNavigator = createStackNavigator(
  {
    ProductsScreen,
    ProductDetailsScreen
    // OrderScreen
  },
  {
    mode: "modal",
    initialRouteName: "ProductsScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.green,
      },
      headerTintColor: colors.light
    }
  }
)


export default createAppContainer(ProductsNavigator)