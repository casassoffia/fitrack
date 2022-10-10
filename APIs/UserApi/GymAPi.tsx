import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, addDoc, updateDoc, getDoc, where, setDoc, limit, DocumentData, Timestamp, Query } from 'firebase/firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import { auth, db, firebaseConfig } from '../../utils/Firebase';
import { getAuth } from 'firebase/auth';


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
                q = query(q, where("precio", "==", 3))
            } else if (precioSeleccionado.name.valueOf() == "50-60") {
                q = query(q, where("precio", "==", 4))
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



