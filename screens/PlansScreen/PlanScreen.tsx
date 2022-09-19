import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import UserMethods from '../../APIs/UserApi/UserApi'



const Plan = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [users, setUsers] = useState([]);
  const auth = getAuth()
  const [num, setNum] = useState(0)

  useEffect(() => {

    UserMethods.getNumDias().then(
      (num_dias) => {
        setNum(num_dias)
        console.log(num_dias)
      }

    )

  }, [])


  const signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        console.log('User signed out!')
        navigation.navigate("Home")
      }
      ).catch((error) => { console.log(error) });
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
        <Text style={styles.titulo}>Estos son los planes de tu semana ...</Text>
        <TouchableOpacity onPress={signOutUser}>
          <Icon name={"log-out-outline"} size={20} color={'white'} />
          <Text >Logout</Text>
        </TouchableOpacity>
        <View style={{
          justifyContent: 'space-between', width: '100%', height: '70%'
        }}>
          {num >= 2 ? (<ButtonDays text="Lunes" action={() => navigation.navigate('PlanDay', { Day: "Lunes" })} />) : null}
          {num >= 2 ? (<ButtonDays text="Martes" action={() => navigation.navigate('PlanDay', { Day: "Martes" })} />) : null}
          {num >= 3 ? (<ButtonDays text="Miercoles" action={() => navigation.navigate('PlanDay', { Day: "Miercoles" })} />) : null}
          {num >= 4 ? (<ButtonDays text="Jueves" action={() => navigation.navigate('PlanDay', { Day: "Jueves" })} />) : null}
          {num >= 5 ? (<ButtonDays text="Viernes" action={() => navigation.navigate('PlanDay', { Day: "Viernes" })} />) : null}

        </View>
        <NavBar></NavBar>
      </View>

    </View >
  )
}

export default Plan;




