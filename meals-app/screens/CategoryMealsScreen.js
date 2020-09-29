import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>
        All Meals In This Category
      </Text>
      <Button
        title="Check Details"
        onPress={() => props.navigation.navigate({
          routeName: "MealDetails"
        })}
      />
      <Button
        title="Go Back"
        // The pop() method works like the goBack() method. It 'pops' the last screen from the stack, showing the screen below the 'popped' screen, which would also be shown by simply going back.
        onPress={() => props.navigation.pop()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default CategoryMealsScreen