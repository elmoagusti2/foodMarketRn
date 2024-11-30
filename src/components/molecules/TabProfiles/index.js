import { Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Account from '../../../pages/Profile/components/account';
import FoodMarket from '../../../pages/Profile/components/food_market';

const TabProfiles = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      tabBarItemStyle: { width: "auto" },
      tabBarScrollEnabled: false,
      tabBarIndicatorStyle: {
        backgroundColor: '#020202',
      },
      tabBarStyle: { elevation: 0 }
    }} >
      <Tab.Screen name="account" component={Account} options={{ tabBarLabel: () => (<Text>Account</Text>) }} />
      <Tab.Screen name="store" component={FoodMarket} options={{ tabBarLabel: () => (<Text>Food Market</Text>) }} />
    </Tab.Navigator>
  )
}

export default TabProfiles
