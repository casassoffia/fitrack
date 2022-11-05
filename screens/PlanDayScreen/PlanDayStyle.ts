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
  
  paso: {
    backgroundColor: '#7DB065',
    width: '97%',
    height: 200,
    marginTop:30,
    borderRadius: 50,
    padding: '2%',
    justifyContent: 'center',
    alignItems:'center'
  },
    contendor1: {
    marginTop:'2%',
    width: '90%',
    height: '90%',
   backgroundColor: '#EFE6CF',
    alignItems:'center',
    //  justifyContent:'space-evenly',
      borderRadius: 50,
    padding:'2%'
  },
  textConsejo: {
    color:'#45322e',
    fontSize: 20,
    
  },
  iconoBombilla: {
 marginRight:10
  }

})