import { View, Text, Pressable, FlatList, Image, TouchableOpacity, ScrollView, Linking, RefreshControl, DevSettings } from 'react-native';
import { Link, useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import styles from './CardStyle';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../../components/NavBar';
import "firebase/firestore";
import GymMethods from '../../APIs/GymAPi';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'




const Card = () => {
    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,
    });

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const [suplementos, setSuplementos] = useState<any>([])
    const [num, setNum] = useState(0)


    useEffect(() => {

        GymMethods.getSuplementosFromUser().then(
            async (suplementosDevueltos) => {
                setSuplementos(suplementosDevueltos)
                setNum(await GymMethods.totalCarritoUser())


            }

        )

    }, [])
    useEffect(() => {
        GymMethods.totalCarritoUser().then(
            (carritoUser) => {
                console.log(suplementos)
                console.log(num)
                console.log(carritoUser)
                setNum(carritoUser)
                console.log(num)
            }
        )


    }, [suplementos])

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



                </View>

                <View style={styles.body}>



                    {suplementos.map((suplemento: any, id2: any) =>
                        <View key={id2} style={styles.paso}>
                            <Icon name="trash-outline" size={30} color="#ffff" onPress={() => GymMethods.borraElementoFromCarrito(suplemento.id).then(
                                () => {
                                    setSuplementos(suplementos.filter((item: { id: any; }) => item.id != suplemento.id))

                                }
                            )}  ></Icon>
                            <View style={styles.paso2}>
                                <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} >{suplemento.nombre}  </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} > Sabor:  </Text>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular", }} >{suplemento.sabor}  </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} > Cantidad:  </Text>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} >{suplemento.cantidad}  </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} > Total:  </Text>
                                    <Text style={{ ...styles.textoIngredientes, fontFamily: "Adamina_400Regular" }} >{suplemento.cantidad * suplemento.precio}  </Text>
                                </View>

                            </View>


                        </View>

                    )}
                    {/* //Despues de finalizar hay que borrar el carrito */}
                    <View>
                        <Text>Total de tu compra es: {num}</Text>
                    </View>

                    <View style={{ marginTop: 90 }}>
                        {(suplementos.length == 0) ? (<Text style={{ fontFamily: 'Adamina_400Regular', fontSize: 17, color: '#221816' }}>Tu cesta esta vacía!</Text>) : null}

                    </View>
                    {(suplementos.length != 0) ? (<TouchableOpacity style={{ ...styles.button }} onPress={() => GymMethods.borrarCarritoUser().finally(
                        () => {
                            navigation.navigate('Plan', { reload: false })
                        }
                    )} >

                        <Text style={{ ...styles.buttonText, color: "#ffff", fontFamily: "Adamina_400Regular" }}>Finalizar Compra</Text>

                    </TouchableOpacity>) : null}



                </View>


            </View>

        </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <NavBar search={false} listExercicies={false} plan={false} listMeals={false} profile={false}></NavBar>
            </View></>


    )

}

export default Card;




