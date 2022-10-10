import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { ActionCodeInfo } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Touchable, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreenNavigationProp } from '../navigation/types';
import MealDay from '../screens/MealDayScreen/MealDayScreen';

interface IDropDown {
  text: string,
  data: Array<any>,
  value: any,
  onSelect: (item: any) => void,



}

const DropDownFilters = ({ text, data, value, onSelect }: IDropDown) => {


  const [showOption, setShowOption] = useState(false)
  const onSelectedItem = (val: any) => {
    setShowOption(false)
    onSelect(val)


  }
  return (
    <View>
      <TouchableOpacity style={{ ...styles.textInput, backgroundColor: '#7DB065', }} activeOpacity={0.8} onPress={() => setShowOption(!showOption)} >
        <Text style={{ ...styles.texto, fontSize: 12, fontFamily: 'Adamina_400Regular' }}>{!!value ? value?.name : text}</Text>
        <View style={{ marginLeft: 125 }}>
          <Icon size={20} name="caret-down-outline" color='#ffff'  ></Icon>
        </View>
      </TouchableOpacity>
      {showOption && (<View>{data.map((val, i) => {

        return (
          <TouchableOpacity
            key={String(i)}
            onPress={() => onSelectedItem(val)}
            style={{
              backgroundColor: value?.id == val.id ? '#61b254' : '#7DB065', paddingHorizontal: 6, paddingVertical: 8, borderRadius: 8, width: '70%', alignItems: 'center',
              justifyContent: 'space-between', minHeight: 42, flexDirection: 'row', marginTop: 8, marginLeft: 60
            }}>
            <Text style={{ ...styles.texto, fontSize: 12, }}>{val.name}
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
    marginLeft: 130,
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
    width: 180,
    height: 50,
    backgroundColor: '#F8F1CC',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 30,
    marginLeft: 20,
    fontSize: 25,
    padding: 15,
    borderRadius: 20,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    width: '50%',
    height: '10%',

  },
  texto: {

    position: 'absolute',
    // color: '#907761',
    padding: 15,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 20,


  },
})


export default DropDownFilters;