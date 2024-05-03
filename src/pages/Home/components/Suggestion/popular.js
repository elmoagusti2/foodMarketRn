import { StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodList } from '../../../../components'

const Popular = () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <FoodList />
      <FoodList />
    </ScrollView>
  )
}

export default Popular

const styles = StyleSheet.create({})