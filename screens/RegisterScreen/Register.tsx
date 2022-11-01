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
import UserMethods from '../../APIs/UserApi'
import { validateEmail } from '../../utils/helpers';
import { Input } from 'react-native-elements'


const Register = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [confirm, setConfirm] = useState('');

  const defaultFormValues = () => {
    return { email: "", password: "", confirm: "" }
  }
  const [formData, setFormData] = useState(defaultFormValues())
  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),
  });


  if (!loaded) {
    return null;
  }


  const handleCreateAccount = () => {
    if (validateData()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log('Accout created!')
          UserMethods.sendNameData(nombre, email, password)
          navigation.navigate("Form")
        })
        .catch(error => {
          console.log(error)
        })
    }



  }
  const validateData = () => {
    let isValid = true
    if (confirm.valueOf() != password.valueOf()) {
      Alert.alert("Las contraseñas no coinciden, asegurate de que son las mismas")
      isValid = false
    }
    if (nombre.length == 0 || confirm.length == 0 || password.length == 0 || email.length == 0) {
      Alert.alert("No puedes dejar ningun campo en blanco")
      isValid = false
    }
    if (!validateEmail(email)) {
      Alert.alert("El formato del email no es correcto")
      isValid = false
    }
    return isValid
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
          <TextInput onChangeText={text => setNombre(text)} style={styles.textInput} value={nombre} placeholder="Nombre y Apellidos del Usuario" ></TextInput>
          <TextInput style={styles.textInput} defaultValue={formData.email} onChangeText={text => setEmail(text.toLowerCase())} value={email.toLowerCase()} placeholder="Correo Electronico" ></TextInput>
          <TextInput onChangeText={text => setPassword(text)} style={styles.textInput} value={password} placeholder="Contraseña" secureTextEntry></TextInput>
          <TextInput onChangeText={text => setConfirm(text)} style={styles.textInput} placeholder="Confirmacion de contraseña" value={confirm} secureTextEntry></TextInput>

          <GenericButton text="OK" action={handleCreateAccount} color='#F8F1CC' />


        </ScrollView>

      </View>
      <View style={styles.pie}>
        <Text style={styles.nombre}> fiTrack </Text>
      </View>
    </View>

  )
}
export default Register;
