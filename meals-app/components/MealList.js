import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from '../components/MealItem'

const Component = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={item => item.id}
        data={props.listData}
        renderItem={data => {
          const isFavorite = favoriteMeals.find(meal => meal.id === data.item.id)
          return (
            <MealItem
              data={data.item}
              onPress={() => props.navigation.navigate({
                routeName: "MealDetails",
                params: {
                  id: data.item.id,
                  title: data.item.title,
                  isFavorite
                }
              })}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
})

export default Component