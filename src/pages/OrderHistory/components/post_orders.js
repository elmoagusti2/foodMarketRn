import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodList } from '../../../components'

const PostOrders = () => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <FoodList showStar={false} />
        </ScrollView>
    )
}

export default PostOrders

const styles = StyleSheet.create({})