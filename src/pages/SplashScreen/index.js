import { SafeAreaView, Text, View, useColorScheme } from "react-native";
import { Store } from "../../assets";
import { useEffect } from "react";
import { getString } from "../../utils";
import { showFlashMessage } from "../../components";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        try {
            const token = getString('token');
            if (token) {
                setTimeout(() => {
                    navigation.replace('Main');
                }, 1000);
            } else {
                setTimeout(() => {
                    navigation.replace('SignIn');
                }, 1000);
            }
        } catch (err) {
            showFlashMessage(err.message, 'ERROR');
            setTimeout(() => {
                navigation.replace('SignIn');
            }, 0);
        }
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
