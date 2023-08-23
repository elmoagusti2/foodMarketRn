import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Logo } from '../../assets';
function SplashScreen(): JSX.Element {
    return (
        <SafeAreaView
            style={{
                backgroundColor: '#FFC700',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Logo />
            <View style={{ height: 16 }} />
            <Text style={{ fontSize: 32, color: '#020202', fontFamily:'Poppins-Medium' }} >FoodMarket</Text>
        </SafeAreaView>
    );
}
export default SplashScreen;

