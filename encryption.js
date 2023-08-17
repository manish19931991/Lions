import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Base64 } from 'js-base64';
import { useState } from 'react';
const image = require('../google/add.png');
const Encryption = () => {
    const [encryption, Setencryption] = useState("")
    const [Decryption, SetDecryption] = useState("")
    encryptPassword = () => {
        const encode = Base64.encode(encryption);
        SetDecryption(encode);
        // if (encode.length > 1){
        //     SetDecryption("00000000000")
        // }
      }
    decryptPassword = () => {
        const decode = Base64.decode(Decryption);
        SetDecryption(decode);
      }
  return (
    <View style={styles.Container}>
    <TextInput
      placeholder="Enter Password Here"
      onChangeText={data => Setencryption(data) }
      style={styles.textInputStyle}
    />
    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 40 }}>
      {Decryption}
    </Text>  
    <TouchableOpacity style={styles.button} onPress={() => encryptPassword()} >
      <Text style={styles.text}>Encode Password</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => decryptPassword()} >
      <Text style={styles.text}>Decode Password</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Encryption
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