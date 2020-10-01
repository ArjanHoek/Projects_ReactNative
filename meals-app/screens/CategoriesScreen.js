import React from 'react'
import { FlatList } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {
  const renderGridItem = data => (
    <CategoryGridTile
      title={data.item.title}
      color={data.item.color}
      onPress={() => props.navigation.navigate({
        routeName: "CategoryMeals",
        params: { id: data.item.id }
      })}
    />
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

export default CategoriesScreen