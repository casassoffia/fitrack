import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61b254',
        flexDirection:'column',
       
      },
      headerLeft: {
          flex: 1,
          backgroundColor: '#61b254',
          flexDirection:'column',
          
        },
        headerRight: {
          flex: 1,
          backgroundColor: '#61b254',
          flexDirection:'column',
         
        },
        header: {
          flex: 0.3,
          backgroundColor: '#61b254',
          flexDirection:'row',
          
         
        },
        fotoInicial: {
          width:'100%',
          height:'100%',
          borderBottomLeftRadius:200,
        },
        forma: {
          borderTopRightRadius:100,
          borderBottomLeftRadius:100,
          
        },
        icono: {
          marginBottom:200,
           width: 150,
           height: 150,
           alignItems:'center',
           justifyContent:'center',
           borderRadius: 100,
           resizeMode:'contain',
           marginLeft:140,
           position: 'absolute',
           marginTop:30
          
      
        },
        nombre:{
          fontSize: 30,
          justifyContent:'center',
          marginTop:100,
          marginLeft:150,
          color:'#fff',
          fontFamily:'lob'
          
        },
      body: {
          flex: 1,
          backgroundColor: '#61b254',
          flexDirection:'column',
      }
    })