import { StyleSheet, View, Text, Pressable, FlatList, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword, sendPasswordResetEmail } from 'firebase/auth';
import styles from './ChangePasswordStyles'
import { initializeApp } from 'firebase/app';
import { db, firebaseConfig } from '../../utils/Firebase';
import React, { useEffect, useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import { collection, query, where } from 'firebase/firestore';




const ChangePassword = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),
    "Adamina_400Regular": Adamina_400Regular,
  });
  if (!loaded) {
    return null;
  }


  const changePassword = async () => {



    console.log(email)
    sendPasswordResetEmail(auth, email).then(() => {
      navigation.navigate('Login')
    })
      .catch((error) => {
        Alert.alert(error.message)
      });



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
        <Text style={{ ...styles.titulo, fontFamily: "Adamina_400Regular" }}> Cambia tu contraseña </Text>
        <TextInput style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} onChangeText={text => setEmail(text.toLowerCase())} value={email} placeholder="Introduce tu correo" ></TextInput>

        <GenericButton text="OK" action={changePassword} color='#F8F1CC' />

        <View style={styles.pie}>
          <Text style={styles.nombre}> fiTrack </Text>
        </View>
      </View>
    </View>


  )
}

export default ChangePassword;