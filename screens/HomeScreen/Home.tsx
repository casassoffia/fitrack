import { StyleSheet, View, Text, Pressable, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import styles from './HomeStyle'
import React from 'react';

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),

  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <View style={styles.headerLeft}>

        </View>

        <View style={styles.headerRight}>
          <Image source={require('../../assets/imagenes/fotoinicial.jpg')} style={styles.fotoInicial}></Image>

        </View>

      </View>
      <View style={styles.body}>
        <Image source={require("../../assets/imagenes/rosaPalo.png")} style={styles.forma}></Image>
        <View style={styles.contenedoricono}>
          <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={{ borderRadius: 100 }}></Image>
        </View>

        <GenericButton text="Iniciar Sesion" action={() => navigation.navigate('Login')} color='#F8F1CC' />
        <GenericButton text="Registrar" action={() => navigation.navigate('Register')} color='#F8F1CC' />



        <View style={styles.pie}>
          <Text style={styles.nombre}> fiTrack </Text>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home;