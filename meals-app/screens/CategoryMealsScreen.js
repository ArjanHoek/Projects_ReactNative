import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
  const id = props.navigation.getParam('id')

  const selectedCategory = CATEGORIES.find(category => category.id === id)

  return (
    <View style={styles.screen}>
      <Text>
        Category: {selectedCategory.title}
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

CategoryMealsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('id')
  const selectedCategory = CATEGORIES.find(category => category.id === id)

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default CategoryMealsScreen