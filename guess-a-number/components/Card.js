import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {


    // Shadow properties only work for iOS
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,

    // The elevation property can be used to set shadows for Android
    elevation: 10,
    // There is also a package for adding shadows for Android:
    // https://github.com/879479119/react-native-shadow

    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
})

export default Card