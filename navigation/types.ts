import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Form: undefined;
  Plan:  {reload:boolean};
  PlanDay: { Day: string, numDias: number,  reload:boolean};
  Welcome: undefined;
  MealDay: { Tipo: string, Dia: string };
  Meal: { nombre: string , Tipo:string};
  Training: { Dia: string };
  ListExercicies:  {reload:boolean};
  ListMeals: {reload:boolean};
  AddExercicie: undefined;
  AddMeal: undefined;
  Search: undefined;
  ListGym: undefined;
  ExercicieDay: { NombreEjercicio: string };
  ListSupplements: undefined;
  Card: undefined;
  Profile:{success:boolean},
  ProfileEdit: { nombre: any; edad: any; email: any; nivel: any; num_dias: any; peso: any; plan: any; sexo: any; },
  ChangePassword: undefined;

};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList
>;