import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import Navigator from './navigation/Navigator'
import ordersReducer from './store/reducers/orders';

import productsReducer from './store/reducers/products'
import shoppingCartReducer from './store/reducers/shoppingCart';

const rootReducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  orders: ordersReducer
})

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

export default App