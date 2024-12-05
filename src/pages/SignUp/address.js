import { StyleSheet, View, } from 'react-native'
import { React, useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Buttons, Gap, Header, Select, TextInput, showFlashMessage } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../utils'
import axios from 'axios'
import { URL_REGISTER } from '../../config/url'

const SignUpAddress = ({ navigation }) => {
    const dispatch = useDispatch();
    const globalState = useSelector((state) => state.registerReducer);
    const options = [
        { label: 'Banten', value: 'Banten' },
        { label: 'Jakarta', value: 'Jakarta' },
        { label: 'Depok', value: 'Depok' },
        { label: 'Bogor', value: 'Bogor' },
        { label: 'Tangerang', value: 'Tangerang' },
    ];
    const [form, setform] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Banten'
    });

    const onSubmit = async () => {
        dispatch({ type: 'SET_LOADING', value: true });
        try {
            dispatch({ type: 'SET_ADDRESS', value: form });
            const response = await axios.post(URL_REGISTER, { ...globalState, ...form }, { timeout: 5000 });
            showFlashMessage('Berhasil melakukan pendaftaran', 'SUCCESS');
            navigation.reset({
                index: 0,
                routes: [{ name: 'SignUpFinish' }],
            });
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.data.error);
                showFlashMessage(err.response.data.data.error.join('\n'), 'ERROR');
            } else if (err.request) {
                console.log('No response received:', err.request);
                showFlashMessage('No response from server', 'ERROR');
            } else {
                console.log('Error setting up request:', err.message);
                showFlashMessage(err.message, 'ERROR');
            }
        } finally {
            dispatch({ type: 'SET_LOADING', value: false });
        }
    };
    return (
        <SafeAreaView style={styles.page}>
            <Header title='Register' subTitle='Register details user' onBack={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <TextInput title='Phone Number' keyboardType='numeric' placeHolder='Type your number'
                        value={form.phoneNumber} onChangeText={(value) => setform('phoneNumber', value)} />
                    <Gap height={12}></Gap>
                    <TextInput title='Address' placeHolder='Type your address'
                        value={form.address} onChangeText={(value) => setform('address', value)} />
                    <Gap height={12}></Gap>
                    <TextInput title='House Number' placeHolder='Type your house number'
                        value={form.houseNumber} onChangeText={(value) => setform('houseNumber', value)} />
                    <Gap height={12}></Gap>
                    <Select title='City' options={options} selectedValue={form.city}
                        onValueChange={(itemValue, itemIndex) => setform('city', itemValue)} />
                    <Gap height={24}></Gap>
                    <Buttons title='Sign Up Now' color='#FFC700' textColor='white' onTap={onSubmit} />
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