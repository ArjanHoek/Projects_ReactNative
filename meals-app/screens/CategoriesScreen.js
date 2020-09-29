import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


const CategoriesScreen = props => {
  console.log(props.navigation);
  return (
    <View style={styles.screen}>
      <Text>
        Categories Screen
      </Text>
      <Button
        title="View Category"
        onPress={() => props.navigation.navigate({
          routeName: "CategoryMeals"
        })}
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

export default CategoriesScreen