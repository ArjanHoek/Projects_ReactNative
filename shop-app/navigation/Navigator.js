import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ProductsScreen from '../screens/ProductsScreen'
import ProductsDetailsScreen from '../screens/ProductDetailsScreen'
import OrderScreen from '../screens/OrderScreen'

import colors from '../constants/colors'


const ProductsNavigator = createStackNavigator(
  {
    ProductsScreen,
    ProductsDetailsScreen
    // OrderScreen
  },
  {
    mode: "modal",
    initialRouteName: "ProductsScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.orange,
      },
      headerTintColor: colors.light
    }
  }
)


export default createAppContainer(ProductsNavigator)