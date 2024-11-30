import { StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileButton from './profile_button'

const Account = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <ProfileButton onTap={null} title={"Edit Profile"} />
            <ProfileButton onTap={null} title={"Home Address"} />
            <ProfileButton onTap={null} title={"Security"} />
            <ProfileButton onTap={() => navigation.navigate('OrderHistory')} title={"Order History"} />
        </ScrollView>
    )
}

export default Account

const styles = StyleSheet.create({

})




