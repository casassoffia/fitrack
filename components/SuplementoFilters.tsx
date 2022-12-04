import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Touchable, TouchableOpacity, View, Text, StyleSheet, Image, } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';
import MealDay from '../screens/MealDayScreen/MealDayScreen';
import { useFonts } from 'expo-font';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import DropDownFilters from './DropDownFilters';
import { ButtonFilters } from './ButtonFilters';
import { DocumentData } from 'firebase/firestore';
import GymMethods from '../APIs/GymAPi';


interface IDropDown {
  text: string,
  suplementos: Array<DocumentData>
  onSelect: (item: any) => void




}

let precios = [{ id: 1, name: 'Selecciona un precio' }, { id: 2, name: '10-20€' }, { id: 3, name: '20-30€' }, { id: 4, name: '30-40€' }, { id: 5, name: '40-50€' }, { id: 6, name: '50-60€' }, { id: 7, name: '60-70€' }]
let sabores = [{ id: 1, name: 'Selecciona un sabor' }, { id: 2, name: 'Chocolate' }, { id: 3, name: 'Fresa' }, { id: 4, name: 'Vainilla' }]

const SuplementoFilters = ({ text, suplementos, onSelect }: IDropDown) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [showOption, setShowOption] = useState(false)

  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedSabor, setSelectedSabores] = useState('')

  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });
  const onSelectedItem = (val: any) => {
    setShowOption(false)

    navigation.navigate('ExercicieDay', { NombreEjercicio: val })


  }
  const accion = (item: any) => {
    setSelectedPrice(item)
  }
  const accion2 = (item: any) => {
    setSelectedSabores(item)
  }
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity style={{ ...styles.textInput }} onPress={() => setShowOption(!showOption)} >



        <View >
          <Icon name="filter-outline" size={30} color='#ffff' style={{ marginRight: 300 }} ></Icon>
        </View>
        <Text style={{ ...styles.texto, fontFamily: 'Adamina_400Regular', position: 'absolute' }}>{text}</Text>


      </TouchableOpacity>

      {showOption && (<View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DropDownFilters text="Selecciona un precio" onSelect={accion} data={precios} value={selectedPrice} ></DropDownFilters>
          <DropDownFilters text="Selecciona un sabor" onSelect={accion2} data={sabores} value={selectedSabor} ></DropDownFilters></View>


        <ButtonFilters action={() => GymMethods.getSuplementosFilter(selectedPrice, selectedSabor)} text={'Aplicar Filtros'} color={'#EFE6CF'} onSelect={onSelect}></ButtonFilters>
      </View>)}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',
  },
  headerLeft: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',

  },
  headerRight: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',

  },
  header: {
    flex: 0.3,
    backgroundColor: '#61b254',
    flexDirection: 'row',
  },
  pie: {
    flex: 1,
    backgroundColor: '#ffff',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',
  },
  checkbox: {
    marginRight: 200


  },
  nombre: {
    fontSize: 30,
    justifyContent: 'center',
    marginTop: 140,
    marginLeft: 150,
    color: '#fff',
    fontFamily: 'lob'

  },
  titulo: {
    fontSize: 35,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
    marginTop: 25,

  },
  textInput: {
    width: 400,
    height: 55,
    backgroundColor: '#7DB065',
    flexDirection: 'row',
    opacity: 0.65,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    width: '50%',
    height: '10%',

  },
  texto: {

    color: '#ffff',

    fontSize: 40,

  },
  valores: {
    position: 'absolute',
    color: '#ffff',
    padding: 15,
    fontSize: 20
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 20,
    fontFamily: 'Adamina_400Regular'


  },
})


export default SuplementoFilters;