import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Link, useNavigation, useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';

import styles from './ListGymsStyle'

import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import DesplegableFilters from '../../components/DesplegableFilters';
import NavBar from '../../components/NavBar';
import { Button } from '@rneui/themed';
import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth } from 'firebase/auth';
import GymMethods from '../../APIs/GymAPi'
import { Adamina_400Regular } from '@expo-google-fonts/adamina'




const ListGyms = () => {
    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,
    });

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const [gimnasios, setGimnasios] = useState<any>([])



    useEffect(() => {

        GymMethods.getGyms().then(
            (gimnasiosDevueltos) => {
                setGimnasios(gimnasiosDevueltos)

            }

        )

    }, [])

    const cambiarGimnsasios = (item: any) => {

        setGimnasios(item)
    }



    if (!loaded) {
        return null;
    }


    return (
        <><ScrollView style={{ height: '100%' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require("../../assets/imagenes/pruebaCabecera.png")} style={styles.forma}></Image>
                </View>

                <View style={styles.body}>

                    <DesplegableFilters text='Filters' onSelect={cambiarGimnsasios} gimnasios={gimnasios} ></DesplegableFilters>
                    {gimnasios.map((gimnasio: any, id2: any) =>
                        <View key={id2} style={styles.paso}>
                            <View key={id2} style={styles.paso2}>
                                <Text onPress={() => Linking.openURL(gimnasio.link)} style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} >{gimnasio.nombre}  </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} > Precio:  </Text>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} >{gimnasio.precio} €/Mes</Text>
                                </View>
                            </View>

                        </View>)}
                    <View style={{ marginTop: 90 }}>
                        {(gimnasios.length == 0) ? (<Text style={{ fontFamily: 'Adamina_400Regular', fontSize: 17, color: '#221816' }}>Lo sentimos no hay gimnasios con esos filtros</Text>) : null}

                    </View>


                </View>


            </View>

        </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <NavBar search={false} listExercicies={true} plan={false} listMeals={false} profile={false}></NavBar>
            </View></>


    )

}

export default ListGyms;




