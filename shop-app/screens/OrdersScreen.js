import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import CustomHeaderButton from '../components/CustomHeaderButton'

const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders)

  const placeHolder = (
    <View style={styles.container}>
      <Text>No orders to display</Text>
    </View>
  )

  const output = (
    <View>
      <Text>{orders.length} orders</Text>
    </View>
  )

  return orders.length ? output : placeHolder
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

OrdersScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Orders",
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

export default OrdersScreen