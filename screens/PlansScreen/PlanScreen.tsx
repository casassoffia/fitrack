import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './PlanStyle'
import firestore from '@react-native-firebase/firestore'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth, db, firebaseConfig } from '../../utils/Firebase';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, getDoc, where } from 'firebase/firestore';
import NavBar from '../../components/NavBar';
import { Button } from '@rneui/themed';
import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from 'firebase/auth';
import UserMethods from '../../APIs/UserApi'
import { Adamina_400Regular } from '@expo-google-fonts/adamina'


const Plan = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [users, setUsers] = useState([]);
  const auth = getAuth()
  const [num, setNum] = useState(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const route: any = useRoute();
  let reload = route.params.reload
  useEffect(() => {
    setIsLoading(true)
    UserMethods.getNumDias().then(
      (num_dias) => {
        setNum(num_dias)

      }

    ).finally(() => setIsLoading(false))

  }, [route])
  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });
  if (!loaded) {
    return null;
  }

  return (

    <View style={styles.container}>
      {isLoading ?
        (<View style={styles.Spinner}><ActivityIndicator /></View>) :
        (<View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={require("../../assets/imagenes/colorDelLogo.png")} style={styles.forma}></Image>
              <Image source={require("../../assets/imagenes/titulo3.png")} style={styles.nombre}></Image>
            </View>
            <View style={styles.headerRight}>
              <Image source={require("../../assets/imagenes/colorDelLogo.png")}></Image>
              <Image source={require("../../assets/imagenes/iconoTransparente.png")} style={styles.icono}></Image>
            </View>
            <Text style={{ ...styles.nombreTitulo, fontFamily: "Adamina_400Regular" }}>Estos son los planes de tu semana ...</Text>
          </View>

          <View style={styles.body}>


            <View style={{
              justifyContent: 'space-between', width: '100%', height: '70%'
            }}>
              <ButtonDays text="Lunes" action={() => navigation.navigate('PlanDay', { Day: "Lunes", numDias: num, reload: true })}></ButtonDays>
              <ButtonDays text="Martes" action={() => navigation.navigate('PlanDay', { Day: "Martes", numDias: num, reload: true })} ></ButtonDays>
              <ButtonDays text="Miercoles" action={() => navigation.navigate('PlanDay', { Day: "Miercoles", numDias: num, reload: true })} />
              <ButtonDays text="Jueves" action={() => navigation.navigate('PlanDay', { Day: "Jueves", numDias: num, reload: true })} />
              <ButtonDays text="Viernes" action={() => navigation.navigate('PlanDay', { Day: "Viernes", numDias: num, reload: true })} />

            </View>
            <NavBar search={false} listExercicies={false} plan={true} listMeals={false} profile={false}></NavBar>
          </View>
        </View>)}
    </View >
  )
}

export default Plan;




