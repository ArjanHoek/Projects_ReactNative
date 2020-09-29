import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>
        These are the meal details...
      </Text>
      <Button
        title="Go To Categories"
        // The popToTop() method works like the pop() method, but as the name suggests, it pops all screens until the top screen is reached.
        onPress={() => props.navigation.popToTop()}
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

export default MealDetailsScreen