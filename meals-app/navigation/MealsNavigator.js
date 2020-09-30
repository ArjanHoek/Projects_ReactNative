import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'

import colors from '../constants/colors'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailsScreen
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

export default createAppContainer(MealsNavigator)