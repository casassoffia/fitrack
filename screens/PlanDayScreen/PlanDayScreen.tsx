import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './PlanDayStyle'
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
import { PlanButton } from '../../components/PlanButton';
import DropDown from '../../components/DropDown';
import RellenarLunes from '../../APIs/RellenarPlanesLunes';
import RellenarMartes from '../../APIs/RellenarPlanesMartes';
import RellenarMiercoles from '../../APIs/RellenarPlanesMiercoles';
import RellenarJueves from '../../APIs/RellenarPlanesJueves';
import RellenarViernes from '../../APIs/RellenarPlanesViernes';


let options = [{ id: 1, name: 'Desayuno' }, { id: 2, name: 'Comida' }, { id: 3, name: 'Cena' }]
const PlanDay = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route: any = useRoute();
  const [dia, setDia] = useState("")
  const [frase2, setFrase] = useState("")
  let reload = route.params.reload
  let consejo: any
  let lunes = "Lunes", martes = "Martes", miercoles = "Miercoles", jueves = "Jueves", viernes = "Viernes"
  useEffect(() => {
    setDia(route.params.Day)
    UserMethods.consejoAleatorio().then(
      (frase) => {
        console.log("frase")
        console.log(frase.frase)
        setFrase(frase.frase)
        consejo = frase.frase
        console.log(consejo)
      }

    )

    console.log("consejo")
    console.log(consejo)
    // console.log(frase)

    if (lunes.valueOf() == route.params.Day.valueOf()) {

      RellenarLunes.rellenarLunesComida().then(
        () => {

          RellenarLunes.rellenarLunesEjercicio()
        }

      )
    } else if (martes.valueOf() == route.params.Day.valueOf()) {
      RellenarMartes.rellenarMartesComida().then(
        () => {
          RellenarMartes.rellenarMartesEjercicio()
        }

      )
    } else if (miercoles.valueOf() == route.params.Day.valueOf()) {

      RellenarMiercoles.rellenarMiercolesComida().then(
        () => {
          RellenarMiercoles.rellenarMiercolesEjercicio()
        }
      )
    } else if (jueves.valueOf() == route.params.Day.valueOf()) {
      RellenarJueves.rellenarJuevesComida().then(
        () => {
          RellenarJueves.rellenarJuevesEjercicio()
        })
    } else {
      RellenarViernes.rellenarViernesComida().then(
        () => {

          RellenarViernes.rellenarViernesEjercicio()


        })
    }


  }, [reload])
  const [selectedItem, setSelectedItem] = useState('')
  const accion = (item: any) => {
    setSelectedItem(item)
  }




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require("../../assets/imagenes/colorDelLogo.png")} style={styles.forma}></Image>
          <Image source={require("../../assets/imagenes/titulo3.png")} style={styles.nombre}></Image>
        </View>
        <View style={styles.headerRight}>
          <Image source={require("../../assets/imagenes/colorDelLogo.png")}></Image>
          <Image source={require("../../assets/imagenes/iconoTransparente.png")} style={styles.icono}></Image>
        </View>

      </View>

      <View style={styles.body}>
        <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>Rutina del {route.params.Day}</Text>
        </View>
        {(route.params.numDias >= 2 && lunes.valueOf() == route.params.Day.valueOf()) ? (<PlanButton text="Ejercicios" action={() => navigation.navigate('Training', { Dia: route.params.Day })} />) : null}
        {(route.params.numDias >= 4 && martes.valueOf() == route.params.Day.valueOf()) ? (<PlanButton text="Ejercicios" action={() => navigation.navigate('Training', { Dia: route.params.Day })} />) : null}
        {(route.params.numDias >= 2 && miercoles.valueOf() == route.params.Day.valueOf()) ? (<PlanButton text="Ejercicios" action={() => navigation.navigate('Training', { Dia: route.params.Day })} />) : null}
        {(route.params.numDias >= 5 && jueves.valueOf() == route.params.Day.valueOf()) ? (<PlanButton text="Ejercicios" action={() => navigation.navigate('Training', { Dia: route.params.Day })} />) : null}
        {(route.params.numDias >= 3 && viernes.valueOf() == route.params.Day.valueOf()) ? (<PlanButton text="Ejercicios" action={() => navigation.navigate('Training', { Dia: route.params.Day })} />) : null}

        <DropDown text="Alimentos" onSelect={accion} data={options} value={selectedItem} color2='#7DB065' tam='25' color1='#D9EFCF' colorLetra='#ffff' redirigir={true} dia={route.params.Day}></DropDown>
        <View style={styles.paso}>
          <Text style={{ color: '#fff' }}>Consejo!!!</Text>
          <Text>{frase2}</Text>
        </View>

        <NavBar search={false} listExercicies={false} plan={false} listMeals={false} profile={false}></NavBar>
      </View>

    </View >

  )

}

export default PlanDay;




