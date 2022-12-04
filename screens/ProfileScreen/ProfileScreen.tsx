import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './ProfileStyle'
import firestore from '@react-native-firebase/firestore'
import React, { useCallback, useEffect, useRef, useState } from 'react';


import { auth, db, firebaseConfig } from '../../utils/Firebase';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, getDoc, where, DocumentData } from 'firebase/firestore';
import NavBar from '../../components/NavBar';

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
  const [email, setEmail] = useState('')
  const [nivel, setNivel] = useState('')
  const [edad, setEdad] = useState(0)
  const [num_dias, setNumDias] = useState(0)
  const [peso, setPeso] = useState(0)
  const [arrayPesos, setArrayPesos] = useState<any>()
  const [arrayFechas, setArrayFechas] = useState<any>()
  const [plan, setPlan] = useState('')
  const [sexo, setSexo] = useState('')


  const route: any = useRoute();
  let success = route.params.success

  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });

  useEffect(() => {
    UserApi.getUsuarioRegistrado().then(
      (usuarioDevuelto) => {

        setNombre(usuarioDevuelto.nombre)
        setEmail(usuarioDevuelto.email)
        setNivel(usuarioDevuelto.nivel)
        setEdad(usuarioDevuelto.edad)
        setNumDias(usuarioDevuelto.num_dias)
        setPeso(usuarioDevuelto.lastPeso)
        setPlan(usuarioDevuelto.plan)
        setSexo(usuarioDevuelto.sexo)
        setArrayPesos(usuarioDevuelto.arrayPeso)
        console.log("arrayPesos desde el perfil")
        console.log(arrayPesos)
        setArrayFechas(usuarioDevuelto.arrayFechas)

      }
    )


  }, [success])
  const [selectedItem, setSelectedItem] = useState<DocumentData>()
  const accion = (item: any) => {
    setSelectedItem(item)
  }


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
    <><ScrollView style={{ height: '100%' }}>
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
          <Text style={{ ...styles.nombreTitulo, fontFamily: "Adamina_400Regular" }}>{nombre}</Text>
        </View>

        <View style={styles.body}>

          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Nombre: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{nombre} </Text>
            </View>
          </View>
          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Edad: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{edad} </Text>
            </View>
          </View>
          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Email: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{email} </Text>
            </View>
          </View>
          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Objetivo: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{plan} </Text>
            </View>
          </View>
          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Nº de dias a la semana de entreno: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{num_dias} </Text>
            </View>
          </View>
          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Nivel: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{nivel} </Text>
            </View>
          </View>
          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Peso actual: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{peso} </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Weight')}
              style={{ alignItems: 'center', marginTop: 10 }}
            >



              <Text style={{
                color: '#ffff', fontFamily: 'Adamina_400Regular'

              }}>
                Ver historial del peso
              </Text>


            </TouchableOpacity>
          </View>

          <View style={styles.paso}>
            <Text style={{ ...styles.textoRecuadroFuera, fontFamily: "Adamina_400Regular" }}>Sexo: </Text>
            <View style={styles.paso2}>
              <Text style={{ ...styles.textoRecuadro, fontFamily: "Adamina_400Regular" }}>{sexo} </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileEdit', { nombre: nombre, edad: edad, email: email, nivel: nivel, num_dias: num_dias, peso: peso, plan: plan, sexo: sexo, arrayPesos: arrayPesos, arrayFechas: arrayFechas, succes: success })}
            style={{
              ...styles.button,
              backgroundColor: '#EFE6CF',

              borderRadius: 50,

            }}
          >

            <View style={{ ...styles.circulo }}>
              <Icon2 type='font-awesome' name="edit" color="#613000" style={{}}></Icon2>
            </View>

            <Text style={{
              ...styles.buttonText, fontFamily: 'Adamina_400Regular'

            }}>
              Editar
            </Text>


          </TouchableOpacity>
          <TouchableOpacity onPress={(signOutUser)}
            style={{ marginTop: 100, marginRight: 50 }}
          >



            <Text style={{
              ...styles.buttonTextOut, fontFamily: 'Adamina_400Regular'

            }}>
              LogOut
            </Text>


          </TouchableOpacity>
        </View>

      </View >


    </ScrollView>
      <View style={{ alignItems: 'center' }}>
        <NavBar search={false} listExercicies={false} plan={false} listMeals={false} profile={true}></NavBar>
      </View></>

  )

}

export default Profile;




