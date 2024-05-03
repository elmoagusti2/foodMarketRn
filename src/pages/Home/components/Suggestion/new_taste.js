import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodList } from '../../../../components'
import { ScrollView } from 'react-native-gesture-handler'

const NewTaste = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
      <FoodList />
    </ScrollView>
  )
}

export default NewTaste

const styles = StyleSheet.create({})