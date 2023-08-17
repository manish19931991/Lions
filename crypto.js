import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import CryptoJS from "react-native-crypto-js";
import { useState } from 'react';

const crypto = () => {
  let uri = "https://w3schools.com/my test.asp?name=ståle&car=saab";
let encoded = encodeURIComponent(uri); 
 console.log(encoded);

  return (
    <View style={styles.Container}>
   <Text>manish</Text>
  </View>
  )
}

export default crypto
const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInputStyle: {
      textAlign: 'center',
      height: 42,
      width: '80%',
      borderWidth: 1,
      borderColor: '#9e9e9e',
      borderRadius: 7,
    },
    button: {
      width: '80%',
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: 'blue',
      borderRadius: 3,
      marginTop: 40
    }, 
    text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      padding: 5
    }
  });