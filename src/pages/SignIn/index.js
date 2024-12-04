import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Buttons, Gap, Header, showFlashMessage, TextInput } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { axiosPost, getString, saveString, useForm } from '../../utils'
import { useDispatch } from 'react-redux'

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = async () => {
    dispatch({ type: 'SET_LOADING', value: true });
    const response = await axiosPost({
      url: 'http://10.3.9.142:8000/api/login',
      data: form,
    });
    if (response.success) {
      saveString('token', response.data.data.access_token);
      console.log(response.data.data.access_token);
      showFlashMessage('SUCCESS LOGIN', 'SUCCESS');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });

    } else {
      console.log(response.message);
      showFlashMessage(response.message, 'ERROR');
    }
    dispatch({ type: 'SET_LOADING', value: false });
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header title='Sign In' subTitle='Find your best ever meal' />
      <View style={styles.container}>
        <TextInput title='Email Address' placeHolder='Type your email address' value={form.email} onChangeText={(value) => setForm('email', value)} />
        <Gap height={12}></Gap>
        <TextInput title='Password' placeHolder='Type your password' isPassword={true} value={form.password} onChangeText={(value) => setForm('password', value)} />
        <Gap height={24}></Gap>
        <Buttons title='Sign in' color='#FFC700' textColor='white' onTap={onSubmit} />
        <Gap height={8}></Gap>
        <Buttons title='Create New Account' color='#f5f5f5' textColor='#FFC700' onTap={() => navigation.navigate('SignUp')} />
      </View>
    </SafeAreaView>
  )
}

export default SignIn

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
    // justifyContent: 'flex-end',
  }
})