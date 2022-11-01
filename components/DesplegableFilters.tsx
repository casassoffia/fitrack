import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Touchable, TouchableOpacity, View, Text, StyleSheet, Image, } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';
import { useFonts } from 'expo-font';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownFilters from './DropDownFilters';
import { ButtonFilters } from './ButtonFilters';
import { DocumentData } from 'firebase/firestore';
import GymMethods from '../APIs/GymAPi';
import DropDownCheckBox from './DropDownCheckBox';

interface IDropDown {
  text: string,
  gimnasios: Array<DocumentData>,
  onSelect: (item: any) => void

}

let precios = [{ id: 1, name: 'Selecciona un rango' }, { id: 2, name: '20-30' }, { id: 3, name: '30-40' }, { id: 4, name: '40-50' }, { id: 5, name: '50-60' }]

const DesplegableFilters = ({ text, gimnasios, onSelect }: IDropDown) => {

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [showOption, setShowOption] = useState(false)
  const [conPiscina, setConPiscina] = useState(false);
  const [isTenis, setTenis] = useState(false);
  const [isGuarderia, setGuarderia] = useState(false);
  const [isSpa, setSpa] = useState(false);
  const [selectedItem, setSelectedItem] = useState('')

  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });
  const onSelectedItem = (val: any) => {
    setShowOption(false)

    navigation.navigate('ExercicieDay', { NombreEjercicio: val })


  }
  const accion = (item: any) => {
    setSelectedItem(item)
  }
  const cambiarEstado = (item: any) => {
    setSelectedItem(item)
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

      {showOption && (<View >

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <DropDownCheckBox conPiscina={conPiscina} isTenis={isTenis} isSpa={isSpa} isGuarderia={isGuarderia} text={'Selecciona un servicio'} setConPiscina={setConPiscina} setSpa={setSpa} setTenis={setTenis} setGuarderia={setGuarderia}></DropDownCheckBox>
          <DropDownFilters text="Selecciona un precio" onSelect={accion} data={precios} value={selectedItem}   ></DropDownFilters>

        </View>
        <ButtonFilters action={() => GymMethods.getGymsFilter(conPiscina, isTenis, isSpa, isGuarderia, selectedItem)} text={'Aplicar Filtros'} color={'#EFE6CF'} onSelect={onSelect}></ButtonFilters>
      </View>)
      }
    </View >
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


export default DesplegableFilters;