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
        width: '100%',
        height: 300

    },
  titulo: {
  
    backgroundColor: '#9CCC65',
    opacity:0.65,
    width: '100%',
    height: '10%',
    color: '#9CCC65',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15
    
  },
  textoTitulo: {
    fontSize: 25,
    color:'#221816'
    
  },

  nombre: {
    width: 150,
    height: 150,

    position: 'absolute',

  },
     nombreTitulo: {
    marginTop: 200, marginLeft: 10, position: 'absolute', fontSize: 25, color: '#ffff'
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
    marginBottom: 100
  },
  contendor: {
    marginTop:'2%',
    width: '90%',
    height: '100%',
    backgroundColor: '#9CCC65',
    opacity:0.65,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 50,
  },
   contendor1: {
    marginTop:'2%',
    width: '90%',
    height: '100%',
    backgroundColor: '#9CCC65',
    opacity:0.65,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 50,
  },
  ingredientes: {
    alignItems: 'center',
    justifyContent:'space-around',
    width: '80%',
    height: '80%',
    backgroundColor: '#EFE6CF',
    borderRadius: 50,
     shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
     
  },
  receta: {
    alignItems: 'center',
    width: '100%',
    height: '80%',
   

    borderRadius: 50,
    
  },
  textoTituloIngredientes: {
    color:'#221816',
   fontSize:35
   
  },
  textoIngredientes: {
    fontSize: 15,
    color: '#45322e',
    textAlign: 'center',
    width:200
   
  },
   textoRecetas: {
     fontSize: 16,
     
  },
  paso: {
    backgroundColor: '#EFE6CF',
    width: '90%',
    height: 150,
    marginTop:10,
    justifyContent: 'center',
    borderRadius: 50,
   alignSelf: 'center',
    flexDirection: 'row',
    
    padding:'5%'

  },
  circulo: {
        width: 50,
        height: 50,
        borderRadius: 60 / 2,
        backgroundColor: 'white',
        alignItems: 'center',
    justifyContent: 'center',
       
   
       
    },
  numeroCirculo: {
   fontSize:20
  },
  texto: {
    // marginRight: '50%',
    // marginTop: '10%'
    backgroundColor: 'red',
    width: '80%',
    height: '70%',
    
   
  }


  


})