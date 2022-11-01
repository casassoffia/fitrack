import { StyleSheet, Button, Text, View, Image, TouchableOpacity, Modal, Dimensions, Pressable } from 'react-native';
import React, { Component, useState } from 'react';
import { useFonts } from 'expo-font';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icon as Icon2 } from '@rneui/themed';

interface IBottomPopUp {
    show: boolean,
    animationType: "slide",
    closePopup: Function,
    haveOutsideTouch: boolean

}
export function BottomPopUp({ show, animationType, closePopup, haveOutsideTouch }: IBottomPopUp) {
    // const [show2, setShow2] = useState(false)
    // const show = () => {
    //     setShow2(true)
    // }
    // const close = () => {
    //     setShow2(false)
    // }
    const renderOutsideTouchable = (onTouch: any) => {
        const view = <View style={{ flex: 1, width: '100%' }}></View>
        if (!onTouch) {
            return view
        }
        <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
            {view}
        </TouchableWithoutFeedback>
    }
    return (
        <Modal
            animationType={animationType} transparent={true} visible={show} onRequestClose={() => { }}>
            <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end' }}>
                <Pressable onPress={() => {
                    if (!haveOutsideTouch) { return; }
                    closePopup()
                }}></Pressable>
                <View style={{
                    bottom: 0,
                    backgroundColor: 'white',
                    width: '100%',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    maxHeight: Dimensions.get('window').height * 0.4,
                    height: Dimensions.get('window').height * 0.4,
                    paddingHorizontal: 10
                }}>
                    <Text>Hola</Text>
                    <TouchableOpacity >
                        <Icon2 type='font-awesome' name="edit" onPress={() => !show}></Icon2>

                    </TouchableOpacity>
                </View>

            </View>
        </Modal>

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
        padding: '3%',


    },

    buttonText: {
        textAlign: 'center',
        marginTop: 11,
        fontSize: 25,

    },
})