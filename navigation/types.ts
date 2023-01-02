import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Form: undefined;
  Plan:  {reload:boolean};
  PlanDay: { Day: string, numDias: number,  reload:boolean};
  Welcome: undefined;
  MealDay: { Tipo: string, Dia: string, numDias: number };
  Meal: { nombre: string , Tipo:string};
  Training: { Dia: string,numDias: number };
  ListExercicies:  {reload:boolean};
  ListMeals: {reload:boolean};
  AddExercicie: undefined;
  AddMeal: undefined;
  Search: undefined;
  ListGym: undefined;
  ExercicieDay: { NombreEjercicio: string };
  ListSupplements: undefined;
  Profile:{success:boolean},
  ProfileEdit: { nombre: any; edad: any; email: any; nivel: any; num_dias: any; peso: any; plan: any; sexo: any; arrayPesos: any, arrayFechas:any, succes:boolean };
  ChangePassword: undefined;
  Weight: undefined;

};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList
>;