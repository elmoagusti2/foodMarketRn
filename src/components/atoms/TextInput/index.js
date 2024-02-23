import { StyleSheet, Text, View, TextInput as TextI, } from 'react-native'
import React from 'react'

const TextInput = ({ title,placeHolder, isPassword = false }) => {
  return (
    <View>
      <Text style={styles.label} >{title}</Text>
      <TextI style={styles.input} placeholder={placeHolder} secureTextEntry={isPassword} />

    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10
  }
})