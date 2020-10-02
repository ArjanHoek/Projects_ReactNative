import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'

import DefaultText from './DefaultText'

import colors from '../constants/colors'

const MealItem = props => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={props.onPress}>

        <View style={{ ...styles.row, ...styles.header }}>
          <ImageBackground
            source={{ uri: props.data.imageUrl }}
            style={styles.backgroundImage}
          >
            <View style={styles.titleContainer}>
              <Text
                numberOfLines={1}
                style={styles.title}
              >{props.data.title}</Text>
            </View>

          </ImageBackground>
        </View>
        <View style={{
          ...styles.row,
          ...styles.details
        }}
        >
          <DefaultText>{props.data.duration}m</DefaultText>
          <DefaultText
            style={{ textTransform: "uppercase" }}
          >{props.data.complexity}</DefaultText>
          <DefaultText
            style={{ textTransform: "uppercase" }}
          >{props.data.affordability}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    height: 200,
    backgroundColor: colors.veryLightGrey,
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
    marginVertical: 10
  },
  row: {
    flexDirection: "row"
  },
  header: {
    height: "85%"
  },
  details: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: colors.darkOpaque,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
    color: colors.light,
    textAlign: "center"
  }
})

export default MealItem