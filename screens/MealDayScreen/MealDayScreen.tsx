import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './MealDayStyle'
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

const MealDay = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const route: any = useRoute();
    let [tipo, setTipo] = useState('')
    let [dia, setDia] = useState('')
    const [titulo, setTitulo] = useState('')
    const [nombre, setNombre] = useState('')
    const [receta, setReceta] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [ref, setRef] = useState(0)
    const [cantidades, setCantidades] = useState<any>([])
    const [recetaDesayuno, setRecetaDesayuno] = useState<any>([])
    let listadoIngredientes: string[] = [];
    let listadoingre = []
    let recetaDesa = []

    let alimento: { nombre: any; receta: any; ingredientes: any; }

    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,

    });
    useEffect(() => {

        tipo = route.params.Tipo
        dia = route.params.Dia

        let desayuno = "Desayuno"
        let cena = "Cena"
        let comida = "Comida"


        if (tipo.valueOf() == desayuno.valueOf()) {
            setTitulo("La comida mas importante del Día")
            //sacar el desayuno del usuario
            UserMethods.getDesayunoFromUser(dia).then(
                (desayuno) => {
                    alimento = desayuno
                    setNombre(alimento.nombre)
                    setReceta(alimento.receta)
                    setIngredientes(alimento.ingredientes)
                    UserMethods.separarParrafo(alimento.ingredientes, ',').then(
                        (listado) => {
                            listadoingre = listado
                            setCantidades(listado)
                            UserMethods.separarParrafo(alimento.receta, '?').then(
                                (recetas) => {
                                    recetaDesa = recetas
                                    setRecetaDesayuno(recetaDesa)
                                }
                            )
                        }
                    )
                }
            )

        } else if (tipo.valueOf() == comida.valueOf()) {
            setTitulo("Para seguir teniendo energía")
            UserMethods.getComidaFromUser(dia).then(
                (comida) => {
                    alimento = comida
                    setNombre(alimento.nombre)
                    setReceta(alimento.receta)
                    setIngredientes(alimento.ingredientes)
                    UserMethods.separarParrafo(alimento.ingredientes, ',').then(
                        (listado) => {
                            listadoingre = listado
                            setCantidades(listado)
                            UserMethods.separarParrafo(alimento.receta, '?').then(
                                (recetas) => {
                                    recetaDesa = recetas
                                    setRecetaDesayuno(recetaDesa)
                                }
                            )
                        }
                    )
                }
            )
        } else {
            setTitulo("Para terminar bien el dia ...")
            UserMethods.getComidaFromUser(dia).then(
                (cena) => {
                    alimento = cena
                    setNombre(alimento.nombre)
                    setReceta(alimento.receta)
                    setIngredientes(alimento.ingredientes)
                    UserMethods.separarParrafo(alimento.ingredientes, ',').then(
                        (listado) => {
                            listadoingre = listado
                            setCantidades(listado)
                            UserMethods.separarParrafo(alimento.receta, '?').then(
                                (recetas) => {
                                    recetaDesa = recetas
                                    setRecetaDesayuno(recetaDesa)
                                }
                            )
                        }
                    )
                }
            )
        }

    }, [])
    if (!loaded) {
        return null;
    }

    return (
        <><ScrollView style={{ height: '100%' }}>
            <View style={styles.container}>

                <View style={styles.header}>

                    <Image source={require("../../assets/imagenes/cabecera2.png")} style={styles.forma}></Image>
                    <Text style={{ ...styles.nombreTitulo, fontFamily: "Adamina_400Regular" }}>Aqui tienes los pasos...</Text>




                </View>
                {/* <ScrollView > */}
                <View style={styles.body}>

                    <View style={styles.titulo}>
                        <Text style={{ ...styles.textoTitulo, fontFamily: "Adamina_400Regular" }}>{nombre}</Text>
                    </View>

                    <View style={styles.contendor1}>
                        <View style={styles.ingredientes}>
                            <Text style={{ ...styles.textoTituloIngredientes, fontFamily: "Adamina_400Regular" }}>Ingredientes</Text>
                            {cantidades.map((ingrediente: any, id2: any) =>
                                <Text key={id2} style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} > * {ingrediente}</Text>)}
                        </View>

                    </View>
                    <View style={styles.contendor}>
                        {/* <View style={styles.receta}> */}
                        <Text style={{ ...styles.textoTituloIngredientes, fontFamily: "Adamina_400Regular" }}>Pasos a seguir:</Text>

                        {recetaDesayuno.map((receta: any, id: any) =>
                            <View key={id} style={styles.paso}>
                                <View style={{ flexDirection: 'row', width: 7, marginTop: '8%' }}>
                                    <View style={styles.circulo}>
                                        <Text style={styles.numeroCirculo}>{id}</Text>
                                    </View>
                                    <View style={{ width: 250, height: 100, marginBottom: 30, marginLeft: 10 }}>
                                        <Text style={{ fontSize: 17, fontFamily: "Adamina_400Regular" }}>{receta}</Text>
                                    </View>


                                </View>

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

export default MealDay;




