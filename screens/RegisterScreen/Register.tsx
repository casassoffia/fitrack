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
import styles from './RegisterStyles'
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
  const handleCreateAccount = () => {
    console.log("registro")
    console.log(auth)
    console.log(email)
    console.log(password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // clearForm();

        console.log('Accout created!')
        UserMethods.sendNameData(nombre, email, password)
        const user = userCredential.user;
        console.log(user)
        navigation.navigate("Form")
      })
      .catch(error => {
        console.log(email)
        console.log(password)

        console.log(error)
      })
  }
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.headerLeft}>
          <Text style={{ marginTop: 30 }}>
            <Icon name="chevron-back-outline" size={30} color="#fff" onPress={() => navigation.navigate('Home')} ></Icon>
          </Text>

        </View>
        <View style={styles.headerRight}>
          <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={styles.icono}></Image>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView style={{ width: '100%' }} >
          <Text style={styles.titulo}>Rellena la siguiente información </Text>
          <TextInput onChangeText={text => setNombre(text)} style={styles.textInput} value={nombre} placeholder="Nombre Usuario"></TextInput>
          <TextInput onChangeText={text => setEmail(text)} style={styles.textInput} value={email} placeholder="Correo Electronico"></TextInput>
          <TextInput onChangeText={text => setPassword(text)} style={styles.textInput} value={password} placeholder="Contraseña" secureTextEntry></TextInput>
          <TextInput style={styles.textInput} placeholder="Confirmacion de contraseña" secureTextEntry></TextInput>
          {/* <GenericButton text="OK" action={handleCreateAccount}/> */}
          <TouchableOpacity onPress={() => handleCreateAccount()} style={{
            ...styles.button,
            backgroundColor: '#F8F1CC',
            marginTop: 20
          }}>
            <Text style={styles.buttonText}>OK</Text></TouchableOpacity>
        </ScrollView>
        {/* <GenericButton text="OK" action={() => navigation.navigate('Form')}/> */}
      </View>
      <View style={styles.pie}>
        <Text style={styles.nombre}> fiTrack </Text>
      </View>
    </View>

  )
}
export default Register;
