import { StyleSheet, View, Text, Pressable, FlatList, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDown from '../../components/DropDown';
import { SetStateAction, useEffect, useState } from 'react';
import styles from './AddExercicieStyles'
import UserMethods from '../../APIs/UserApi/UserApi'
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/Firebase';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
// import firestore from '@react-native-firebase/firestore'

let ejercicios = [{ id: 1, name: 'Hombro' }, { id: 2, name: 'Espalda' }, { id: 3, name: 'Biceps' }, { id: 4, name: 'Triceps' }, { id: 5, name: 'Pecho' }, { id: 6, name: 'Pierna' }, { id: 7, name: 'Gluteo' }]
let sexo = [{ id: 1, name: 'Femenino' }, { id: 2, name: 'Masculino' }, { id: 3, name: 'Otros' }]
let dias = [{ id: 2, name: '2' }, { id: 3, name: '3' }, { id: 4, name: '4' }, { id: 5, name: '5' }]
let nivel = [{ id: 1, name: 'Principiante' }, { id: 2, name: 'Intermedio' }, { id: 3, name: 'Avanzado' }]
const AddExercicie = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>();
    const auth = getAuth()
    const userLogued = auth.currentUser;
    const [nivelSeleccionado, setNivelSeleccionado] = useState('')
    const [tipoEjercicio, setTipoEjercicio] = useState('')
    const [nombre, setNombre] = useState('');
    const [primero, setPrimero] = useState('')
    const [segundo, setSegundo] = useState('')
    const [tercero, setTercero] = useState('')
    const accion = (item: any) => {

        setTipoEjercicio(item)
    }
    const accion2 = (item: any) => {
        setNivelSeleccionado(item)
    }


    const rellenarForm = async () => {
        if (validateData()) {

            UserMethods.crearEjercicio(nombre, primero, segundo, tercero, nivelSeleccionado, tipoEjercicio).finally(
                () => {
                    navigation.navigate("ListExercicies")
                }
            )



        }

    }
    const validateData = () => {
        let isValid = true

        if (nombre.valueOf() == "") {
            Alert.alert("No puedes dejar ningun campo en blanco")
            isValid = false
        }
        if (nivelSeleccionado.valueOf() == "") {

            Alert.alert("Debes seleccionar un nivel")
            isValid = false
        }
        if (tipoEjercicio.valueOf() == "") {
            Alert.alert("Debes seleccionar un tipo de ejercicio")
            isValid = false
        }
        if (nombre.valueOf() == "") {
            Alert.alert("Debes indicar un nombre para el ejercicio")
            isValid = false
        }
        if (primero.valueOf() == "" || segundo.valueOf() == "" || tercero.valueOf() == "") {
            Alert.alert("No puedes dejar ninguno de los pasos en blanco")
            isValid = false
        }

        return isValid
    }
    const [loaded] = useFonts({
        lob: require('../../assets/fonts/Lobster-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <><ScrollView style={{ height: '100%' }}>

            <View style={styles.container}>

                <View style={styles.header}>

                    <View style={styles.headerLeft}>
                        <Text style={{ marginTop: 50 }}>
                            <Icon name="chevron-back-outline" size={30} color="#fff" onPress={() => navigation.navigate('ListExercicies')} ></Icon>
                        </Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={styles.icono}></Image>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={{ ...styles.titulo, fontFamily: 'Adamina_400Regular' }}>Rellena la siguiente información sobre el ejercicio que desea añadir: </Text>


                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text="Indica el tipo de ejercicio" onSelect={accion} data={ejercicios} value={tipoEjercicio} color1='#eede89' color2='#F8F1CC' dia={''}  ></DropDown>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text="Nivel del Ejercicio" onSelect={accion2} data={nivel} value={nivelSeleccionado} color1='#eede89' color2='#F8F1CC' dia={''} ></DropDown>
                    <TextInput onChangeText={text => setNombre(text)} style={styles.textInput} value={nombre} placeholder="Nombre del Ejercicio" maxLength={37} ></TextInput>
                    <Text style={styles.aclaracion}>* Por favor explica el ejercico en tres pasos</Text>
                    <TextInput onChangeText={text => setPrimero(text)} style={styles.textPasos} value={primero} placeholder="Primer Paso" maxLength={150} ></TextInput>
                    <TextInput onChangeText={text => setSegundo(text)} style={styles.textPasos} value={segundo} placeholder="Segundo Paso" maxLength={150} ></TextInput>
                    <TextInput onChangeText={text => setTercero(text)} style={styles.textPasos} value={tercero} placeholder="Tercer Paso" maxLength={150} ></TextInput>


                    {/* <GenericButton text="OK" action={() => navigation.navigate('Plan')} /> */}
                    <TouchableOpacity onPress={() => rellenarForm()} style={{
                        ...styles.button,
                        backgroundColor: '#F8F1CC',
                        marginTop: 20
                    }}>
                        <Text style={styles.buttonText}>OK</Text></TouchableOpacity>


                </View>

            </View>
        </ScrollView>
            <View style={styles.pie}>
                <Text style={styles.nombre}> fiTrack </Text>
            </View>
        </>

    )
}
export default AddExercicie;
