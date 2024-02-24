import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, SignUp, SignUpAddress, SignUpFinish, SplashScreen } from "../pages";

const stack = createStackNavigator();

const Router = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
            <stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
            <stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <stack.Screen name='SignUpAddress' component={SignUpAddress} options={{ headerShown: false }} />
            <stack.Screen name='SignUpFinish' component={SignUpFinish} options={{ headerShown: false, }} />
        </stack.Navigator>
    );
}

export default Router;