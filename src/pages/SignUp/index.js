import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Buttons, Gap, Header, TextInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title='Register' subTitle='Register User' onBack={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }} >
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <View style={styles.addPhoto} >
                  <Text>Add Photo</Text>
                </View>
              </View>
            </View>
            <Gap height={12}></Gap>
          </View>
          <TextInput title='Full Name' placeHolder='Type your name' />
          <Gap height={12}></Gap>
          <TextInput title='Email Address' placeHolder='Type your email address' />
          <Gap height={12}></Gap>
          <TextInput title='Password' placeHolder='Type your password' />
          <Gap height={24}></Gap>
          <Buttons title='Continue' color='#FFC700' textColor='white' onTap={()=>navigation.navigate('SignUpAddress')}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

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
  borderPhoto: {
    width: 100,
    height: 100,
    borderRadius: 90,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    textAlign: 'center'
  },

})