import { MEALS } from '../../data/dummy-data'

import * as actionTypes from '../actions/actionTypes'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const toggleFavorite = (state, id) => {
  let favoriteMeals;
  if (state.favoriteMeals.find(meal => meal.id === id)) {
    favoriteMeals = state.favoriteMeals.filter(meal => meal.id !== id)
  } else {
    favoriteMeals = state.favoriteMeals.concat(state.meals.find(meal => meal.id === id))
  }
  return { ...state, favoriteMeals }
}

const setFilters = (state, filters) => {
  const filteredMeals = state.meals.filter(meal => {
    if (filters.isGlutenFree && !meal.isGlutenFree) {
      return false
    }
    if (filters.isLactoseFree && !meal.isLactoseFree) {
      return false
    }
    if (filters.isVegetarian && !meal.isVegetarian) {
      return false
    }
    if (filters.isVegan && !meal.isVegan) {
      return false
    }
    return true
  })
  return { ...state, filteredMeals }
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      return toggleFavorite(state, action.id)
    case actionTypes.SET_FILTERS:
      return setFilters(state, action.filters)
    default: return state
  }
}

export default mealsReducer