import React from 'react'

import { CATEGORIES } from '../data/dummy-data'
import { MEALS } from '../data/dummy-data'

import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
  const id = props.navigation.getParam('id')
  const mealsInCategory = MEALS
    .filter(meal => meal.categoryIds.includes(id))

  return (
    <MealList
      listData={mealsInCategory}
      navigation={props.navigation}
    />
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('id')
  const selectedCategory = CATEGORIES
    .find(category => category.id === id)
  return { headerTitle: selectedCategory.title }
}

export default CategoryMealsScreen