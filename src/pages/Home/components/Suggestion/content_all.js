import { StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodList } from '../../../../components'
import { useSelector } from 'react-redux'

const ContentAll = ({ navigation }) => {
  const { isLoading, listMenu, } = useSelector((state) => state.homeReducer);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      {listMenu.map((item) => (<FoodList key={item.name} image={item.picture_path} title={item.name} showStar={false} price={item.price} onTap={
        () => navigation.navigate('DetailProduct',
          {
            'image': item.picture_path,
            'title': item.name,
            'description': item.description,
            'ingredients': item.ingredients,
            'price': item.price,
            'star': item.rate
          })} />))}
    </ScrollView>
  )
}

export default ContentAll

const styles = StyleSheet.create({})