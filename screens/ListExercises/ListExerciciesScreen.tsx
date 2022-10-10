import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonList } from '../../components/ButtonList';
import styles from './ListExerciciesStyle'
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



const ListExercicies = () => {
  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [ejerciciosPierna, setEjerciciosPierna] = useState<any>([])
  const [ejerciciosHombro, setEjerciciosHombro] = useState<any>([])
  const [ejerciciosBiceps, setEjerciciosBiceps] = useState<any>([])
  const [ejerciciosTriceps, setEjerciciosTriceps] = useState<any>([])
  const [ejerciciosEspalda, setEjerciciosEspalda] = useState<any>([])
  const [ejerciciosGlueto, setEjerciciosGlueto] = useState<any>([])
  const [ejerciciosPecho, setEjerciciosPecho] = useState<any>([])

  useEffect(() => {


    UserMethods.getNombresEjerciciosporTipo("Hombro").then(
      (ejercicios) => {
        setEjerciciosHombro(ejercicios)
        UserMethods.getNombresEjerciciosporTipo("Pierna").then(
          (ejerciciosP) => {
            setEjerciciosPierna(ejerciciosP)
            UserMethods.getNombresEjerciciosporTipo("Biceps").then(
              (ejerciciosB) => {
                setEjerciciosBiceps(ejerciciosB)
                UserMethods.getNombresEjerciciosporTipo("Triceps").then(
                  (ejerciciosT) => {
                    setEjerciciosTriceps(ejerciciosT)
                    UserMethods.getNombresEjerciciosporTipo("Espalda").then(
                      (ejerciciosE) => {
                        setEjerciciosEspalda(ejerciciosE)
                        UserMethods.getNombresEjerciciosporTipo("Gluteo").then(
                          (ejerciciosG) => {
                            setEjerciciosGlueto(ejerciciosG)
                            UserMethods.getNombresEjerciciosporTipo("Pecho").then(
                              (ejerciciosPc) => {
                                console.log(ejerciciosPc)
                                setEjerciciosPecho(ejerciciosPc)
                              })
                          }
                        )
                      }
                    )
                  }
                )
              }
            )
          }

        )

      }

    )

  }, [])
  const [ejercicioHombro, setEjercicioHombro] = useState('')
  const [ejercicioEspalda, setEjercicioEspalda] = useState('')
  const [ejercicioBiceps, setEjercicioBiceps] = useState('')
  const [ejercicioTriceps, setEjercicioTriceps] = useState('')
  const [ejercicioPiernas, setEjercicioPiernas] = useState('')
  const [ejercicioGluteo, setEjercicioGlueto] = useState('')
  const [ejercicioPecho, setEjercicioPecho] = useState('')
  const accion = (item: any) => {

    setEjercicioHombro(item)
  }
  const accion2 = (item: any) => {
    setEjercicioEspalda(item)
  }
  const accion3 = (item: any) => {
    setEjercicioBiceps(item)
  }
  const accion4 = (item: any) => {
    setEjercicioTriceps(item)
  }
  const accion5 = (item: any) => {
    setEjercicioPiernas(item)
  }
  const accion6 = (item: any) => {
    setEjercicioGlueto(item)
  }
  const accion7 = (item: any) => {
    setEjercicioPecho(item)
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

          <DropDownListado text="Hombro" onSelect={accion} data={ejerciciosHombro.valueOf()} value={ejercicioHombro}  ></DropDownListado>
          <DropDownListado text="Espalda" onSelect={accion2} data={ejerciciosEspalda.valueOf()} value={ejercicioEspalda}  ></DropDownListado>
          <DropDownListado text="Biceps" onSelect={accion3} data={ejerciciosBiceps.valueOf()} value={ejercicioBiceps}  ></DropDownListado>
          <DropDownListado text="Triceps" onSelect={accion4} data={ejerciciosTriceps.valueOf()} value={ejercicioTriceps}  ></DropDownListado>
          <DropDownListado text="Pecho" onSelect={accion7} data={ejerciciosPecho.valueOf()} value={ejercicioPecho}  ></DropDownListado>
          <DropDownListado text="Pierna" onSelect={accion5} data={ejerciciosPierna.valueOf()} value={ejercicioPiernas}  ></DropDownListado>
          <DropDownListado text="Glúteo" onSelect={accion6} data={ejerciciosGlueto.valueOf()} value={ejercicioGluteo}  ></DropDownListado>

          <AnyadirButton text="Añadir Ejercicio" action={() => navigation.navigate('AddExercicie')} />

        </View>


      </View>

    </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <NavBar></NavBar>
      </View></>


  )

}

export default ListExercicies;




