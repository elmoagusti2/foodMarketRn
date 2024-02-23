import { SafeAreaView, Text, View, useColorScheme } from "react-native";
import { Store } from "../../assets";
import { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 2000);
    });

    return <SafeAreaView style={{
        backgroundColor: '#FFC700', justifyContent: 'center', alignItems: 'center', flex: 1,
    }} >
        <Store />
        <View style={{ height: 38 }} />
        <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: 'bold', fontSize: 32, color: '#020202' }} >
            FoodMarket
        </Text>
    </SafeAreaView >
}

export default SplashScreen;
