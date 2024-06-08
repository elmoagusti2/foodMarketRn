import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, Header } from '../../components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { InProgress, PostOrders } from './components';

const OrderHistory = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Header title={"Your Orders"} subTitle={"Wait for the best meal"} />
      <Gap height={20} />
      <Tab.Navigator screenOptions={{
        tabBarItemStyle: { width: "auto" },
        tabBarScrollEnabled: false,
        tabBarIndicatorStyle: {
          backgroundColor: '#020202',
        },
        tabBarStyle: { elevation: 0 }
      }} >
        <Tab.Screen name="In Progress" component={InProgress} options={{ tabBarLabel: () => (<Text>In Progress</Text>) }} />
        <Tab.Screen name="Past Orders" component={PostOrders} options={{ tabBarLabel: () => (<Text>Past Orders</Text>) }} />
      </Tab.Navigator>
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({})