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
    flex: 0.18,
    backgroundColor: '#61b254',
    flexDirection: 'row',
  },
  icono: {

    width: 70,
     height: 70,
     borderRadius: 80 / 2,
    marginTop: 50,
    marginLeft: 130,
    
  },
  body: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  nombre: {
    fontSize: 30,
    justifyContent: 'center',

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
  texto: {
    fontSize: 20,
     color: '#613000'
  },

  pie: {
    flex: 0.1,
    flexDirection: 'column',
    backgroundColor: '#61b254',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    width: '50%',
    height: '10%',


  },

  buttonText: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 20,

  },
  contenedor: {
    marginTop:24,
    width: '90%',
    height: '60%',
    backgroundColor: '#F8F1CC',
    borderRadius: 50,
    justifyContent:'flex-start',
    alignContent: 'center',
    padding:'4%',
  }
})