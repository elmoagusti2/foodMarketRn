import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Buttons, Gap, Header, TextInput } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title='Sign In' subTitle='Find your best ever meal' />
      <View style={styles.container}>
        <TextInput title='Email Address' placeHolder='Type your email address'/>
        <Gap height={12}></Gap>
        <TextInput title='Password' placeHolder='Type your password'/>
        <Gap height={24}></Gap>
        <Buttons title='Sign in' color='#FFC700' textColor='white' />
        <Gap height={8}></Gap>
        <Buttons title='Create New Account' color='#f5f5f5' textColor='#FFC700' onTap={()=>navigation.navigate('SignUp')}/>
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