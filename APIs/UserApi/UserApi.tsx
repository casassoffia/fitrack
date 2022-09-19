import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { collection, query, onSnapshot, orderBy, getDocs, QuerySnapshot, doc, getDoc, where } from 'firebase/firestore';
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

    }


}


export default UserMethods;

