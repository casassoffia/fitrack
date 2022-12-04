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
import { collection, getDocs, query, Timestamp, where } from 'firebase/firestore';
import { db } from '../../utils/Firebase';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import React from 'react';
import { validateEmail } from '../../utils/helpers';




const ProfileEdit = () => {
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
    let cambiadoNivel: boolean
    const [edad, setEdad] = useState(route.params.edad)
    const [num_dias, setNumDias] = useState(0)
    let num_diasUpdate: any
    const [peso, setPeso] = useState(route.params.peso)
    let arrayPeso: Array<any> = []
    let arrayFecha: Array<any> = []
    const [arrayPesos, setArrayPesos] = useState(route.params.arrayPesos)
    const [arrayFechas, setArrayFechas] = useState(route.params.arrayFechas)

    const [cambiadoPeso, setCambiadoPeso] = useState<boolean>(false)
    const [plan, setPlan] = useState('')
    let cambiadoPlan: boolean
    let planUpdate: any
    const [sexo, setSexo] = useState('')
    let sexoUpdate: any

    const cambiarNivel = (item: any) => {
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
    const cambiarPeso = (text: string) => {
        setCambiadoPeso(true)
        setPeso(text)

    }

    const rellenarForm = async () => {

        if (nivel.valueOf() == '') {
            nivelUpdate = route.params.nivel.toString()
            cambiadoNivel = false
        } else {
            let item: any
            item = nivel
            nivelUpdate = item.name
            cambiadoNivel = true

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
            cambiadoPlan = false
        } else {
            let item: any
            item = plan
            planUpdate = item.name
            cambiadoPlan = true
        }
        if (sexo.valueOf() == '') {
            sexoUpdate = route.params.sexo.toString()
        } else {
            let item: any
            item = sexo
            sexoUpdate = item.name
        }


        if (cambiadoPeso) {

            arrayPeso = route.params.arrayPesos
            arrayPeso.push(parseInt(peso))
            arrayFecha = route.params.arrayFechas
            arrayFecha.push(Timestamp.now())



        } else {
            arrayPeso = route.params.arrayPesos
        }
        if (validateData()) {

            UserMethods.updateUser(nombre, email, edad, nivelUpdate, num_diasUpdate, arrayPeso, planUpdate, sexoUpdate, cambiadoPlan, cambiadoNivel, arrayFecha).finally(
                () => {
                    navigation.navigate("Profile", { success: !route.params.succes })
                }
            )
        }





    }
    const validateData = () => {
        let isValid = true
        if (nombre.length == 0 || edad.length == 0 || peso.length == 0 || email.length == 0) {
            Alert.alert("No puedes dejar ningun campo en blanco")
            isValid = false
        }
        if (!validateEmail(email)) {
            Alert.alert("El formato del email no es correcto")
            isValid = false
        }
        return isValid
    }
    const [loaded] = useFonts({
        lob: require('../../assets/fonts/Lobster-Regular.ttf'),
    });
    useEffect(() => {
        console.log("route.params.arrayPesos")
        console.log(route.params.arrayPesos)


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
                    <TextInput keyboardType='numeric' onChangeText={text => { cambiarPeso(text) }} style={{ ...styles.textInput, fontFamily: "Adamina_400Regular" }} value={peso} placeholder={route.params.peso.toString()}></TextInput>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Nº de dias que entrenas a la semana: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.num_dias} onSelect={cambiarDias} data={dias} value={num_dias} color1='#eede89' color2='#F8F1CC' dia={''} number={0}  ></DropDown>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Tu nivel: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.nivel} onSelect={cambiarNivel} data={listadoNivel} value={nivel} color1='#eede89' color2='#F8F1CC' dia={''} number={0} ></DropDown>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Tu objetivo: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.plan} onSelect={cambiarPlan} data={options} value={plan} color1='#eede89' color2='#F8F1CC' dia={''} number={0}  ></DropDown>
                    <Text style={{ ...styles.aclaracion, fontFamily: "Adamina_400Regular" }}>Sexo: </Text>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text={route.params.sexo} onSelect={cambiarSexo} data={listadoSexo} value={sexo} color1='#eede89' color2='#F8F1CC' dia={''} number={0} ></DropDown>



                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => rellenarForm()} style={{
                            ...styles.button,
                            backgroundColor: '#F8F1CC',
                            marginTop: 20
                        }}>
                            <Text style={styles.buttonText}>OK</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile', { success: false })} style={{
                            ...styles.button,
                            backgroundColor: '#F8F1CC',
                            marginTop: 20
                        }}>
                            <Text style={styles.buttonText}>Cancel</Text></TouchableOpacity>
                    </View>




                </View>

            </View>
        </ScrollView>
            <View style={styles.pie}>
                <Text style={styles.nombre}> fiTrack </Text>
            </View>
        </>

    )
}
export default ProfileEdit;
