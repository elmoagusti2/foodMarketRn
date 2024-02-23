import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcBack } from '../../../assets'

const Header = ({ title, subTitle, onBack }) => {
    return (
        <View style={styles.container}>
            {onBack && (
                <TouchableOpacity onPress={onBack} >
                    <IcBack style={{ marginRight: 20 }} />
                </TouchableOpacity>
            )}
            <View>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.subTitle} >{subTitle}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 24,
        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        fontSize: 22, fontFamily: 'Poppins-Bold', color: '#020202'
    },
    subTitle: {
        fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8D92A3'
    }
})