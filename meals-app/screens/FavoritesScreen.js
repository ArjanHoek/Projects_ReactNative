import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealList from '../components/MealList'
import CustomHeaderButton from '../components/CustomHeaderButton'
import { useSelector } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import DefaultText from '../components/DefaultText'


const FavoritesScreen = props => {
  const favoriteMeals = useSelector(state =>
    state.meals.favoriteMeals)

  const placeholder = (
    <View style={styles.placeholder}>
      <DefaultText>No favorite meals to display</DefaultText>
    </View>
  )

  const output = (
    <MealList
      listData={favoriteMeals}
      navigation={props.navigation}
    />
  )

  return favoriteMeals.length ? output : placeholder
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

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default FavoritesScreen