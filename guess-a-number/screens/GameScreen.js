import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Alert, ScrollView, FlatList, Dimensions } from 'react-native'

import * as ScreenOrientation from 'expo-screen-orientation'

import { Ionicons } from '@expo/vector-icons'

import defaultStyles from '../constants/default-styles'



import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  }
  return randomNumber
}

// This function works with the ScrollView component
// const renderListItem = (value, round) => (
//   <View style={styles.listItem} key={value}>
//     <BodyText>#{round}</BodyText>
//     <BodyText>{value}</BodyText>
//   </View>
// )

// This function works with the FlatList component
const renderListItem = (totalRounds, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{totalRounds - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
)

const GameScreen = ({ selectedNumber, gameOver }) => {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  const initialGuess = generateRandomBetween(1, 100, selectedNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [allGuesses, setAllGuesses] = useState([initialGuess])
  const [availableWidth, setAvailableWidth] = useState(Dimensions.get("window").width)
  const [availableHeight, setAvailableHeight] = useState(Dimensions.get("window").height)

  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  useEffect(() => {
    const updateLayout = () => {
      setAvailableWidth(Dimensions.get('window').width)
      setAvailableHeight(Dimensions.get('window').height)
    }
    Dimensions.addEventListener("change", updateLayout)
    return () =>
      Dimensions.removeEventListener("change", updateLayout)
  })

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      gameOver(allGuesses.length)
    }
  }, [currentGuess, selectedNumber, gameOver])

  const newGuessHandler = direction => {
    if ((direction === "lower" && currentGuess < selectedNumber) || (direction === "higher" && currentGuess > selectedNumber)) {
      Alert.alert('Don\'t try to cheat', 'Give the computer correct instructions!', [{ text: 'Sorry', style: 'cancel', }])
      return
    } else if (direction === "lower") {
      currentHigh.current = currentGuess
    } else if (direction === "higher") {
      currentLow.current = currentGuess + 1
    }
    const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextGuess)
    setAllGuesses(allGuesses => [nextGuess, ...allGuesses])
  }

  const allGuessesOutput = (
    // <ScrollView contentContainerStyle={styles.list}>
    //   {allGuesses.map((guess, index) =>
    //     renderListItem(guess, (allGuesses.length - index)))}
    // </ScrollView>
    <FlatList
      contentContainerStyle={styles.list}
      keyExtractor={(item => item.toString())}
      data={allGuesses}
      renderItem={renderListItem.bind(this, allGuesses.length)}
    />
  )

  const listContainerStyle = width => width > 350
    ? styles.listContainerBig
    : styles.listContainerSmall

  if (availableHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={defaultStyles.bodyText}>Opponent's Guess</Text>
        <View style={styles.controls}>
          <MainButton title={<Ionicons name="md-remove" size={24} />} onPress={() => newGuessHandler("lower")} />
          <NumberContainer number={currentGuess} />
          <MainButton title={<Ionicons name="md-add" size={24} />} onPress={() => newGuessHandler("higher")} />
        </View>
        <View style={listContainerStyle(availableWidth)}>
          {allGuessesOutput}
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Text style={defaultStyles.bodyText}>Opponent's Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={{
        ...styles.buttons,
        marginTop: availableHeight > 600 ? 20 : 5
      }}>
        <MainButton title={<Ionicons name="md-remove" size={24} />} onPress={() => newGuessHandler("lower")} />
        <MainButton title={<Ionicons name="md-add" size={24} />} onPress={() => newGuessHandler("higher")} />
      </Card>
      <View style={listContainerStyle(Dimensions.get('window').width)}>
        {allGuessesOutput}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: 20,
    width: 400,
    maxWidth: "90%"
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    alignItems: "center"
  },
  listContainerSmall: {
    // width: "60%",
    width: "80%",
    // For scrolling of a ScrollView nested inside a View to work on Android, set the flex property on the the parent View
    flex: 1,
  },
  listContainerBig: {
    width: "60%",
    flex: 1
  },
  // ScrollView style
  list: {
    flexGrow: 1,
    // alignItems: "center", Add this back in when switching back to ScrollView
    justifyContent: "flex-end"
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
})

export default GameScreen