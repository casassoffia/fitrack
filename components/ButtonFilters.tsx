import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';
import GymMethods from '../APIs/UserApi/GymAPi';
import { DocumentData } from 'firebase/firestore';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'
interface IFiltros {
    text: string,
    onSelect: (item: any) => void
    color: string

    action: Function,


}
export function ButtonFilters({ text, color, onSelect, action }: IFiltros) {
    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,
    });
    return (
        <TouchableOpacity onPress={() => action().then(
            (devuelto: any) => {
                onSelect(devuelto)
            }
        )}
            style={{
                ...styles.button,
                backgroundColor: color,


            }}
        >
            <Text style={{
                ...styles.buttonText,

            }}>
                {text}
            </Text>
        </TouchableOpacity>


    )
}
const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        width: 150,
        height: 50,

        marginTop: '5%',
        marginBottom: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: '2%',


    },

    buttonText: {
        textAlign: 'center',
        marginTop: 11,
        fontSize: 14,
        fontFamily: 'Adamina_400Regular'

    },
})