import React from 'react'
import { Button, StyleSheet, View, FlatList } from 'react-native'
import MealItem from '../components/MealItem'

import { CATEGORIES } from '../data/dummy-data'
import { MEALS } from '../data/dummy-data'


const CategoryMealsScreen = props => {
  const id = props.navigation.getParam('id')
  const mealsInCategory = MEALS.filter(meal => meal.categoryIds.includes(id))

  return (
    <View style={styles.screen}>

      <FlatList
        style={{ width: "100%" }}
        keyExtractor={item => item.id}
        data={mealsInCategory}
        renderItem={data => (
          <MealItem
            data={data.item}
            onPress={() => props.navigation.navigate({
              routeName: "MealDetails",
              params: { id: data.item.id }
            })}
          />
        )}
      />

      <Button
        title="Check Details"
        onPress={() => props.navigation.navigate({
          routeName: "MealDetails"
        })}
      />
      <Button
        title="Go Back"
        onPress={() => props.navigation.pop()}
      />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const id = navigationData.navigation.getParam('id')
  const selectedCategory = CATEGORIES.find(category => category.id === id)
  return { headerTitle: selectedCategory.title }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
})

export default CategoryMealsScreen