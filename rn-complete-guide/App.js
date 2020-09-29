import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([])
  const [inputMode, setInputMode] = useState(false)

  const addGoalHandler = value => {
    const key = Math.random().toString()
    setGoals(currentGoals => [...currentGoals, { key, value }])
    setInputMode(false)
  }

  const deleteGoalHandler = key => {
    setGoals(currentGoals => currentGoals
      .filter(goal => goal.key !== key))
  }

  return (
    <View style={styles.screen}>
      <Button
        title='Add New Goal'
        onPress={setInputMode.bind(this, true)}
      />
      <GoalInput
        addGoalHandler={addGoalHandler}
        inputMode={inputMode}
        setInputMode={setInputMode}
      />
      <FlatList
        data={goals}
        renderItem={itemData => <GoalItem
          deleteGoalHandler={deleteGoalHandler}
          item={itemData.item}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
