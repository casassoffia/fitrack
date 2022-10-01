import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import { Adamina_400Regular } from '@expo-google-fonts/adamina'

interface IAnyadirButton {
    text: string,
    action: Function,
}
export function AnyadirButton({ text, action }: IAnyadirButton) {
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
                backgroundColor: '#EFE6CF',
                marginTop: 20,
                borderRadius: 50,

            }}
        >

            <View style={{ ...styles.circulo }}>
                <Icon size={30} name="add-outline" color='#613000'  ></Icon>
            </View>

            <Text style={{
                ...styles.buttonText, fontFamily: 'Adamina_400Regular'

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
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',



    },

    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        position: 'absolute',
        color: '#613000'

    },
    circulo: {
        width: 50,
        height: 50,
        borderRadius: 60 / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 300







    },
})