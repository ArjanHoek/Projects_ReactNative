import * as actionTypes from '../actions/actionTypes'

const initialState = {
  shoppingCart: {}
}

const addToCart = (state, id) => {
  const shoppingCart = { ...state.shoppingCart }
  shoppingCart.hasOwnProperty(id)
    ? shoppingCart[id] = shoppingCart[id] + 1
    : shoppingCart[id] = 1
  return { ...state, shoppingCart }
}

const removeFromCart = (state, id) => {
  const shoppingCart = { ...state.shoppingCart }
  shoppingCart[id] === 1
    ? delete shoppingCart[id]
    : shoppingCart[id] = shoppingCart[id] - 1
  return { ...state, shoppingCart }
}

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action.id)
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action.id)
    default: return state
  }
}

export default shoppingCartReducer