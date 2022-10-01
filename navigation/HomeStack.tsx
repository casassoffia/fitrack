import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/Home'
import LoginScreen from '../screens/LoginScreen/Login'
import RegisterScreen from '../screens/RegisterScreen/Register'
import FormScreen from '../screens/FormScreen/FormScreen'
import PlanScreen from '../screens/PlansScreen/PlanScreen'
import PlanDayScreen from '../screens/PlanDayScreen/PlanDayScreen'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'
import MealDayScreen from '../screens/MealDayScreen/MealDayScreen'
import TrainingScreen from '../screens/TrainingScreen/TrainingScreen'
import ListExerciciesScreen from '../screens/ListExercises/ListExerciciesScreen'
import ListMealsScreen from '../screens/ListMealScreen/ListMealsScreen'
import AddExercicieScreen from '../screens/AddExercicieScreen/AddExercicieScreen'
import AddMealScreen from '../screens/AddEMealScreen/AddMealScreen'

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
            <HomeStack.Screen name="MealDay" options={{ headerShown: false }} component={MealDayScreen} />
            <HomeStack.Screen name="Training" options={{ headerShown: false }} component={TrainingScreen} />
            <HomeStack.Screen name="ListExercicies" options={{ headerShown: false }} component={ListExerciciesScreen} />
            <HomeStack.Screen name="ListMeals" options={{ headerShown: false }} component={ListMealsScreen} />
            <HomeStack.Screen name="AddMeal" options={{ headerShown: false }} component={AddMealScreen} />
            <HomeStack.Screen name="AddExercicie" options={{ headerShown: false }} component={AddExercicieScreen} />
        </HomeStack.Navigator>
    )
}
export default HomeStackNavigator;