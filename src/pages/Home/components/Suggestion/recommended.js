import { StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodList } from '../../../../components'

const Recommended = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <FoodList />
      <FoodList />
      <FoodList />
    </ScrollView>
  )
}

export default Recommended

const styles = StyleSheet.create({})