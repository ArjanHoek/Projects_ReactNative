import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Categories from '../screens/CategoriesScreen'
import CategoryMeals from '../screens/CategoryMealsScreen'
import MealDetails from '../screens/MealDetailsScreen'
import Favorites from '../screens/FavoritesScreen'


import colors from '../constants/colors'

const MealsNavigator = createStackNavigator({
  Categories,
  CategoryMeals,
  MealDetails
}, {
  mode: "modal",
  initialRouteName: "Categories",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android"
        ? colors.primaryColor
        : colors.transparent
    },
    headerTintColor: Platform.OS === "android"
      ? colors.light
      : colors.dark
  }
})

const TabNavigator = createBottomTabNavigator(
  { MealsNavigator, Favorites }
)

export default createAppContainer(TabNavigator)