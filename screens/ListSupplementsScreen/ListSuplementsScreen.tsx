import { StyleSheet, View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Link, useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import styles from './ListSuplementsStyle'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../../components/NavBar';
import "firebase/firestore";
import GymMethods from '../../APIs/GymAPi'
import { Icon as Icon2 } from '@rneui/themed';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import SuplementoFilters from '../../components/SuplementoFilters';

import { firebaseConfig } from '../../utils/Firebase'
import firebase from 'firebase/compat/app'
firebase.initializeApp(firebaseConfig);

const ListSuplements = () => {
    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,
    });

    const [images, setImages] = useState([
        require('../../assets/imagenes/suplementos/ProteinaHuevo.jpg'),
        require('../../assets/imagenes/suplementos/ProteinavegetalBombon.jpg'),
        require('../../assets/imagenes/suplementos/ProteinaSueroAvena.jpg'),
        require('../../assets/imagenes/suplementos/ProteinaDietetica.jpg'),
        require('../../assets/imagenes/suplementos/wheyHydroIsolate.jpg')])

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const [suplementos, setSuplementos] = useState<any>([])
    const [urls, setUrls] = useState<any>([])



    useEffect(() => {

        GymMethods.getSuplementos().then(
            (suplementosDevueltos) => {
                setSuplementos(suplementosDevueltos)
                setUrls(images)

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
                    <Text style={{ ...styles.nombreTitulo, fontFamily: "Adamina_400Regular" }}>Súmale complementos</Text>
                    <Text style={{ ...styles.nombreTitulo, marginTop: 210, fontFamily: "Adamina_400Regular" }}>que te ayuden a rendir más</Text>
                    <View style={styles.carritoposicion}>
                        <Icon name="cart" size={30} style={{ marginLeft: 360, marginTop: 270, color: '#7DB065' }} onPress={() => navigation.navigate('Card')}  ></Icon>
                    </View>

                </View>

                <View style={styles.body}>


                    <SuplementoFilters text='Filters' onSelect={cambiarSuplementos} suplementos={suplementos} ></SuplementoFilters>
                    {suplementos.map((suplemento: any, id2: any) =>
                        <View key={id2} style={styles.paso}>
                            <View style={{ marginLeft: 300 }}>
                                <Icon2 type='material-community' name="cart-plus" color="#fff" onPress={() => GymMethods.anyadirSuplementoById(suplemento.id).finally(
                                    () => {
                                        alert("Tu suplemento se ha añadido correctamente al carrito")
                                    }
                                )} ></Icon2>
                            </View>
                            <View style={styles.paso2}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <Image source={images[id2]} style={{ width: 90, height: 90 }}></Image>
                                    <View style={{ flexDirection: 'column', width: 200, marginLeft: 10 }}>
                                        <Text style={{ ...styles.nombreSuplemento, fontFamily: "Adamina_400Regular" }} >{suplemento.nombre}  </Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} > Sabor:  </Text>

                                            <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} >{suplemento.sabor}  </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} > Precio:  </Text>
                                            <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} >{suplemento.precio}  </Text>
                                        </View>
                                    </View>

                                </View>







                            </View>


                        </View>)}
                    <View style={{ marginTop: 90 }}>
                        {(suplementos.length == 0) ? (<Text style={{ fontFamily: 'Adamina_400Regular', fontSize: 17, color: '#221816' }}>Lo sentimos no hay productos con esos filtros</Text>) : null}

                    </View>


                </View>


            </View>

        </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <NavBar search={false} listExercicies={false} plan={false} listMeals={false} profile={false}></NavBar>
            </View></>


    )

}

export default ListSuplements;




