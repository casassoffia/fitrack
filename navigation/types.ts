import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Login: undefined;
    Register:undefined;
    Form:undefined;
    Plan: undefined;
  PlanDay: {Day:string}
  
  };

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Login'
>;