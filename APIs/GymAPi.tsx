import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, addDoc, updateDoc, getDoc, where, setDoc, limit, DocumentData, Timestamp, Query, DocumentReference } from 'firebase/firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import { auth, db, firebaseConfig } from '../utils/Firebase';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';


const GymMethods = {
    getGyms: async function () {

        const q = query(collection(db, "gimnasios"))
        let gimnasios: Array<DocumentData> = []
        let gimnasio
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            gimnasio = doc.data()

            gimnasios.push(gimnasio)

        });

        return gimnasios

    },
    getGymsFilter: async function (conPiscina: boolean, tenis: boolean, spa: boolean, guarderia: boolean, precioSeleccionado: any) {
        var q = query(collection(db, "gimnasios"))
        let gimnasios: Array<DocumentData> = []

        if (precioSeleccionado.name != null && precioSeleccionado.name != "Selecciona un rango") {

            if (precioSeleccionado.name.valueOf() == "20-30") {

                q = query(q, where("nivel", "==", 1))

            } else if (precioSeleccionado.name.valueOf() == "30-40") {
                q = query(q, where("nivel", "==", 2))

            } else if (precioSeleccionado.name.valueOf() == "40-50") {
                q = query(q, where("nivel", "==", 3))
            } else if (precioSeleccionado.name.valueOf() == "50-60") {
                q = query(q, where("nivel", "==", 4))
            }
        }

        if (conPiscina) {

            q = query(q, where("piscina", "==", conPiscina))

        }
        if (tenis) {
            q = query(q, where("tenis", "==", tenis))
        }
        if (guarderia) {
            q = query(q, where("guarderia", "==", guarderia))
        }
        if (spa) {
            q = query(q, where("spa", "==", spa))


        }

        let gimnasio


        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            gimnasio = doc.data()

            gimnasios.push(gimnasio)


        });

        return gimnasios


    },
    getSuplementos: async function () {

        const q = query(collection(db, "suplementos"))
        let suplementos: Array<DocumentData> = []
        let suplemento
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            suplemento = doc.data()

            suplementos.push(suplemento)

        });

        return suplementos

    },
    getUrlImages: async function () {
        const q = query(collection(db, "suplementos"))
        let urls: Array<String> = []
        let suplemento
        let url: string
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            suplemento = doc.data()
            url = suplemento.imagen

            urls.push(url)

        });

        return urls

    },
    getSuplementosFromUser: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const qUser = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let cestaUsuario: Array<DocumentData> = []
        const querySnapshotUser = await getDocs(qUser);
        querySnapshotUser.forEach((doc) => {
            usuario = doc.data()

            cestaUsuario = usuario.Carrito


        });

        return cestaUsuario

    },
    anyadirSuplementoById: async function (id: number) {


        const q = query(collection(db, "suplementos"), where("id", "==", id))

        let referenciaUser = ""
        let suplemento: DocumentData = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            suplemento = doc.data()


        });


        const auth = getAuth()
        const userLogued = auth.currentUser;
        const qUser = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let cestaUsuario: Array<DocumentData> = []
        const querySnapshotUser = await getDocs(qUser);
        querySnapshotUser.forEach((doc) => {
            usuario = doc.data()
            referenciaUser = doc.id
            cestaUsuario = usuario.Carrito


        });
        let encontrado = false
        if (cestaUsuario != null) {
            for (let i = 0; i < cestaUsuario.length; i++) {
                console.log(cestaUsuario[i].id)
                console.log(suplemento.id)

                if (cestaUsuario[i].id == suplemento.id) {
                    cestaUsuario[i].cantidad = cestaUsuario[i].cantidad + 1
                    encontrado = true
                }
            }

        }

        if (!encontrado) {
            suplemento.cantidad = 1
            cestaUsuario = []
            cestaUsuario.push(suplemento)
            console.log(cestaUsuario)

        }

        const usuarioref = doc(db, "usuarios", referenciaUser);

        const update = await updateDoc(usuarioref, {
            Carrito: cestaUsuario

        });

    },
    borrarCarritoUser: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const qUser = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let referenciaUser = ""
        let cestaUsuario: Array<DocumentData> = []
        const querySnapshotUser = await getDocs(qUser);
        querySnapshotUser.forEach((doc) => {

            referenciaUser = doc.id



        });
        const usuarioref = doc(db, "usuarios", referenciaUser);

        const update = await updateDoc(usuarioref, {
            Carrito: cestaUsuario

        });
    },
    totalCarritoUser: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const qUser = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let total = 0
        let cestaUsuario: Array<DocumentData> = []
        const querySnapshotUser = await getDocs(qUser);
        querySnapshotUser.forEach((doc) => {
            usuario = doc.data()

            cestaUsuario = usuario.Carrito


        });
        for (let i = 0; i < cestaUsuario.length; i++) {


            total = total + cestaUsuario[i].cantidad * cestaUsuario[i].precio
        }
        console.log(total)
        return total
    },
    borraElementoFromCarrito: async function (idSuplemento: number) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const qUser = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let referenciaUser = ""
        let cestaUsuario: Array<DocumentData> = []
        const querySnapshotUser = await getDocs(qUser);
        querySnapshotUser.forEach((doc) => {
            usuario = doc.data()
            referenciaUser = doc.id
            cestaUsuario = usuario.Carrito


        });
        const usuarioref = doc(db, "usuarios", referenciaUser);

        for (let i = 0; i < cestaUsuario.length; i++) {


            if (cestaUsuario[i].id == idSuplemento) {
                // cestaUsuario.splice(i - 1, 1)
                cestaUsuario = cestaUsuario.filter((item) => item.id != idSuplemento)

            }
        }

        console.log(cestaUsuario)
        const update = await updateDoc(usuarioref, {
            Carrito: cestaUsuario

        });
    },


    getSuplementosFilter: async function (precioSeleccionado: any, saborSeleccionado: any) {
        var q = query(collection(db, "suplementos"))
        let suplementos: Array<DocumentData> = []

        if (precioSeleccionado.name != null && precioSeleccionado.name != "Selecciona un rango") {

            if (precioSeleccionado.name.valueOf() == "20-30") {

                q = query(q, where("nivel", "==", 2))

            } else if (precioSeleccionado.name.valueOf() == "30-40") {
                q = query(q, where("nivel", "==", 3))

            } else if (precioSeleccionado.name.valueOf() == "40-50") {
                q = query(q, where("nivel", "==", 4))
            } else if (precioSeleccionado.name.valueOf() == "50-60") {
                q = query(q, where("nivel", "==", 5))
            } else if (precioSeleccionado.name.valueOf() == "10-20") {
                q = query(q, where("nivel", "==", 1))
            } else if (precioSeleccionado.name.valueOf() == "60-70") {
                q = query(q, where("nivel", "==", 6))
            }
        }
        if (saborSeleccionado.name != null && saborSeleccionado.name != "Selecciona un sabor") {
            console.log("saborSeleccionado.name")
            console.log(saborSeleccionado.name)
            q = query(q, where("sabor", "==", saborSeleccionado.name))

        }




        let suplemento



        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            suplemento = doc.data()

            suplementos.push(suplemento)


        });



        return suplementos


    },
}


export default GymMethods;



