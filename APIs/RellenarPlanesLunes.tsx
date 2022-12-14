import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, addDoc, updateDoc, getDoc, where, setDoc, limit, DocumentData, Timestamp } from 'firebase/firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import { auth, db, firebaseConfig } from '../utils/Firebase';
import { getAuth } from 'firebase/auth';
import UserMethods from './UserApi'
import { useState } from 'react';
import { DateTime } from "luxon";

const RellenarLunes = {


    rellenarLunesComida: async function () {
        const auth = getAuth()
        let refDesa, refComi, refCen
        let desayuno2: any, comida2: any, cena2
        let usuario: any
        let ref = ""
        const semanaCalculada = DateTime.now().weekNumber
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        const querySnapshot = await getDocs(q);
        let array
        querySnapshot.forEach((doc) => {
            usuario = doc.data()
            ref = doc.id
            array = usuario.comidaLunes.desayuno
        })
        let arrayVacio2 = {}
        if ((usuario.semanaLunes < semanaCalculada || (JSON.stringify(array) === JSON.stringify(arrayVacio2)))) {

            UserMethods.numeroAlteatorioDesayuno().then(
                (refDesayuno) => {
                    refDesa = refDesayuno
                    UserMethods.getDesayuno(refDesa).then(
                        (async desayuno => {
                            desayuno2 = desayuno
                            const usuarioref = doc(db, "usuarios", ref);


                            UserMethods.numeroAlteatorioComida().then(
                                (refComida) => {
                                    refComi = refComida
                                    UserMethods.getComida(refComi).then(
                                        (async comida => {
                                            comida2 = comida

                                            UserMethods.numeroAlteatorioCena().then(
                                                (refCena) => {
                                                    refCen = refCena
                                                    UserMethods.getCena(refCen).then(
                                                        (async cena => {
                                                            cena2 = cena
                                                            const update = await updateDoc(usuarioref, {
                                                                comidaLunes: {
                                                                    desayuno: { nombre: desayuno2.nombre, receta: desayuno2.receta, ingredientes: desayuno2.ingredientes },
                                                                    comida: { nombre: comida2.nombre, receta: comida2.receta, ingredientes: comida2.ingredientes },
                                                                    cena: { nombre: cena2.nombre, receta: cena2.receta, ingredientes: cena2.ingredientes },
                                                                }


                                                            });
                                                            console.log()
                                                        })
                                                    )
                                                }
                                            )
                                        })
                                    )
                                }
                            )
                        })

                    )

                })
        }

    },
    rellenarLunesEjercicio: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const numeros = new Array()
        let usuario: any
        let ref = ""
        const semanaCalculada = DateTime.now().weekNumber

        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuario = doc.data()
            ref = doc.id
        })
        const usuarioref = doc(db, "usuarios", ref);
        let arrayvacio = new Array()
        if ((usuario.semanaLunes < semanaCalculada) || JSON.stringify(usuario.ejerciciosLunes) === JSON.stringify(arrayvacio)) {
            UserMethods.numeroAlteatorioEjercicio(numeros).then(
                (num1) => {
                    numeros.push(num1)
                    UserMethods.numeroAlteatorioEjercicio(numeros).then(
                        (num2) => {
                            numeros.push(num2)
                            UserMethods.numeroAlteatorioEjercicio(numeros).then(
                                (num3 => {
                                    numeros.push(num3)
                                    UserMethods.numeroAlteatorioEjercicio(numeros).then(
                                        (num4) => {
                                            numeros.push(num4)
                                            UserMethods.numeroAlteatorioEjercicio(numeros).then(
                                                (num5) => {
                                                    numeros.push(num5)
                                                    UserMethods.numeroAlteatorioEjercicio(numeros).then(
                                                        async (num6) => {
                                                            numeros.push(num6)
                                                            console.log("hola")
                                                            const update = await updateDoc(usuarioref, {
                                                                semanaLunes: semanaCalculada,
                                                                ejerciciosLunes: numeros

                                                            });
                                                        })
                                                }

                                            )
                                        })

                                })
                            )

                        }
                    )

                }
            )
        }

    }
}

export default RellenarLunes;



