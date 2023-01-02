import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { ButtonDays } from '../../components/ButtonDays';
import styles from './SearchStyle'
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



const Search = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const route: any = useRoute();
    const [dia, setDia] = useState("")






    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require("../../assets/imagenes/colorDelLogo.png")} style={styles.forma}></Image>
                    <Image source={require("../../assets/imagenes/titulo3.png")} style={styles.nombre}></Image>
                </View>
                <View style={styles.headerRight}>
                    <Image source={require("../../assets/imagenes/colorDelLogo.png")}></Image>
                    <Image source={require("../../assets/imagenes/iconoTransparente.png")} style={styles.icono}></Image>
                </View>

            </View>

            <View style={styles.body}>
                <View style={styles.titulo}>
                    <Text style={styles.textoTitulo}>¿Qué desea buscar?</Text>
                </View>

                <View style={{
                    marginBottom: 90, marginTop: 90, width: '100%',
                    height: 50,
                }}>
                    <PlanButton text="Gimnasios" action={() => navigation.navigate('ListGym')} />
                </View>

                <PlanButton text="Suplementos" action={() => navigation.navigate('ListSupplements')} />


                <NavBar search={true} listExercicies={false} plan={false} listMeals={false} profile={false}></NavBar>
            </View>

        </View >

    )

}

export default Search;




