import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, addDoc, updateDoc, getDoc, where, setDoc } from 'firebase/firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import { auth, db, firebaseConfig } from '../../utils/Firebase';
import { getAuth } from 'firebase/auth';

const UserMethods = {
    getNumDias: async function () {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        let usuario
        let num = 0

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            usuario = doc.data()

            num = usuario.num_dias

        });

        return num

    },
    sendNameData: async function (name: string, email: string, password: string) {
        const docRef = await addDoc(collection(db, "usuarios"), {
            nombre: name,
            edad: 0,
            email: email,
            nivel: "",
            num_dias: 0,
            peso: 0,
            plan: "",
            sexo: ""
        });

    },
    updateFormData: async function (edad: string, nivel: any, numDias: any, peso: string, plan: any, sexo: any, nombre: any, email: any) {
        const auth = getAuth()
        const userLogued = auth.currentUser;
        const q = query(collection(db, "usuarios"), where("email", "==", userLogued?.email))
        const querySnapshot = await getDocs(q);
        let ref = ""

        querySnapshot.forEach((doc) => {
            ref = doc.id
        });

        const usuarioref = doc(db, "usuarios", ref);
        const update = await setDoc(usuarioref, {
            edad: parseInt(edad),
            nivel: nivel.name,
            num_dias: parseInt(numDias.name),
            email: email,
            nombre: nombre,
            peso: parseInt(peso),
            plan: plan.name,
            sexo: sexo.name,

        });


    }


}


export default UserMethods;

