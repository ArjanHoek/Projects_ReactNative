import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import colors from '../constants/colors'

import CustomHeaderButton from '../components/CustomHeaderButton'

const CustomSwitch = props => {
  return (
    <View style={styles.filter}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{
          true: colors.primaryColor,
          false: colors.lightGrey
        }}
        thumbColor={Platform.OS === "android"
          ? colors.primaryColor
          : colors.light}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  )
}

const FiltersScreen = props => {
  const { navigation } = props

  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian
    }
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({ saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>

      <CustomSwitch
        label="Gluten-free"
        value={isGlutenFree}
        onValueChange={newValue => setIsGlutenFree(newValue)}
      />

      <CustomSwitch
        label="Lactose-free"
        value={isLactoseFree}
        onValueChange={newValue => setIsLactoseFree(newValue)}
      />

      <CustomSwitch
        label="Vegan"
        value={isVegan}
        onValueChange={newValue => setIsVegan(newValue)}
      />

      <CustomSwitch
        label="Vegetarian"
        value={isVegetarian}
        onValueChange={newValue => setIsVegetarian(newValue)}
      />

    </View>
  )
}

FiltersScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}      >
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => navigationData.navigation
            .getParam("saveFilters")()}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  },
  title: {
    fontFamily: "bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
})

export default FiltersScreen