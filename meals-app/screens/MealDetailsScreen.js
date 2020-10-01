import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

import { MEALS } from '../data/dummy-data'

const MealDetailsScreen = props => {
  const id = props.navigation.getParam("id")
  const selectedMeal = MEALS.find(meal => meal.id === id)

  const output = (
    <View style={styles.screen}>
      <Button
        title="Go To Categories"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  )
  return output
}

MealDetailsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('id')
  const selectedMeal = MEALS.find(meal => meal.id === id)
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons
        HeaderButtonComponent={CustomHeaderButton}
      >
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log('Marked as favorite')}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default MealDetailsScreen