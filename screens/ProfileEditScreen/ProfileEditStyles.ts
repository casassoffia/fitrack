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
    flex: 0.2,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  icono: {

    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: 'contain',
    marginLeft: 130,
    marginTop: 50
  },
  body: {
    flex: 1,
    backgroundColor: '#61b254',
    flexDirection: 'column',
     marginBottom:100
  },
  nombre: {
    fontSize: 30,
    justifyContent: 'center',

    marginLeft: 150,
    color: '#fff',
    fontFamily: 'lob'

  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 25,
  
  },
    aclaracion: {
    fontSize: 20,
    color: '#fff',
   marginTop:20,
    marginLeft: 25,
  
  },
  textInput: {
    width: 350,
    padding: 15,
    height: 55,
    backgroundColor: '#F8F1CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 25,
    fontSize: 18,
    borderRadius: 20,
    color:'#A3998E'

  },
    textPasos: {
    width: 350,
    padding: 15,
    height: 100,
    backgroundColor: '#F8F1CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 25,
    fontSize: 18,
    borderRadius: 20,

  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 40,
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
    height: '5%',
     shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


  },

  buttonText: {
    textAlign: 'center',
    marginTop: 11,
    fontSize: 20,

  },
})