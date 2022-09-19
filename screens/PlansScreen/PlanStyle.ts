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
    fontSize: 24,
    color: '#955f20'

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