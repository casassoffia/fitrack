import { StyleSheet, View, Text, Pressable, FlatList, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDown from '../../components/DropDown';
import { SetStateAction, useEffect, useState } from 'react';
import styles from './AddMealStyles'
import UserMethods from '../../APIs/UserApi/UserApi'
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/Firebase';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
// import firestore from '@react-native-firebase/firestore'

let tiposComidas = [{ id: 1, name: 'Desayuno' }, { id: 2, name: 'Comida' }, { id: 3, name: 'Cena' }]
let plan = [{ id: 1, name: 'Ganar masa muscular' }, { id: 2, name: 'Perder grasa' }, { id: 3, name: 'Mantener' }]

const AddExercicie = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>();
    const auth = getAuth()
    const userLogued = auth.currentUser;
    const [tipoSeleccionado, setTipoSeleccionado] = useState('')
    const [planSeleccionado, setPlanSeleccionado] = useState('')
    const [nombre, setNombre] = useState('');
    const [ingredientes, setIngredientes] = useState('')
    const [primero, setPrimero] = useState('')
    const [segundo, setSegundo] = useState('')
    const [tercero, setTercero] = useState('')
    const accion = (item: any) => {

        setTipoSeleccionado(item)
    }
    const accion2 = (item: any) => {
        setPlanSeleccionado(item)
    }


    const rellenarForm = async () => {
        if (validateData()) {

            UserMethods.crearReceta(nombre, primero, segundo, tercero, tipoSeleccionado, planSeleccionado, ingredientes).finally(
                () => {
                    navigation.navigate("ListMeals")
                }
            )



        }

    }
    const validateData = () => {
        let isValid = true

        if (nombre.valueOf() == "") {
            Alert.alert("Debes indicar un nombre para el plato")
            isValid = false
        }
        if (tipoSeleccionado.valueOf() == "") {

            Alert.alert("Debes seleccionar un tipo de comida")
            isValid = false
        }
        if (planSeleccionado.valueOf() == "") {
            Alert.alert("Debes seleccionar el plan que se adapte a la comida")
            isValid = false
        }
        if (ingredientes.valueOf() == "") {
            Alert.alert("Por favor introduce los ingredientes")
            isValid = false
        }
        if (primero.valueOf() == "" || segundo.valueOf() == "" || tercero.valueOf() == "") {
            Alert.alert("No puedes dejar ninguno de los pasos en blanco")
            isValid = false
        }

        return isValid
    }
    const [loaded] = useFonts({
        lob: require('../../assets/fonts/Lobster-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <><ScrollView style={{ height: '100%' }}>

            <View style={styles.container}>

                <View style={styles.header}>

                    <View style={styles.headerLeft}>
                        <Text style={{ marginTop: 50 }}>
                            <Icon name="chevron-back-outline" size={30} color="#fff" onPress={() => navigation.navigate('ListExercicies')} ></Icon>
                        </Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={styles.icono}></Image>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={{ ...styles.titulo, fontFamily: 'Adamina_400Regular' }}>Rellena la siguiente información sobre la receta que desea añadir: </Text>


                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text="Indica el tipo de comida" onSelect={accion} data={tiposComidas} value={tipoSeleccionado} color1='#eede89' color2='#F8F1CC' dia={''}  ></DropDown>
                    <DropDown tam='20' colorLetra='#A3998E' redirigir={false} text="Plan de comida" onSelect={accion2} data={plan} value={planSeleccionado} color1='#eede89' color2='#F8F1CC' dia={''} ></DropDown>

                    <TextInput onChangeText={text => setNombre(text)} style={styles.textInput} value={nombre} placeholder="Nombre de la receta" maxLength={37} ></TextInput>
                    <Text style={styles.aclaracion}>* Por favor separa todos los ingredientes por una coma</Text>
                    <TextInput multiline onChangeText={text => setIngredientes(text)} style={styles.textPasos} value={ingredientes} placeholder="Ingredientes: 1 diente de ajo, 300g de espinacas, ..." maxLength={150} ></TextInput>
                    <Text style={styles.aclaracion}>* Por favor explica la receta en tres pasos</Text>
                    <TextInput multiline onChangeText={text => setPrimero(text)} style={styles.textPasos} value={primero} placeholder="Primer Paso" maxLength={250} ></TextInput>
                    <TextInput multiline onChangeText={text => setSegundo(text)} style={styles.textPasos} value={segundo} placeholder="Segundo Paso" maxLength={250} ></TextInput>
                    <TextInput multiline onChangeText={text => setTercero(text)} style={styles.textPasos} value={tercero} placeholder="Tercer Paso" maxLength={250} ></TextInput>

                    {/* <GenericButton text="OK" action={() => navigation.navigate('Plan')} /> */}
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
