import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonList } from '../../components/ButtonList';
import styles from './ListMealsStyle'
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
import { Route } from '@react-navigation/native';


import { Adamina_400Regular } from '@expo-google-fonts/adamina'

import { AnyadirButton } from '../../components/AnyadirButton';

import DropDownListado from '../../components/DropDownListado';



const ListMeals = () => {
  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [desayunos, setDesayunos] = useState<any>([])
  const [comidas, setComidas] = useState<any>([])
  const [cenas, setCenas] = useState<any>([])


  useEffect(() => {
    setIsLoading(true)
    UserMethods.getNombresAlimentos("desayunos").then(
      (desa) => {
        setDesayunos(desa)
        UserMethods.getNombresAlimentos("comidas").then(
          (comi) => {
            setComidas(comi)
            UserMethods.getNombresAlimentos("cenas").then(
              (cena) => {
                setCenas(cena)
              }
            )
          }

        )

      }

    ).finally(() => setIsLoading(false))

  }, [])
  const [desayuno, setDesayuno] = useState('')
  const [comida, setComida] = useState('')
  const [cena, setCena] = useState('')

  const accion = (item: any) => {
    setDesayuno(item)
  }
  const accion2 = (item: any) => {
    setComida(item)
  }
  const accion3 = (item: any) => {
    setCena(item)
  }


  if (!loaded) {
    return null;
  }


  return (
    <><ScrollView style={{ height: '100%' }}>
      <View style={styles.container}>
        {isLoading ?
          (<View style={styles.Spinner}><ActivityIndicator /></View>) :
          (<View style={styles.container}>
            <View style={styles.header}>

              <Image source={require("../../assets/imagenes/cabecera2.png")} style={styles.forma}></Image>
              <Text style={{ ...styles.nombreTitulo, fontFamily: "Adamina_400Regular" }}>Coge más ideas para </Text>
              <Text style={{ ...styles.nombreTitulo, marginTop: 230, fontFamily: "Adamina_400Regular" }}> tus comidas</Text>
            </View>

            <View style={styles.body}>

              <DropDownListado text="Desayunos" onSelect={accion} data={desayunos.valueOf()} value={desayuno} view={"Comida"} ></DropDownListado>
              <DropDownListado text="Comidas" onSelect={accion2} data={comidas.valueOf()} value={comida} view={"Comida"}  ></DropDownListado>
              <DropDownListado text="Cenas" onSelect={accion3} data={cenas.valueOf()} value={cena} view={"Comida"} ></DropDownListado>

              <AnyadirButton text="Añadir Receta" action={() => navigation.navigate('AddMeal')} />

            </View>
          </View>)}

      </View>

    </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <NavBar search={false} listExercicies={false} plan={false} listMeals={true} profile={false}></NavBar>
      </View></>


  )

}

export default ListMeals;




