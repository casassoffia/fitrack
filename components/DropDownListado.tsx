import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Touchable, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';
import MealDay from '../screens/MealDayScreen/MealDayScreen';
import { useFonts } from 'expo-font';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
import Icon from 'react-native-vector-icons/Ionicons';

interface IDropDown {
  text: string,
  data: Array<any>,
  value: string,
  onSelect: (item: any) => void,
  view: string


}


const DropDown = ({ text, data, value, onSelect, view }: IDropDown) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [showOption, setShowOption] = useState(false)
  const [loaded] = useFonts({
    "Adamina_400Regular": Adamina_400Regular,
  });
  const onSelectedItem = (val: any) => {
    setShowOption(false)
    onSelect(val)
    if (view.valueOf() == "Ejercicio") {
      navigation.navigate('ExercicieDay', { NombreEjercicio: val })
    } else {

      navigation.navigate('Meal', { nombre: val, Tipo: text.toString().toLowerCase() })
    }



  }
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <TouchableOpacity style={{ ...styles.textInput }} onPress={() => setShowOption(!showOption)} >

        <Text style={{ ...styles.texto, fontFamily: 'Adamina_400Regular', position: 'absolute' }}>{text}</Text>

        <View style={{ marginLeft: 300 }}>
          <Icon size={30} name="caret-down-outline" color='#ffff'  ></Icon>
        </View>


      </TouchableOpacity>
      {showOption && (<View>{data.map((val, id: any) => {

        return (
          <TouchableOpacity
            key={id}
            onPress={() => onSelectedItem(val)}
            style={{
              backgroundColor: '#7DB065', paddingHorizontal: 6, paddingVertical: 8, borderRadius: 8, width: '90%', alignItems: 'center',
              minHeight: 42, flexDirection: 'row', marginTop: 8, marginLeft: 30, opacity: 0.65,
            }}>
            <Text style={{ ...styles.valores, fontFamily: 'Adamina_400Regular' }}>{val.valueOf()}
            </Text>

          </TouchableOpacity>
        )
      })}</View>)}
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
  icono: {

    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: 'contain',
    marginLeft: 130,
    marginTop: 20
  },
  icono2: {

    width: 50,
    height: 50,
    marginLeft: 300,
    position: 'relative'
  },
  body: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',
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


export default DropDown;