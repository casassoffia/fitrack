import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
    container: {
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
        height: 200

    },
    titulo: {
        marginTop: '10%',
        backgroundColor: '#7DB065',
        opacity: 0.65,
        width: '97%',
        height: '10%',
        color: '#9CCC65',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15

    },
    textoTitulo: {
        fontSize: 40,
        color: '#fff'

    },

    nombre: {
        width: 150,
        height: 150,

        position: 'absolute',

    },
    iconoAtras: {
        marginTop: 50,
        marginLeft: 10,
        position: 'absolute'
    },
    nombreTitulo: {
        marginTop: 70, marginLeft: 10, position: 'absolute', fontSize: 20, color: '#ffff'
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
        marginTop: 20

    },
    paso: {
        backgroundColor: '#7DB065',
        width: '100%',
        height: 150,
        marginTop: 10,
        justifyContent: 'flex-start',
        borderRadius: 50,
        alignSelf: 'center',
        // flexDirection: 'row',
        padding: '5%',


    },
    paso2: {
        width: '70%',
        height: '60%',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        marginLeft: 50,
        marginTop: 10

    },
    textoIngredientes: {
        fontSize: 17,
        color: '#ffff',
        textAlign: 'center',

    },
    nombreSuplemento: {
        fontSize: 18,
        color: '#EFE6CF',
        textAlign: 'center',

    },
    carritoposicion: {
        position: 'absolute',




    }



})