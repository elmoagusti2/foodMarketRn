import { StyleSheet, Text, View } from "react-native"
import { Success } from "../../assets"
import { Buttons, Gap } from "../../components"

const TransactionFinish = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Success />
            <Text style={styles.title}>You've Made Order</Text>
            <Text style={styles.subTitle} >Just stay at home while we are preparing your best foods</Text>
            <Gap height={12} />
            <View style={{ width: 200 }} ><Buttons title='Order Other Foods' color='#FFC700' textColor='white' onTap={() => navigation.replace('Main')
            } /></View>
            <Gap height={6} />
            <View style={{ width: 200 }} ><Buttons title='View My Order' color='#8D92A3' textColor='white' onTap={() => {
                navigation.replace('Main');
                setTimeout(() => {
                    navigation.navigate("Profile");
                }, 500);
            }} /></View>
        </View>
    )
}

export default TransactionFinish

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