import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './ExercicieDayStyle'
import firestore from '@react-native-firebase/firestore'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth, db, firebaseConfig } from '../../utils/Firebase';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, getDoc, where } from 'firebase/firestore';
import NavBar from '../../components/NavBar';
import { Button } from '@rneui/themed';
import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from 'firebase/auth';
import UserMethods from '../../APIs/UserApi'
import { Route } from '@react-navigation/native';
import { PlanButton } from '../../components/PlanButton';
import DropDown from '../../components/DropDown';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'

const ExercicieDay = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const route: any = useRoute();

    let [nombreEjercicio, setNombreEjercicio] = useState('')
    const [titulo, setTitulo] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tipo, setTipo] = useState('')
    const [ref, setRef] = useState(0)
    const [pasos, setPasos] = useState<any>([])
    const [recetaDesayuno, setRecetaDesayuno] = useState<any>([])
    let listadoPasos = []


    let ejercicioPasado: { nombre: any; descripcion: any; tipo: any; }

    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,

    });
    useEffect(() => {

        setNombreEjercicio(route.params.NombreEjercicio)
        setTitulo(nombreEjercicio)
        //sacar el ejercicio que me pasan
        UserMethods.getEjerciciobyName(route.params.NombreEjercicio).then(
            (ejercicio) => {
                ejercicioPasado = ejercicio
                setNombre(ejercicioPasado.nombre)
                setDescripcion(ejercicioPasado.descripcion)
                setTipo(ejercicioPasado.tipo)
                UserMethods.separarParrafo(ejercicioPasado.descripcion, '?').then(
                    (listado) => {
                        listadoPasos = listado

                        setPasos(listado)

                    }
                )
            }
        )



    }, [])
    if (!loaded) {
        return null;
    }

    return (
        <><ScrollView style={{ height: '100%' }}>
            <View style={styles.container}>

                <View style={styles.header}>

                    <Image source={require("../../assets/imagenes/cabecera3.png")} style={styles.forma}></Image>
                    <Text style={{ ...styles.nombreTitulo, fontFamily: "Adamina_400Regular" }}>{tipo} </Text>
                    <Text style={{ ...styles.iconoAtras }}>
                        <Icon name="chevron-back-outline" size={30} color="#613000" onPress={() => navigation.navigate('ListExercicies', { reload: false })} ></Icon>
                    </Text>


                </View>

                <View style={styles.body}>

                    <View style={styles.titulo}>
                        <Text style={{ ...styles.textoTitulo, fontFamily: "Adamina_400Regular" }}>{nombreEjercicio}</Text>
                    </View>

                    <View style={styles.contendor1}>

                        <Text style={{ ...styles.textoTituloIngredientes, fontFamily: "Adamina_400Regular" }}>Pasos</Text>
                        {pasos.map((paso: any, id2: any) =>
                            <View key={id2} style={styles.paso}>
                                <View style={{ ...styles.circulo }}>
                                    <Text style={{ color: '#613000', fontSize: 20 }}>{id2 + 1} </Text>
                                </View>
                                <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} >  {paso}</Text>
                            </View>)}


                    </View>





                </View >



            </View >
        </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <NavBar search={false} listExercicies={false} plan={false} listMeals={false} profile={false}></NavBar>
            </View></>

    )
}

export default ExercicieDay;




