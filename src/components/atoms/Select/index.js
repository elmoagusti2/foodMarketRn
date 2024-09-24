import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const Select = ({ title, options, selectedValue, onValueChange }) => {
    return (
        <View>
            <Text style={styles.label} >{title}</Text>
            <View style={styles.input} >
                <Picker style={{
                    color: 'black'
                }} dropdownIconColor={'grey'}
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}>
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option.label} value={option.value} />
                    ))}
                </Picker>
            </View>
        </View>
    )
}
export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    input: {
        borderColor: '#020202',
        borderWidth: 1,
        borderRadius: 12,
        height: 50
    }
})