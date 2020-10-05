import React from 'react'

import { CATEGORIES } from '../data/dummy-data'

import MealList from '../components/MealList'
import { useSelector } from 'react-redux'
import DefaultText from '../components/DefaultText'
import { View, StyleSheet } from 'react-native'


const CategoryMealsScreen = props => {
  const id = props.navigation.getParam('id')

  const filteredMeals = useSelector(state => {
    return state.meals.filteredMeals
  })

  const mealsInCategory = filteredMeals
    .filter(meal => meal.categoryIds.includes(id))

  const placeholder = (
    <View style={styles.placeholder}>
      <DefaultText>No meals found in this category</DefaultText>
    </View>
  )

  const output = (
    <MealList
      listData={mealsInCategory}
      navigation={props.navigation}
    />
  )

  return mealsInCategory.length ? output : placeholder
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

CategoryMealsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('id')
  const selectedCategory = CATEGORIES
    .find(category => category.id === id)
  return { headerTitle: selectedCategory.title }
}

export default CategoryMealsScreen