import React from 'react'

import { FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CategoryGridTile from '../components/CategoryGridTile'
import CustomHeaderButton from '../components/CustomHeaderButton'

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

CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  }
}

export default CategoriesScreen