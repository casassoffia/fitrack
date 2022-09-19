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
// import auth from '@react-native-firebase/auth';




const Login = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }


  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate("Plan")
      })
      .catch(error => {
        console.log('error')
        console.log('aqui')
        Alert.alert(error.message)
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
        <Text style={styles.titulo}> Bienvenid@ de nuevo </Text>
        <TextInput style={styles.textInput} onChangeText={text => setEmail(text)} value={email} placeholder="Correo Electronico"></TextInput>
        <TextInput style={styles.textInput} onChangeText={text => setPassword(text)} value={password} placeholder="Contraseña" secureTextEntry></TextInput>
        <GenericButton text="OK" action={handleSignIn} />

        <Text style={styles.nombre}> fiTrack </Text>
      </View>
    </View>


  )
}

export default Login;