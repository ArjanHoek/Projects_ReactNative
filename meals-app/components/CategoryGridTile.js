import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import colors from '../constants/colors'

const CategoryGridTile = props => {
  let TouchableComponent = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  const content = (
    <View style={{ ...styles.container, backgroundColor: props.color }}>
      <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
    </View>
  )

  return (
    <View style={styles.item}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onPress}>{content}</TouchableComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.dark,
    shadowOpacity: .26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  item: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? "hidden" : "visible",
    elevation: 3
  },
  title: {
    color: colors.dark,
    fontFamily: 'bold',
    fontSize: 22,
    textAlign: "right"
  }
})

export default CategoryGridTile






