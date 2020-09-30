import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { enableScreens } from 'react-native-screens'

import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  const loadFontsComponent = (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
    />
  )

  if (!fontLoaded) {
    return loadFontsComponent
  }

  const output = <MealsNavigator />

  return output
}