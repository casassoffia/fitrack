import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';
// import Icon from 'react-native-vector-icons/Icon';


interface ButtonPlan {
    text: string,
    action: Function,
}
export function PlanButton({ text, action }: ButtonPlan) {


    return (
        <TouchableOpacity onPress={() => action()}
            style={{
                ...styles.button,
                backgroundColor: '#7DB065',
                marginTop: 20,
                marginLeft: 20,
                borderRadius: 12,

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
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: '3%',


    },

    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#ffff'

    },
    icono2: {

        width: '20%',
        height: '20%',

        position: 'relative',
        color: '#ffff'
    },
})