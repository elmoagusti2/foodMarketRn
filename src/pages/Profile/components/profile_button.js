import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArrowRight } from '../../../assets'

const ProfileButton = ({ title, onTap }) => {
    return (
        <TouchableOpacity onPress={onTap} >
            <View style={styles.content}>
                <Text style={{ color: '#020202', fontFamily: 'Poppins-Regular', fontSize: 14 }} >{title}</Text>
                <ArrowRight style={{}} />
            </View>
        </TouchableOpacity>
    )
}

export default ProfileButton

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})