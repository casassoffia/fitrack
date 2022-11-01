import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'

interface ButtonDays {
    text: string,
    action: Function,
}
export function ButtonDays({ text, action }: ButtonDays) {
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
                backgroundColor: '#7DB065',
                opacity: 0.65,
                marginTop: 20,
                borderRadius: 50,


            }}
        >
            <Text style={{
                ...styles.buttonText,
                fontFamily: 'Adamina_400Regular'

            }}>
                {text}
            </Text>
        </TouchableOpacity>


    )
}
const styles = StyleSheet.create({
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
        padding: '5%',


    },

    buttonText: {
        textAlign: 'center',
        fontSize: 30,

        color: '#613000'

    },
})