import React, { useState, useEffect } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [inputGoal, setInputGoal] = useState('')

  const changeTextHandler = text => setInputGoal(text)

  const submitHandler = () => {
    props.addGoalHandler(inputGoal)
    setInputGoal('')
  }

  return (
    <Modal
      visible={props.inputMode}
      animationType="slide"
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Goal..."
          style={styles.input}
          value={inputGoal}
          onChangeText={changeTextHandler}
        />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button color="red" onPress={() => props.setInputMode(false)} title="Cancel" />

          </View>
          <View style={styles.button}>
            <Button color="green" onPress={submitHandler} title="Add" />

          </View>
        </View>

      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
  },
  button: {
    width: '50%'
  }
})

export default GoalInput