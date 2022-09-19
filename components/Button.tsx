import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';

interface IGenericButton {
    text: string,
    action: Function,
}
export function GenericButton({ text, action }: IGenericButton) {

    return (
        <TouchableOpacity onPress={() => action()}
            style={{
                ...styles.button,
                backgroundColor: '#F8F1CC',
                marginTop: 20
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
        width: '50%',
        height: '10%',


    },

    buttonText: {
        textAlign: 'center',
        marginTop: 11,
        fontSize: 20,

    },
})