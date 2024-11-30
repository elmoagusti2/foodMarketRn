import { StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileButton from './profile_button'

const FoodMarket = () => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <ProfileButton onTap={null} title={"Rate App"} />
            <ProfileButton onTap={null} title={"Help Center"} />
            <ProfileButton onTap={null} title={"Privacy & Policy"} />
            <ProfileButton onTap={null} title={"Terms & Conditions"} />
        </ScrollView>
    )
}

export default FoodMarket

const styles = StyleSheet.create({

})
