import React, { useState } from 'react';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import mealsReducer from './store/reducers/meals'

import { enableScreens } from 'react-native-screens'

import * as Font from 'expo-font'
import fonts from './constants/fonts'

import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => Font.loadAsync(fonts)

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFontsComponent = (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  )

  const output = (
    <Provider store={store} >
      <MealsNavigator />
    </Provider>
  )

  return !fontLoaded
    ? loadFontsComponent
    : output
}

export default App