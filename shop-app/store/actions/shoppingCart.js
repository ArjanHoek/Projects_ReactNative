import * as actionTypes from '../actions/actionTypes'

export const addToCart = id => {
  return {
    type: actionTypes.ADD_TO_CART,
    id
  }
}