import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = () => Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
})


export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [rounds, setRounds] = useState(0)
  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoaded(true)}
        onError={err => console.log(err)}
      />
    )
  }

  const startGameHandler = selectedNumber => {
    setSelectedNumber(selectedNumber)
  }

  const gameOverHandler = rounds => {
    setRounds(rounds)
  }

  const restartGameHandler = () => {
    setSelectedNumber(null)
    setRounds(0)
  }

  let activeScreen = (
    <StartGameScreen
      startGame={startGameHandler}
    />
  )

  if (selectedNumber && rounds <= 0) {
    activeScreen = (
      <GameScreen
        selectedNumber={selectedNumber}
        gameOver={gameOverHandler}
      />
    )
  } else if (rounds > 0) {
    activeScreen = (
      <GameOverScreen
        rounds={rounds}
        selectedNumber={selectedNumber}
        restartGame={restartGameHandler}
      />
    )
  }


  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess A Number" />
      {activeScreen}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})
