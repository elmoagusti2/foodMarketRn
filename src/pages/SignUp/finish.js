import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FinishSignUp } from '../../assets'
import { Buttons, Gap } from '../../components'

const SignUpFinish = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <FinishSignUp />
            <Text style={styles.title}>Yeay! Completed</Text>
            <Text style={styles.subTitle} >Now you are able to order
                some foods as a self-reward</Text>
            <Gap height={12} />
            <View style={{ width: 200 }} ><Buttons title='Find Foods' color='#FFC700' textColor='white' onTap={()=>navigation.replace('Main')
            } /></View>
        </View>
    )
}

export default SignUpFinish

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 50,
    },

    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        marginBottom: 6
    },
    subTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        textAlign: 'center'
    }
})