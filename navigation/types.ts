import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Form: undefined;
  Plan: undefined;
  PlanDay: { Day: string };
  Welcome: undefined;
  MealDay: { Tipo: string, Dia: string };
  Training: { Dia: string };
  ListExercicies: undefined;
  ListMeals: undefined;
  AddExercicie: undefined;
  AddMeal: undefined;
  Search: undefined;
  ListGym: undefined;
  ExercicieDay: { NombreEjercicio: string };
  ListSupplements: undefined;
  Card: undefined;

};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Login'
>;