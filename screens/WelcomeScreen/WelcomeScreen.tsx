import { StyleSheet, View, Text, Pressable, FlatList, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../utils/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth';
import React, { useState } from 'react';
import styles from './WelcomeStyles'
import { auth } from '../../utils/Firebase'
import UserMethods from '../../APIs/UserApi'
import { Adamina_400Regular } from '@expo-google-fonts/adamina';

const Register = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });




  if (!loaded) {
    return null;
  }


  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.headerLeft}>


        </View>
        <View style={styles.headerRight}>
          <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={styles.icono}></Image>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={{ ...styles.titulo, fontFamily: 'Adamina_400Regular' }}>Bienvenido a Fitrack</Text>
        <View style={styles.contenedor}>


          <Text style={{ ...styles.texto, fontFamily: 'Adamina_400Regular' }}>Desde fitrack te damos las gracias por confiar tu cambio en nosotros .</Text>
          <Text> </Text>
          <Text style={{ ...styles.texto, fontFamily: 'Adamina_400Regular' }}>Aqui podras encontrar miles de recetas y ejercicios adaptados a tus objetivos y a tu nivel.</Text>
          <Text> </Text>
          <Text style={{ ...styles.texto, fontFamily: 'Adamina_400Regular' }}>Ademas de los ejercicios y comidas que te proporcionamos podrás inclir todas las recetas y ejercicios que quieras.</Text>
          <Text> </Text>
          <Text style={{ ...styles.texto, fontFamily: 'Adamina_400Regular' }}>Esperemos que disfrutes de esta aplicacion y recuerda que siempre puedes modificar tus datos desde la sección de usuario.</Text>
        </View>

        <GenericButton text="Empezar el Cambio" action={() => navigation.navigate('Plan', { reload: true })} color='#F8F1CC' />
      </View>
      <View style={styles.pie}>
        <Text style={styles.nombre}> fiTrack </Text>
      </View>
    </View>

  )
}
export default Register;
