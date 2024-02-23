import { StyleSheet, View, } from 'react-native'
import { React, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Buttons, Gap, Header, Select, TextInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const SignUpAddress = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState('java');
    const options = [
        { label: 'Banten', value: 'Banten' },
        { label: 'Jakarta', value: 'Jakarta' },
        { label: 'Depok', value: 'Depok' },
        { label: 'Bogor', value: 'Bogor' },
        { label: 'Tangerang', value: 'Tangerang' },
    ];
    return (
        <SafeAreaView style={styles.page}>
            <Header title='Register' subTitle='Register details user' onBack={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.container}>
                    <TextInput title='Phone Number' placeHolder='Type your number' />
                    <Gap height={12}></Gap>
                    <TextInput title='Address' placeHolder='Type your address' />
                    <Gap height={12}></Gap>
                    <TextInput title='House Number' placeHolder='Type your house number' />
                    <Gap height={12}></Gap>
                    <Select title='City' options={options} selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} />
                    <Gap height={24}></Gap>
                    <Buttons title='Sign Up Now' color='#FFC700' textColor='white' onTap={() => navigation.popToTop()} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        marginTop: 24,
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
})