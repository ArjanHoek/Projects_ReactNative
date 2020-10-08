import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ProductsScreen from '../screens/ProductsScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import OrdersScreen from '../screens/OrdersScreen'

import colors from '../constants/colors'
import { createDrawerNavigator } from 'react-navigation-drawer'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: colors.black,

  },
  headerTintColor: colors.white,
}

const ProductsNavigator = createStackNavigator(
  {
    ProductsScreen,
    ProductDetailsScreen,
    ShoppingCartScreen
  },
  {
    mode: "modal",
    initialRouteName: "ProductsScreen",
    defaultNavigationOptions
  }
)

const OrdersNavigator = createStackNavigator(
  { OrdersScreen },
  { defaultNavigationOptions }
)


const MainNavigator = createDrawerNavigator({
  ProductsNavigator: {
    screen: ProductsNavigator,
    navigationOptions: {
      drawerLabel: "Products"
    }
  },
  OrdersNavigator: {
    screen: OrdersNavigator,
    navigationOptions: {
      drawerLabel: "Orders"
    }
  }
})


export default createAppContainer(MainNavigator)