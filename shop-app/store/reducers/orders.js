import * as actionTypes from '../actions/actionTypes'

const initialState = {
  orders: []
}

const addOrder = (state, order) => {
  const orders = [...state.orders].concat(order);
  return { ...state, orders };
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      return addOrder(state, action.order)
    default: return state
  }
}

export default ordersReducer