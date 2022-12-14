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
    nombre:{
        fontSize: 30,
        justifyContent:'center',
       
        marginLeft:150,
        color:'#fff',
        fontFamily:'lob'
        
      },
    titulo:{
    
        color:'#fff',
       marginTop: 150, marginLeft: 20, position: 'absolute', fontSize: 29
       
    },
    textInput:{
      width: '90%',
      padding: 15,
      height: 55,
      backgroundColor: '#F8F1CC',
      alignItems:'center',
      justifyContent:'center',
      marginTop:30,
      marginLeft:25,
      fontSize: 18,
      borderRadius: 20,
        color:'#A3998E'
      
      
    },
    scrollView: {
      backgroundColor:'#fff',
      marginHorizontal: 40,
    },
    pie:{
      flex: 0.1,
      flexDirection:'column',
      backgroundColor:'#61b254',
    },
    button:{
      alignSelf: 'center',
      borderRadius:10,
      width:'50%',
      height:'10%',
      
      
    },
    
    buttonText: {
      textAlign: 'center',
      marginTop: 11,
      fontSize:20,
     
    },
  })