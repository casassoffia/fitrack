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
  pie: {
    flex: 0.1,
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: '#61b254',
    bottom: '7%'

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
      color:'#A3998E'
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
        buttonTextOut: {
        textAlign: 'center',
        fontSize: 15,
          marginTop: 20,
          width: 240,
      marginLeft:100,
          color: '#fff',

       

    },
})