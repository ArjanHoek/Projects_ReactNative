import React, { useCallback, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import CustomHeaderButton from '../components/CustomHeaderButton'
import DefaultText from '../components/DefaultText'
import colors from '../constants/colors'

import { toggleFavorite } from '../store/actions/meals'

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>
        {props.children}
      </DefaultText>
    </View>
  )
}

const MealDetailsScreen = props => {
  const meals = useSelector(state => state.meals.meals)
  const id = props.navigation.getParam("id")
  const selectedMeal = meals.find(meal => meal.id === id)

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const isFavorite = favoriteMeals.find(meal => meal.id === id)


  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(id))
  }, [dispatch, id])

  useEffect(() => {
    props.navigation.setParams({ toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFavorite })
  }, [isFavorite])

  const output = (
    <ScrollView>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      />

      <View style={styles.details}
      >
        <DefaultText style={styles.detail}>
          {selectedMeal.duration}m
          </DefaultText>
        <DefaultText style={styles.detail}>
          {selectedMeal.complexity}
        </DefaultText>
        <DefaultText style={styles.detail}>
          {selectedMeal.affordability}
        </DefaultText>
      </View>

      <Text style={styles.title}>Ingredients</Text>

      {
        selectedMeal.ingredients.map(ingredient => {
          return (
            <ListItem
              key={ingredient}

            >
              {ingredient}
            </ListItem>
          )
        })
      }

      <Text style={styles.title}>Steps</Text>

      {selectedMeal.steps.map(step => {
        return (
          <ListItem key={step}>
            {step}
          </ListItem>
        )
      })}

    </ScrollView>

  )
  return output
}

MealDetailsScreen.navigationOptions = navigationData => {
  const title = navigationData.navigation.getParam("title");
  const toggleFavoriteHandler = navigationData.navigation.getParam("toggleFavoriteHandler")
  const isFavorite = navigationData.navigation.getParam("isFavorite")
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons
        HeaderButtonComponent={CustomHeaderButton}
      >
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavoriteHandler}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "bold",
    fontSize: 22,
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    padding: 10
  }
})

export default MealDetailsScreen