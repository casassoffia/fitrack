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
   head: {  height: 40, width: 300, backgroundColor: '#f1f8ff'  },
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
  nombreTitulo: {
    marginTop: 110, marginLeft: 130, position: 'absolute', fontSize: 25, color: '#95520e'
  },

  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
      marginBottom:130
  },
    paso: {
        backgroundColor: '#7DB065',
        width: '90%',
        height: 150,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        padding: '5%'

  },
     paso2: {
        backgroundColor: '#EFE6CF',
        width: '90%',
        height: '70%',
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center',
       padding: '5%',
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
    panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
     panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
    panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header2: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  textoRecuadro: {
    color: '#A3998E', fontSize: 15,
  },
   textoRecuadroFuera: {
    color: '#fff', fontSize: 20,
  },
   button: {
        alignSelf: 'center',
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
      flexDirection: 'row',
        marginTop:50

  },
     buttonOut: {
        alignSelf: 'center',
        width: '50%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
      flexDirection: 'row',
        marginTop:50



  },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        position: 'absolute',
        color: '#613000'

  },
      buttonTextOut: {
        textAlign: 'center',
        fontSize: 15,
        position: 'absolute',
        color: '#613000'

    },
    circulo: {
        width: 50,
        height: 50,
        borderRadius: 60 / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 300
  },
  text: { textAlign: 'center' },
  wrapper: { flexDirection: 'row' },
      row: {  height: 28,  },
  table: {
  
    backgroundColor: '#f4e9ab',
    marginTop: 20,
    height: '100%',
    width: '80%',
    borderRadius: 20
    
  },
  title: { flex: 1.35, backgroundColor: '#f6f8fa' },
  tituloTabla: {
    color: '#95520e',
    fontSize: 25,
     shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 3.84,
        elevation: 5,
  },
  textoTabla: {
    color: '#7DB065',
    fontSize:19
   }

})