import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import RegistroScreen from "../Screens/RegistroScreen";
import ProductosScreen from "../Screens/ProductosScreen";
import CarritoScreen from "../Screens/CarritoScreen";
import CuentaScreen from "../Screens/CuentaScreen"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Productos" component={ProductosScreen} />
            <Tab.Screen name="Carrito" component={CarritoScreen} />
            <Tab.Screen name="Cuenta" component={CuentaScreen} />
        </Tab.Navigator>
    )
}

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="HOMETAB" component={MyTabs} />
        </Stack.Navigator>
    )
}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}