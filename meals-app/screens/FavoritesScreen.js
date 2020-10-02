import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealList from '../components/MealList'
import CustomHeaderButton from '../components/CustomHeaderButton'

import { MEALS } from '../data/dummy-data'

const FavoritesScreen = props => {
  const favoriteMeals = MEALS
    .filter(meal => meal.id === "m1" || meal.id === "m2")

  return (
    <MealList
      listData={favoriteMeals}
      navigation={props.navigation}
    />
  )
}

FavoritesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Favorite Meals",
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

export default FavoritesScreen