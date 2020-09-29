import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'

import colors from '../constants/colors'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {
  const [inputValue, setInputValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)

  // In order to use de addEventListener function efficiently, the function has to be called within the useEffect call. In this way, a new event listener will be set up whenever the component rerenders, while removing the old event listener.
  useEffect(() => {
    const updateLayout = () =>
      setButtonWidth(Dimensions.get('window').width / 4)
    Dimensions.addEventListener("change", updateLayout)
    return () =>
      Dimensions.removeEventListener("change", updateLayout)
  })



  const inputChangeHandler = changedValue =>
    setInputValue([...changedValue]
      .filter(char => parseInt(char) >= 0).join(''))


  const resetInputHandler = () => {
    setInputValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const intValue = parseInt(inputValue)
    if (isNaN(intValue) || intValue <= 0) {
      Alert.alert('Invalid number!', 'Has to be between 0 and 99', [
        {
          text: 'OK',
          style: 'destructive',
          onPress: resetInputHandler
        }
      ])
    } else {
      setSelectedNumber(parseInt(inputValue))
      setConfirmed(true)
      setInputValue('')
      Keyboard.dismiss()
    }

  }

  let confirmedOutput

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryCard}>
        <BodyText>You selected:</BodyText>
        <NumberContainer number={selectedNumber} />

        <MainButton
          title="Start Game"
          onPress={() => props.startGame(selectedNumber)}
        />

      </Card>
    )
  }

  return (
    <ScrollView>
      {/* For iOS, wrapping the screen in a TouchableWithoutFeedback with the assigned onPress enables removing the keyboard from the screen when tapping outside of the keyboard. This also works on Android, but was not necessary because the keyboard has a submit button that dismisses the keyboard automatically with the blurOnSubmit property. */}
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={30}
      >
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
        }}>
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start A New Game</TitleText>
            <Card style={styles.inputContainer}>
              <BodyText>Select A Number</BodyText>
              <Input
                style={styles.numberInput}
                blurOnSubmit
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                value={inputValue}
                onChangeText={inputChangeHandler}
              />
              <View style={styles.buttons}>
                <View style={{
                  width: buttonWidth
                }}>
                  <Button color={colors.secondary} title="Reset" onPress={resetInputHandler} />
                </View>
                <View style={{
                  width: buttonWidth
                }}>
                  <Button color={colors.primary} title="Confirm" onPress={confirmInputHandler} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </ScrollView>


  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  // button: {
  //   // width: "45%"
  //   width: 100
  // },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  numberInput: {
    width: 50,
    textAlign: "center"
  },
  summaryCard: {
    marginTop: 20,
    alignItems: "center"
  }
})

export default StartGameScreen