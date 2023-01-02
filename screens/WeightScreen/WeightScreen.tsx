import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './WeightStyle'
import firestore from '@react-native-firebase/firestore'
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { auth, db, firebaseConfig } from '../../utils/Firebase';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, getDoc, where, DocumentData, Timestamp } from 'firebase/firestore';
import NavBar from '../../components/NavBar';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from 'firebase/auth';
import UserMethods from '../../APIs/UserApi'
import { Route } from '@react-navigation/native';
import { PlanButton } from '../../components/PlanButton';
import DropDown from '../../components/DropDown';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import UserApi from '../../APIs/UserApi';
import { Icon as Icon2 } from '@rneui/themed';


const Profile = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [nombre, setNombre] = useState('')


  const [pesos, setPesos] = useState<any>([])
  let arrayPeso: Array<any> = []
  let arrayFechas: Array<Date> = []
  const [fechas, setFechas] = useState<any>([])
  const route: any = useRoute();



  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });

  useEffect(() => {
    UserApi.getUsuarioRegistrado().then(
      (usuarioDevuelto) => {

        setNombre(usuarioDevuelto.nombre)

        arrayPeso = usuarioDevuelto.arrayPeso
        arrayFechas = usuarioDevuelto.arrayFechas
        setPesos(arrayPeso)
        setFechas(arrayFechas)


      }
    )


  }, [])


  if (!loaded) {
    return null;
  }


  return (
    <><ScrollView style={{ height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.headerLeft}>
            <Image source={require("../../assets/imagenes/colorDelLogo.png")} style={styles.forma}></Image>

            <Image source={require("../../assets/imagenes/titulo3.png")} style={styles.nombre}></Image>
            <Text style={{ ...styles.iconoAtras }}>
              <Icon name="chevron-back-outline" size={30} color="#95520e" onPress={() => navigation.navigate('Profile', { success: false })} ></Icon>
            </Text>

          </View>
          <View style={styles.headerRight}>
            <Image source={require("../../assets/imagenes/colorDelLogo.png")}></Image>
            <Image source={require("../../assets/imagenes/iconoTransparente.png")} style={styles.icono}></Image>
          </View>
          <Text style={{ ...styles.nombreTitulo, fontFamily: "Adamina_400Regular" }}>{nombre}</Text>
        </View>

        <View style={styles.body}>


          <View style={styles.table}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
              <Text style={{ ...styles.tituloTabla, fontFamily: "Adamina_400Regular" }}> Fecha  </Text>
              <Text style={{ ...styles.tituloTabla, fontFamily: "Adamina_400Regular" }}> Peso  </Text>

            </View>
            <Text style={{ color: '#DFCC7F' }}>------------------------------------------------------</Text>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ flexDirection: 'column', }}>
                {fechas.map((fecha: any, id2: any) =>
                  <View key={id2}>
                    <Text></Text>
                    <Text style={{ ...styles.textoTabla, marginLeft: 40, fontFamily: "Adamina_400Regular" }}>{JSON.stringify(fecha.toDate()).substring(9, 11)}-{JSON.stringify(fecha.toDate()).substring(6, 8)}-{JSON.stringify(fecha.toDate()).substring(1, 5)} </Text>

                  </View>)}
              </View>
              <View style={{ flexDirection: 'column', }}>
                {pesos.map((peso: any, id2: any) =>
                  <View key={id2}>
                    <Text></Text>
                    <Text style={{ ...styles.textoTabla, marginLeft: 85, fontFamily: "Adamina_400Regular" }}>{peso} Kg</Text>

                  </View>)}
              </View>

            </View>

          </View>








        </View>

      </View >


    </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <NavBar search={false} listExercicies={false} plan={false} listMeals={false} profile={true}></NavBar>
      </View></>

  )

}

export default Profile;




