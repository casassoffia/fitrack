import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/Home'
import LoginScreen from '../screens/LoginScreen/Login'
import RegisterScreen from '../screens/RegisterScreen/Register'
import FormScreen from '../screens/FormScreen/FormScreen'
import PlanScreen from '../screens/PlansScreen/PlanScreen'
import PlanDayScreen from '../screens/PlanDayScreen/PlanDayScreen'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'
import { HomeStackNavigatorParamList } from './types';



const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>

            <HomeStack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <HomeStack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <HomeStack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
            <HomeStack.Screen name="Form" options={{ headerShown: false }} component={FormScreen} />
            <HomeStack.Screen name="Plan" options={{ headerShown: false }} component={PlanScreen} />
            <HomeStack.Screen name="PlanDay" options={{ headerShown: false }} component={PlanDayScreen} />
            <HomeStack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        </HomeStack.Navigator>
    )
}
export default HomeStackNavigator;