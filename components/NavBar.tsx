import { ActionCodeInfo } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Touchable, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreenNavigationProp } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { Icon as Icon2 } from '@rneui/themed';
import { color } from 'react-native-reanimated';

interface INavBar {
  search: boolean,
  listExercicies: boolean,
  plan: boolean,
  listMeals: boolean,
  profile: boolean,

}
const NavBar = ({ search, listExercicies, plan, listMeals, profile }: INavBar) => {
  const [colorSearch, setSearch] = useState('')
  const [colorPlan, setPlan] = useState('')
  const [colorExercicies, setExercicies] = useState('')
  const [colorMeals, setMeals] = useState('')
  const [colorProfile, setProfile] = useState('')

  useEffect(() => {
    if (search) {
      setSearch('green')
    } else {
      setSearch('#ffff')
    }
    if (plan) {
      setPlan('green')

    } else {
      setPlan('#ffff')
    }
    if (listExercicies) {
      setExercicies('green')
    } else {
      setExercicies('#ffff')
    }
    if (listMeals) {
      setMeals('green')
    } else {
      setMeals('#ffff')
    }
    if (profile) {
      setProfile('green')
    } else {
      setProfile('#ffff')
    }
  }, [])


  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Icon name="search-outline" size={30} onPress={() => navigation.navigate('Search')} color={colorSearch}></Icon>
        <Icon name="barbell-outline" size={30} color={colorExercicies} onPress={() => navigation.navigate('ListExercicies', { reload: false })} ></Icon>
        <Icon name="home-outline" size={30} color={colorPlan} onPress={() => navigation.navigate('Plan', { reload: false })} ></Icon>
        <Icon2 type='material-community' name="silverware-fork-knife" color={colorMeals} onPress={() => navigation.navigate('ListMeals', { reload: false })} ></Icon2>
        <Icon name="person-circle-outline" size={30} color={colorProfile} onPress={() => navigation.navigate('Profile', { success: false })} ></Icon>
      </View>
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
    width: 350,
    height: 60,
    backgroundColor: '#F8F1CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 25,
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
    fontSize: 18,
    position: 'absolute',
    color: '#907761',
    padding: 15,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 20,

  },
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,

  },
  NavBar: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#61b254',
    width: '90%',
    height: '100%',
    justifyContent: 'space-evenly',
    borderRadius: 40

  }
})


export default NavBar;