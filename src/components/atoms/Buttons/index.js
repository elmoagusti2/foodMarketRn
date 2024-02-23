import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Buttons = ({ title, color, textColor = 'black', onTap }) => {
  return (
    <View >
      <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onTap}>
        <Text style={{ color: textColor }} >{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: 'red',
    paddingVertical: 12,
    alignItems: 'center'
  }
})