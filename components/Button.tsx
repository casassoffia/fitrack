import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'

interface IGenericButton {
    text: string,
    action: Function,
    color: string
}
export function GenericButton({ text, action, color }: IGenericButton) {
    const [loaded] = useFonts({
        "Adamina_400Regular": Adamina_400Regular,

    });
    if (!loaded) {
        return null;
    }
    return (
        <TouchableOpacity onPress={() => action()}
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
        width: '60%',
        height: '10%',
        marginTop: '10%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: '0.5%',


    },

    buttonText: {
        textAlign: 'center',
        marginTop: 11,
        fontSize: 25,
        fontFamily: "Adamina_400Regular",
        color: '#613000'

    },
})