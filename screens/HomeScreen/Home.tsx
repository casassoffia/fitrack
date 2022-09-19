import { StyleSheet, View, Text, Pressable, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { HomeScreenNavigationProp } from '../../navigation/types';
import { GenericButton } from '../../components/Button';
import styles from './HomeStyle'

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [loaded] = useFonts({
    lob: require('../../assets/fonts/Lobster-Regular.ttf'),
    //noto: require('./assets/fonts/NotoSerifHK-VariableFont_wght.ttf'),

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
        <Image source={require("../../assets/imagenes/iconoBueno2.jpeg")} style={styles.icono}></Image>
       
        <GenericButton text="Iniciar Sesion" action={() => navigation.navigate('Login')} />
        <GenericButton text="Registrar" action={() => navigation.navigate('Register')} />

        <Text style={styles.nombre}> fiTrack </Text>

      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home;