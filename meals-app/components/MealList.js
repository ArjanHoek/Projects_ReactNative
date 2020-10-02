import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import MealItem from '../components/MealItem'

const Component = props => {
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={item => item.id}
        data={props.listData}
        renderItem={data => (
          <MealItem
            data={data.item}
            onPress={() => props.navigation.navigate({
              routeName: "MealDetails",
              params: { id: data.item.id }
            })}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
})

export default Component