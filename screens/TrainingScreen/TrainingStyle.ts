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
    flex: 0.45,
    flexDirection: 'row',
   

  },
  fotoInicial: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 200,

  },
  forma: {
        // borderBottomLeftRadius: 120,

        width: '100%',
        height: 300

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
   nombreTitulo: {
    marginTop: 200, marginLeft: 20, position: 'absolute', fontSize: 30, color: '#ffff'
  },
    iconoAtras: {
    marginTop: 70,
    marginLeft: 10,
    position: 'absolute'
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
    marginBottom:310
  },
  contenedor: {
    width: '100%',
    height: '30%',
    backgroundColor: '#D9EFCF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop:10
  },
  contenedorInterior: {
    width: '90%',
    height: '70%',
    backgroundColor: '#EEEFB8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    borderRadius: 50,
  
  },
  contenedorNombre: {
    width: '90%',
    height: '12%',
    marginTop:'10%',
    backgroundColor: '#D9EFCF',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems:'center',
    padding: '8%',
     shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textoInterior: {
    fontSize: 16,
    color: '#613000'
  },
   textoNombre: {
     fontSize: 20,
      color: '#613000'
  }
  


})