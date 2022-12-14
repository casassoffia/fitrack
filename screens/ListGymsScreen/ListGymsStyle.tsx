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
        flexDirection: 'row'

    },
    fotoInicial: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 200,

    },
    nombreTitulo: {
        marginTop: 50, position: 'absolute', fontSize: 20, color: '#ffff'
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
        width: '85%',
        height: 150,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        flexDirection: 'row',

        padding: '5%'

    },
    paso2: {
        backgroundColor: '#EFE6CF',
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',

        padding: '5%'

    },
    textoIngredientes: {
        fontSize: 20,
        color: '#613000',
        textAlign: 'center',

    },



})