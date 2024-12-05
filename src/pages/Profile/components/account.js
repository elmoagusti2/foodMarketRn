import { StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ProfileButton from './profile_button'
import { deleteString } from '../../../utils'

const Account = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <ProfileButton onTap={null} title={"Edit Profile"} />
            <ProfileButton onTap={null} title={"Home Address"} />
            <ProfileButton onTap={null} title={"Security"} />
            <ProfileButton onTap={() => navigation.navigate('OrderHistory')} title={"Order History"} />
            <ProfileButton onTap={() => {
                deleteString("token");
                navigation.replace('SignIn');
            }} title={"Sign Out"} />
        </ScrollView>
    )
}

export default Account

const styles = StyleSheet.create({

})




