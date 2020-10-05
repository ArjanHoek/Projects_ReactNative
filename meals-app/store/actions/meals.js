import * as actionTypes from './actionTypes'

export const toggleFavorite = id => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    id
  }
}

export const setFilters = filters => {
  return {
    type: actionTypes.SET_FILTERS,
    filters
  }
}