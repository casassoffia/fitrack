import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
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
import UserMethods from '../../APIs/UserApi/UserApi'
import { Route } from '@react-navigation/native';


import { Adamina_400Regular } from '@expo-google-fonts/adamina'

import { AnyadirButton } from '../../components/AnyadirButton';

import DropDownListado from '../../components/DropDownListado';



const ListMeals = () => {
  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [desayunos, setDesayunos] = useState<any>([])
  const [comidas, setComidas] = useState<any>([])
  const [cenas, setCenas] = useState<any>([])


  useEffect(() => {

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

    )

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
        <View style={styles.header}>
          <Image source={require("../../assets/imagenes/pruebaCabecera.png")} style={styles.forma}></Image>
        </View>

        <View style={styles.body}>

          <DropDownListado text="Desayunos" onSelect={accion} data={desayunos.valueOf()} value={desayuno}  ></DropDownListado>
          <DropDownListado text="Comidas" onSelect={accion2} data={comidas.valueOf()} value={comida}  ></DropDownListado>
          <DropDownListado text="Cenas" onSelect={accion3} data={cenas.valueOf()} value={cena}  ></DropDownListado>

          <AnyadirButton text="Añadir Receta" action={() => navigation.navigate('AddMeal')} />

        </View>


      </View>

    </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <NavBar></NavBar>
      </View></>


  )

}

export default ListMeals;




