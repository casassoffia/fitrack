import { StyleSheet, View, Text, Pressable, FlatList, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import styles from './LoginStyles'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../utils/Firebase';
import React, { useEffect, useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'




const Login = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),
    "Adamina_400Regular": Adamina_400Regular,
  });
  if (!loaded) {
    return null;
  }


  const handleSignIn = async () => {
    if (email.valueOf() != '' && password.valueOf() != '') {
      await signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {

          const user = userCredential.user;
          navigation.navigate("Plan", { reload: false })
        })
        .catch(error => {

          Alert.alert(error.message)

        })
    } else {
      Alert.alert("No puedes dejar ninguno de los campos vacios")

    }

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
        <Text style={{ ...styles.titulo, fontFamily: "Adamina_400Regular" }}> Bienvenid@ de nuevo </Text>
        <TextInput style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} onChangeText={(text => setEmail(text.toLowerCase()))} value={email} placeholder="Correo Electronico"></TextInput>
        <TextInput style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} onChangeText={text => setPassword(text)} value={password} placeholder="Contraseña" secureTextEntry></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}
          style={{ marginTop: 20, width: 170, marginLeft: 70, alignItems: 'center' }}
        >



          <Text style={{
            ...styles.buttonTextOut, fontFamily: 'Adamina_400Regular'
            ,
          }}>
            ¿Te has olvidado de la contraseña?
          </Text>


        </TouchableOpacity>
        <GenericButton text="OK" action={handleSignIn} color='#F8F1CC' />

        <View style={styles.pie}>
          <Text style={styles.nombre}> fiTrack </Text>
        </View>
      </View>
    </View>


  )
}

export default Login;