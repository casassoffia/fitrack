import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { ActionCodeInfo } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Touchable, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { CheckBox } from 'react-native-elements';
interface IDropDown {
  text: string,
  conPiscina: boolean,
  isTenis: boolean
  isSpa: boolean
  isGuarderia: boolean
  setConPiscina: Function
  setTenis: Function
  setGuarderia: Function
  setSpa: Function

}

const DropDownCheckBox = ({ text, conPiscina, setConPiscina, isTenis, setTenis, setGuarderia, isSpa, isGuarderia, setSpa }: IDropDown) => {


  const [showOption, setShowOption] = useState(false)
  const onSelectedItem = (val: any) => {
    setShowOption(false)


  }
  return (
    <View>
      <TouchableOpacity style={{ ...styles.textInput, backgroundColor: '#7DB065', }} activeOpacity={0.8} onPress={() => setShowOption(!showOption)} >
        <Text style={{ ...styles.texto, fontSize: 15, fontFamily: 'Adamina_400Regular' }}>{text}</Text>
        <View style={{ marginLeft: 135 }}>
          <Icon size={20} name="caret-down-outline" color='#ffff'  ></Icon>
        </View>
      </TouchableOpacity>
      {showOption && (<View>
        <View style={styles.checkBok}>
          <CheckBox
            checked={conPiscina}
            onPress={() => setConPiscina(!conPiscina)}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='green'

          />
          <Text style={{ ...styles.checkText, fontFamily: 'Adamina_400Regular' }}>Piscina</Text></View>
        <View style={styles.checkBok}>
          <CheckBox
            checked={isTenis}
            onPress={() => setTenis(!isTenis)}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='green'

          />
          <Text style={{ ...styles.checkText, fontFamily: 'Adamina_400Regular' }}>Tennis/Padel</Text></View>
        <View style={styles.checkBok}>
          <CheckBox
            checked={isGuarderia}
            onPress={() => setGuarderia(!isGuarderia)}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='green'

          />
          <Text style={{ ...styles.checkText, fontFamily: 'Adamina_400Regular' }}>Guarderia</Text></View>
        <View style={styles.checkBok}>
          <CheckBox
            checked={isSpa}
            onPress={() => setSpa(!isSpa)}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checkedColor='green'

          />
          <Text style={{ ...styles.checkText, fontFamily: 'Adamina_400Regular' }}>Spa</Text></View>
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
  checkBok: {
    backgroundColor: '#7DB065', borderRadius: 8, alignItems: 'center',
    justifyContent: 'flex-start', minHeight: 42, flexDirection: 'row', marginTop: 8, marginLeft: 30, width: 165,
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
    color: '#ffff',
    padding: 15,
  },
  checkText: {

    color: '#fff',
    fontSize: 15,


  },
})


export default DropDownCheckBox;