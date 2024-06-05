import { createStackNavigator } from "@react-navigation/stack";
import { Cart, DetailProduct, Home, Profile, SignIn, SignUp, SignUpAddress, SignUpFinish, SplashScreen, TransactionFinish, TransactionPage } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#FFC700',
            }}  >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Cart" component={Cart} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="shopping" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
            <stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
            <stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <stack.Screen name='SignUpAddress' component={SignUpAddress} options={{ headerShown: false }} />
            <stack.Screen name='SignUpFinish' component={SignUpFinish} options={{ headerShown: false }} />
            <stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
            <stack.Screen name='DetailProduct' component={DetailProduct} options={{ headerShown: false }} />
            <stack.Screen name='Transaction' component={TransactionPage} options={{ headerShown: false }} />
            <stack.Screen name='TransactionFinish' component={TransactionFinish} options={{ headerShown: false }} />
        </stack.Navigator>
    );
}

export default Router;