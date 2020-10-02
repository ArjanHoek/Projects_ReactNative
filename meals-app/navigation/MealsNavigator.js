import React from 'react'

import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { Ionicons } from '@expo/vector-icons'

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import Categories from '../screens/CategoriesScreen'
import CategoryMeals from '../screens/CategoryMealsScreen'
import MealDetails from '../screens/MealDetailsScreen'
import Favorites from '../screens/FavoritesScreen'
import Filters from '../screens/FiltersScreen'

import colors from '../constants/colors'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android"
      ? colors.primaryColor
      : colors.transparent
  },
  headerTitleStyle: {
    fontFamily: "bold"
  },
  headerBackTitleStyle: {
    fontFamily: "regular"
  },
  headerTintColor: Platform.OS === "android"
    ? colors.light
    : colors.dark
}

const MealsNavigator = createStackNavigator(
  { Categories, CategoryMeals, MealDetails },
  {
    mode: "modal",
    initialRouteName: "Categories",
    defaultNavigationOptions
  }
)

const FavoritesNavigator = createStackNavigator(
  { Favorites, MealDetails },
  { defaultNavigationOptions }
)

const FiltersNavigator = createStackNavigator(
  { Filters },
  {
    defaultNavigationOptions
  }
)


const tabScreenConfig = {
  MealsNavigator: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: Platform.OS === "android"
        ? <Text style={{ fontFamily: "bold" }}>All Meals</Text>
        : "All Meals",
      tabBarColor: colors.primaryColor,
      tabBarIcon: tabInfo => (
        <Ionicons
          name="ios-restaurant"
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  }, FavoritesNavigator: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: Platform.OS === "android"
        ? <Text style={{ fontFamily: "bold" }}>Favorites</Text>
        : "Favorites",
      tabBarColor: colors.secondaryColor,
      tabBarIcon: tabInfo => (
        <Ionicons
          name="ios-star"
          size={25}
          color={tabInfo.tintColor}
        />
      )
    }
  }
}

const androidTabNavigator = createMaterialBottomTabNavigator(
  tabScreenConfig,
  {
    activeColor: colors.light,
    shifting: true,
    barStyle: {
      backgroundColor: colors.primaryColor
    }
  }
)

const iosTabNavigator = createBottomTabNavigator(
  tabScreenConfig, {
  tabBarOptions: {
    labelStyle: {
      fontFamily: "bold"
    },
    activeTintColor: colors.secondaryColor
  }
}
)

const TabNavigator = Platform.OS === 'android' ? androidTabNavigator : iosTabNavigator




const MainNavigator = createDrawerNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      drawerLabel: "All Meals"
    }
  },
  FiltersNavigator: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: "Filter Meals"
    }
  }
}, {
  contentOptions: {
    activeTintColor: colors.secondaryColor,
    labelStyle: {
      fontFamily: "bold"
    }
  }
})

export default createAppContainer(MainNavigator)