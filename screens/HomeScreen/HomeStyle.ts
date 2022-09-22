import { BackgroundImage } from '@rneui/themed/dist/config'
import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
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
  fotoInicial: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 200,
  },
  forma: {
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,

  },
  pie: {
    flex: 0.1,
    flexDirection: 'column',
    position:'absolute',
    backgroundColor: '#61b254',
    bottom:'7%'
    
  },
  contenedoricono: {
    width: 150,
    height: 150,
    marginTop: '8%',
    borderRadius: 100,
    marginLeft: 140,
    position: 'absolute',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nombre: {
    fontSize: 30,
    justifyContent: 'center',
    marginLeft: 150,
    color: '#fff',
    fontFamily: 'lob'
  },
  body: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',
  }
})