import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './TrainingStyle'
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
import UserMethods from '../../APIs/UserApi/UserApi'
import { Route } from '@react-navigation/native';
import { PlanButton } from '../../components/PlanButton';

import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import {
  MontserratSubrayada_400Regular,
  MontserratSubrayada_700Bold
} from '@expo-google-fonts/montserrat-subrayada'


let options = [{ id: 1, name: 'Desayuno' }, { id: 2, name: 'Comida' }, { id: 3, name: 'Cena' }]
const Training = () => {
  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,

  });

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route: any = useRoute();
  const [dia, setDia] = useState("")
  // let ejerciciosDelUsuario = []
  console.log("route.params.Day")
  console.log(route.params.Dia)
  const [ejerciciosDelUsuario, setEjerciciosDelUsuario] = useState<any>([])
  let nombresDeEjercicios: any[] = []
  const [recetaDesayuno, setRecetaDesayuno] = useState<any>([])
  useEffect(() => {
    setDia(route.params.Day)

    UserMethods.getEjerciciosFromUser(route.params.Dia).then(
      (ejercicios) => {


        UserMethods.getNombresEjercicios(ejercicios).then(
          (nombres) => {
            nombresDeEjercicios = nombres
            setEjerciciosDelUsuario(nombresDeEjercicios)

          }
        )

      }

    )

  }, [])
  const [selectedItem, setSelectedItem] = useState('')
  const accion = (item: any) => {
    setSelectedItem(item)
  }

  if (!loaded) {
    return null;
  }


  return (
    <><ScrollView style={{ height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../../assets/imagenes/pruebaCabecera.png")} style={styles.forma}></Image>
        </View>

        <View style={styles.body}>


          <View style={styles.contenedor}>
            <View style={styles.contenedorInterior}>
              <Text style={{ ...styles.textoInterior, fontFamily: "Adamina_400Regular" }}>Se deberan hacer 4 series de cada ejercicio.Las repeticiones en cada una de las series son 15-12-10-8, aumentando el peso en cada una de ellas.</Text>
              <Text style={{ ...styles.textoInterior, marginRight: '20%', fontFamily: "Adamina_400Regular" }}>En el apartado de ejercicios se explican cada uno de ellos y la forma de ejecutarlos.</Text>
            </View>

          </View>
          {ejerciciosDelUsuario.map((nombre: any, key: any) => <View key={key} style={styles.contenedorNombre}>
            <Text style={{ ...styles.textoNombre, fontFamily: "Adamina_400Regular" }}>{nombre}</Text>

          </View>
          )}


        </View>


      </View>

    </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <NavBar></NavBar>
      </View></>


  )

}

export default Training;




