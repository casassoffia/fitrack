import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  headerLeft: {
    flex: 1,
    flexDirection: 'column',

  },
  headerRight: {
    flex: 1,
    flexDirection: 'column',

  },
  header: {
    flex: 0.2,
    flexDirection: 'row',

  },
  fotoInicial: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 200,

  },
  forma: {
    borderBottomLeftRadius: 120,

  },
  titulo: {
   marginTop:'10%',
    backgroundColor: '#7DB065',
    opacity:0.65,
    width: '97%',
    height: '10%',
    color: '#9CCC65',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15
    
  },
  textoTitulo: {
    fontSize: 40,
    color:'#fff'
    
  },

  nombre: {
    width: 150,
    height: 150,

    position: 'absolute',

  },
  icono: {
    width: 150,
    height: 150,
    marginLeft: 80,
    marginBottom: 200,
    resizeMode: 'contain',
    position: 'absolute',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  


})