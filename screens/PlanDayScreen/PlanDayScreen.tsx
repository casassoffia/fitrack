import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
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
import UserMethods from '../../APIs/UserApi/UserApi'
import { Route } from '@react-navigation/native';
import { PlanButton } from '../../components/PlanButton';
import DropDown from '../../components/DropDown';


let options = [{ id: 1, name: 'Desayuno' }, { id: 2, name: 'Comida' }, { id: 3, name: 'Cena' }]
const PlanDay = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route: any = useRoute();
  const [selectedItem, setSelectedItem] = useState('')
  const accion = (item: any) => {
    setSelectedItem(item)
  }
  const dia =
    // const state = props.navigation
    useEffect(() => {
      console.log()


    }, [])
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

        <PlanButton text="Ejercicios" action={() => navigation.navigate('Home')} />
        <DropDown text="Alimentos" onSelect={accion} data={options} value={selectedItem} color2='#7DB065' tam='25' color1='#D9EFCF' colorLetra='#ffff' redirigir={true}  ></DropDown>


        <NavBar></NavBar>
      </View>

    </View >
  )
}

export default PlanDay;




