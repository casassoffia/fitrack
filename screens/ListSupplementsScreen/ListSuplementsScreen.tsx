import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Link, useNavigation, useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import styles from './ListSuplementsStyle'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import DesplegableFilters from '../../components/DesplegableFilters';
import NavBar from '../../components/NavBar';
import { Button } from '@rneui/themed';
import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from 'firebase/auth';
import GymMethods from '../../APIs/GymAPi'
import { Route } from '@react-navigation/native';
import { Icon as Icon2 } from '@rneui/themed';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import { AnyadirButton } from '../../components/AnyadirButton';
import DropDownListado from '../../components/DropDownListado';
import SuplementoFilters from '../../components/SuplementoFilters';



const ListSuplements = () => {
    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,
    });

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const [suplementos, setSuplementos] = useState<any>([])



    useEffect(() => {

        GymMethods.getSuplementos().then(
            (suplementosDevueltos) => {
                setSuplementos(suplementosDevueltos)

            }

        )

    }, [])

    const cambiarSuplementos = (item: any) => {

        setSuplementos(item)
    }



    if (!loaded) {
        return null;
    }


    return (
        <><ScrollView style={{ height: '100%' }}>
            <View style={styles.container}>
                <View style={styles.header}>

                    <Image source={require("../../assets/imagenes/cabecera4.png")} style={styles.forma}></Image>
                    <Text style={{ position: 'absolute', fontFamily: "Adamina_400Regular" }} >Súmale complementos que te ayuden a rendir más  </Text>
                    <View style={styles.carritoposicion}>
                        <Icon name="cart" size={30} style={{ marginLeft: 300 }} onPress={() => navigation.navigate('Card')}  ></Icon>
                    </View>

                </View>

                <View style={styles.body}>


                    <SuplementoFilters text='Filters' onSelect={cambiarSuplementos} suplementos={suplementos} ></SuplementoFilters>
                    {suplementos.map((suplemento: any, id2: any) =>
                        <View key={id2} style={styles.paso}>
                            <Icon2 type='material-community' name="cart-plus" color="#fff" onPress={() => GymMethods.anyadirSuplementoById(suplemento.id).finally(
                                () => {
                                    alert("Tu suplemento se ha añadido correctamente al carrito")
                                }
                            )} ></Icon2>
                            <View style={styles.paso2}>
                                <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} >{suplemento.nombre}  </Text>

                            </View>

                        </View>)}
                    <View style={{ marginTop: 90 }}>
                        {(suplementos.length == 0) ? (<Text style={{ fontFamily: 'Adamina_400Regular', fontSize: 17, color: '#221816' }}>Lo sentimos no hay productos con esos filtros</Text>) : null}

                    </View>


                </View>


            </View>

        </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <NavBar></NavBar>
            </View></>


    )

}

export default ListSuplements;




