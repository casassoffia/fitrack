import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';

interface ButtonDays {
    text: string,
    action: Function,
}
export function ButtonDays({ text, action }: ButtonDays) {


    return (
        <TouchableOpacity onPress={() => action()}
            style={{
                ...styles.button,
                backgroundColor: '#D9EFCF',
                marginTop: 20,
                borderRadius: 50,

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

        color: '#86895d'

    },
})