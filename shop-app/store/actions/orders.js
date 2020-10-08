import * as actionTypes from '../actions/actionTypes'

export const addOrder = order => {
  return {
    type: actionTypes.ADD_ORDER,
    order
  }
}

