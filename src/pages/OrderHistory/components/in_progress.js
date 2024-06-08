import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodList } from '../../../components'

const InProgress = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <FoodList showStar={false} onTap={() => navigation.navigate('DetailProduct')} />
      <FoodList showStar={false} />
      <FoodList showStar={false} />
      <FoodList showStar={false} />
    </ScrollView>
  )
}

export default InProgress

const styles = StyleSheet.create({})