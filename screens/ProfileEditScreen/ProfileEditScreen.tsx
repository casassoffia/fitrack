import { StyleSheet, View, Text, Pressable, FlatList, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDown from '../../components/DropDown';
import { SetStateAction, useEffect, useState } from 'react';
import styles from './ProfileEditStyles'
import UserMethods from '../../APIs/UserApi'
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/Firebase';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import React from 'react';




const AddExercicie = () => {
    const route: any = useRoute();
    let options = [{ id: 1, name: 'Ganar masa muscular' }, { id: 2, name: 'Perder grasa' }, { id: 3, name: 'Mantener' }]
    let listadoSexo = [{ id: 1, name: 'Femenino' }, { id: 2, name: 'Masculino' }, { id: 3, name: 'Otros' }, { id: 4, name: route.params.sexo }]
    let dias = [{ id: 2, name: '2' }, { id: 3, name: '3' }, { id: 4, name: '4' }, { id: 5, name: '5' }]
    let listadoNivel = [{ id: 1, name: 'Principiante' }, { id: 2, name: 'Intermedio' }, { id: 3, name: 'Avanzado' }]
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const [nombre, setNombre] = useState(route.params.nombre)
    const [email, setEmail] = useState(route.params.email)
    const [nivel, setNivel] = useState('')
    let nivelUpdate: any
    const [edad, setEdad] = useState(route.params.edad)
    const [num_dias, setNumDias] = useState(0)
    let num_diasUpdate: any
    const [peso, setPeso] = useState(route.params.peso)
    const [plan, setPlan] = useState('')
    let planUpdate: any
    const [sexo, setSexo] = useState('')
    let sexoUpdate: any

    const cambiarNivel = (item: any) => {

        // nivel = item

        setNivel(item)

    }
    const cambiarDias = (item: any) => {
        setNumDias(item)
    }
    const cambiarPlan = (item: any) => {
        setPlan(item)
    }
    const cambiarSexo = (item: any) => {
        setSexo(item)
    }

    const rellenarForm = async () => {

        if (nivel.valueOf() == '') {
            nivelUpdate = route.params.nivel.toString()

        } else {
            let item: any
            item = nivel
            nivelUpdate = item.name

        }
        if (num_dias.valueOf() == 0) {

            num_diasUpdate = parseInt(route.params.num_dias)

        } else {
            let item: any
            item = num_dias
            num_diasUpdate = parseInt(item.name)
        }
        if (plan.valueOf() == '') {
            planUpdate = route.params.plan.toString()
        } else {
            let item: any
            item = plan
            planUpdate = item.name
        }
        if (sexo.valueOf() == '') {
            sexoUpdate = route.params.sexo.toString()
        } else {
            let item: any
            item = sexo
            sexoUpdate = item.name
        }



        UserMethods.updateUser(nombre, email, edad, nivelUpdate, num_diasUpdate, peso, planUpdate, sexoUpdate).finally(
            () => {
                navigation.navigate("Profile", { success: true })
            }
        )



        // }

    }
    // const validateData = () => {
    //     let isValid = true

    //     if (nombre.valueOf() == "") {
    //         Alert.alert("No puedes dejar ningun campo en blanco")
    //         isValid = false
    //     }
    //     if (nivelSeleccionado.valueOf() == "") {

    //         Alert.alert("Debes seleccionar un nivel")
    //         isValid = false
    //     }
    //     if (tipoEjercicio.valueOf() == "") {
    //         Alert.alert("Debes seleccionar un tipo de ejercicio")
    //         isValid = false
    //     }
    //     if (nombre.valueOf() == "") {
    //         Alert.alert("Debes indicar un nombre para el ejercicio")
    //         isValid = false
    //     }
    //     if (primero.valueOf() == "" || segundo.valueOf() == "" || tercero.valueOf() == "") {
    //         Alert.alert("No puedes dejar ninguno de los pasos en blanco")
    //         isValid = false
    //     }

    //     return isValid
    // }
    const [loaded] = useFonts({
        lob: require('../../assets/fonts/Lobster-Regular.ttf'),
    });
    useEffect(() => {
        // console.log("route.params.num_dias")
        // console.log(route.params.num_dias)
    }, [])
    if (!loaded) {
        return null;
    }
    return (
        <><ScrollView style={{ height: '100%' }}>

            <View style={styles.container}>

                <View style={styles.header}>

                    <View style={styles.headerLeft}>
                        <Text style={{ marginTop: 50 }}>
                            <Icon name="chevron-back-outline" size={30} color="#fff" onPress={() => navigation.navigate('Profile', { success: false })} ></Icon>
                        </Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={styles.icono}></Image>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Nombre: </Text>
                    <TextInput onChangeText={text => setNombre(text)} style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} value={nombre} placeholder={nombre} ></TextInput>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Email: </Text>
                    <TextInput onChangeText={text => setEmail(text)} style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} value={email} placeholder={email} ></TextInput>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Edad: </Text>
                    <TextInput keyboardType='numeric' onChangeText={text => setEdad(text)} style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} value={edad} placeholder={route.params.edad.toString()}></TextInput>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Peso: </Text>
                    <TextInput keyboardType='numeric' onChangeText={text => setPeso(text)} style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} value={peso} placeholder={route.params.peso.toString()}></TextInput>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Nº de dias que entrenas a la semana: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.num_dias} onSelect={cambiarDias} data={dias} value={num_dias} color1='#eede89' color2='#F8F1CC' dia={''}  ></DropDown>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Tu nivel: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.nivel} onSelect={cambiarNivel} data={listadoNivel} value={nivel} color1='#eede89' color2='#F8F1CC' dia={''} ></DropDown>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Tu objetivo: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.plan} onSelect={cambiarPlan} data={options} value={plan} color1='#eede89' color2='#F8F1CC' dia={''}  ></DropDown>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Sexo: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.sexo} onSelect={cambiarSexo} data={listadoSexo} value={sexo} color1='#eede89' color2='#F8F1CC' dia={''} ></DropDown>


                    {/* <GenericButton text="OK" action={() => navigation.navigate('Plan')} />  */}
                    <TouchableOpacity onPress={() => rellenarForm()} style={{
                        ...styles.button,
                        backgroundColor: '#F8F1CC',
                        marginTop: 20
                    }}>
                        <Text style={styles.buttonText}>OK</Text></TouchableOpacity>


                </View>

            </View>
        </ScrollView>
            <View style={styles.pie}>
                <Text style={styles.nombre}> fiTrack </Text>
            </View>
        </>

    )
}
export default AddExercicie;
