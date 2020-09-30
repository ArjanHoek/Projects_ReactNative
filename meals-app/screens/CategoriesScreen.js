import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {
  const renderGridItem = data => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.navigation.navigate({
        routeName: "CategoryMeals",
        params: {
          id: data.item.id
        }
      })}
    >
      <View >
        <Text>{data.item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      keyExtractor={item => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen