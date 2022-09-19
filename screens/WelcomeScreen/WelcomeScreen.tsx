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
import UserMethods from '../../APIs/UserApi/UserApi'
// import AsyncStorage from '@react-native-community/async-storage';

const Register = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');

  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),
  });


  if (!loaded) {
    return null;
  }
  const clearForm = () => {
    setEmail('')
    setPassword('')
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

        <Text style={styles.titulo}>Bienvenido a Fitrack</Text>

        <Text style={styles.titulo}>Esperemos que disfrute de la experiencia</Text>
        {/* <GenericButton text="OK" action={handleCreateAccount}/> */}


        <GenericButton text="Empezar el Cambio" action={() => navigation.navigate('Plan')} />
      </View>
      <View style={styles.pie}>
        <Text style={styles.nombre}> fiTrack </Text>
      </View>
    </View>

  )
}
export default Register;
