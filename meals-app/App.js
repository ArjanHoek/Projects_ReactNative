import React, { useState } from 'react';

import { enableScreens } from 'react-native-screens'

import * as Font from 'expo-font'
import fonts from './constants/fonts'

import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => Font.loadAsync(fonts)

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFontsComponent = (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  )

  const output = <MealsNavigator />

  return !fontLoaded
    ? loadFontsComponent
    : output
}

export default App