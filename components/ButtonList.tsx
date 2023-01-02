import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';

interface IGenericButton {
    text: string,
    action: Function,

}
export function ButtonList({ text, action }: IGenericButton) {

    return (
        <TouchableOpacity onPress={() => action()}
            style={{
                ...styles.button,


            }}
        >
            <Text style={{
                ...styles.buttonText,
                fontFamily: "Adamina_400Regular"

            }}>
                {text}
            </Text>
        </TouchableOpacity>


    )
}
const styles = StyleSheet.create({
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: '1%',


    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#613000'

    },
})