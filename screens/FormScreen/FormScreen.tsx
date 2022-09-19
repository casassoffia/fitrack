import { StyleSheet, View, Text, Pressable, FlatList, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDown from '../../components/DropDown';
import { SetStateAction, useEffect, useState } from 'react';
import styles from './FormStyles'
import UserMethods from '../../APIs/UserApi/UserApi'
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/Firebase';
// import firestore from '@react-native-firebase/firestore'

let options = [{ id: 1, name: 'Ganar masa muscular' }, { id: 2, name: 'Perder grasa' }]
let sexo = [{ id: 1, name: 'Femenino' }, { id: 2, name: 'Masculino' }, { id: 3, name: 'Otros' }]
let dias = [{ id: 2, name: '2' }, { id: 3, name: '3' }, { id: 4, name: '4' }, { id: 5, name: '5' }]
let nivel = [{ id: 1, name: 'Principiante' }, { id: 2, name: 'Intermedio' }, { id: 3, name: 'Avanzado' }]
const Form = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const auth = getAuth()
  const userLogued = auth.currentUser;
  const [selectedItem, setSelectedItem] = useState('')
  const [selectedItem2, setSelectedItem2] = useState('')
  const [selectedItem3, setSelectedItem3] = useState('')
  const [selectedItem4, setSelectedItem4] = useState('')
  const [edad, setEdad] = useState('')
  const [peso, setPeso] = useState('')
  const [data, setData] = useState()
  const accion = (item: any) => {
    setSelectedItem(item)
  }
  const accion2 = (item: any) => {
    setSelectedItem2(item)
  }
  const accion3 = (item: any) => {
    setSelectedItem3(item)
  }
  const accion4 = (item: any) => {
    setSelectedItem4(item)
  }

  const rellenarForm = async () => {
    const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
    const querySnapshot = await getDocs(q);
    let nombre = ""
    let usuario
    querySnapshot.forEach((doc) => {
      usuario = doc.data()
      console.log("Referencia")
      console.log(doc.id)
      nombre = usuario.nombre
    });
    UserMethods.updateFormData(edad, selectedItem4, selectedItem3, peso, selectedItem, selectedItem2, nombre, userLogued?.email)
    navigation.navigate("Welcome")
  }
  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.headerLeft}>
          <Text style={{ marginTop: 30 }}>
            <Icon name="chevron-back-outline" size={30} color="#fff" onPress={() => navigation.navigate('Register')} ></Icon>
          </Text>

        </View>
        <View style={styles.headerRight}>
          <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={styles.icono}></Image>
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView style={{ width: '100%' }} >
          <Text style={styles.titulo}>Completa la siguiente información: </Text>
          <DropDown text="Elige tu objetivo" onSelect={accion} data={options} value={selectedItem}></DropDown>
          <TextInput keyboardType='numeric' onChangeText={text => setEdad(text)} style={styles.textInput} value={edad} placeholder="Edad"></TextInput>
          <TextInput keyboardType='numeric' onChangeText={text => setPeso(text)} style={styles.textInput} value={peso.toString()} placeholder="Peso"></TextInput>
          <DropDown text="Sexo" onSelect={accion2} data={sexo} value={selectedItem2}></DropDown>
          <DropDown text="Dias a la semana de entreno" onSelect={accion3} data={dias} value={selectedItem3}></DropDown>
          <DropDown text="Nivel" onSelect={accion4} data={nivel} value={selectedItem4}></DropDown>
          {/* <GenericButton text="OK" action={() => navigation.navigate('Plan')} /> */}
          <TouchableOpacity onPress={() => rellenarForm()} style={{
            ...styles.button,
            backgroundColor: '#F8F1CC',
            marginTop: 20
          }}>
            <Text style={styles.buttonText}>OK</Text></TouchableOpacity>

        </ScrollView>
      </View>
      <View style={styles.pie}>
        <Text style={styles.nombre}> fiTrack </Text>
      </View>
    </View>

  )
}
export default Form;
