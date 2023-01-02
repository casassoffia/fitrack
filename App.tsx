import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation';
import React, { useEffect, useState } from 'react';
// import auth from '@react-native-firebase/auth';
export default function App() {

  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}

