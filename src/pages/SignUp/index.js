import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { React, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Buttons, Gap, Header, showFlashMessage, TextInput } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { axiosPost, useForm } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios'
import { storage, URL_USERPHOTO } from '../../config/url'

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [form, setform] = useForm({
    name: '',
    email: '',
    password: '',
    profile_photo_path: '',
  });

  const onSubmit = () => {
    // setform('password_confirmation', form.password)
    dispatch({ type: 'SET_REGISTER', value: form });
    navigation.navigate('SignUpAddress');
    console.log(form);
  };

  // useEffect(() => {
  //   if (form.password_confirmation) {
  //     dispatch({ type: 'SET_REGISTER', value: form });
  //     navigation.navigate('SignUpAddress');
  //     console.log(form);
  //   }
  // }, [form]);



  const onUploadImage = async () => {
    dispatch({ type: 'SET_LOADING', value: true });
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        quality: 1,
      };
      // Use the promise structure to await the result of launchImageLibrary
      const response = await launchImageLibrary(options);
      if (response.didCancel || response.errorCode) {
        console.log('User did not select any image or an error occurred');
        return;
      }

      const formData = new FormData();
      formData.append('file', {
        uri: response.assets[0].uri,
        type: response.assets[0].type || 'image/jpeg',
        name: response.assets[0].fileName || 'photo.jpg',
      });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const res = await axiosPost({
        url: URL_USERPHOTO, data: formData, config: config
      });
      if (res.success) {
        setform('profile_photo_path', res.data.data);
        showFlashMessage(res.data.meta?.message || 'Change profile success', 'SUCCESS');
      } else {
        showFlashMessage(res.data.meta?.message || 'unexcepted error', 'ERROR');
      }
    } catch (error) {
      console.log('Error picking image:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });

    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header title='Register' subTitle='Register User' onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onUploadImage}>
            <View style={{ alignItems: 'center' }} >
              <View style={styles.borderPhoto}>
                {form.profile_photo_path ?
                  (<Image source={{ uri: `${storage}${form.profile_photo_path}` }} style={styles.photoContainer} />)
                  : (<View style={styles.photoContainer}>
                    <View style={styles.addPhoto} >
                      <Text>add photo</Text>
                    </View>
                  </View>)}
              </View>
              <Gap height={12}></Gap>
            </View>
          </TouchableOpacity>
          <TextInput title='Full Name' placeHolder='Type your name'
            value={form.name} onChangeText={(value) => setform('name', value)} />
          <Gap height={12}></Gap>
          <TextInput title='Email Address' placeHolder='Type your email address'
            value={form.email} onChangeText={(value) => setform('email', value)} />
          <Gap height={12}></Gap>
          <TextInput title='Password' placeHolder='Type your password'
            value={form.password} onChangeText={(value) => setform('password', value)} />
          <Gap height={24}></Gap>
          <Buttons title='Continue' color='#FFC700' textColor='white' onTap={onSubmit} />
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