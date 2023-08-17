import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
const image = require('../google/BG.png');
const { width, height } = Dimensions.get('screen');

const Forgotpassword = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{ width: width, flex: 1, height: height }}>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                        alignItems: "flex-end",
                        marginLeft: 28, marginTop: 64, alignSelf: "flex-start"
                    }}>
                        <Image style={{ height: 30, width: 30 }} source={require("../google/back_arrow.png")} />
                    </TouchableOpacity>
                    <View style={{ alignItems: "flex-start", marginLeft: 35, marginTop: 39 }}>
                        <Text style={{ color: "#EEEEEE", fontSize: 28, fontFamily: 'Roboto-Bold', fontWeight: "bold" }}>Forgot Password</Text>
                    </View>
                    <View style={{ marginTop: 12, marginLeft: 35 }}>
                        <Text style={{ color: "#EEEEEE", fontSize: 16, fontWeight: "bold" }}>Enter email associated with</Text>
                        <Text style={{ color: "#EEEEEE", fontSize: 16, fontWeight: "bold" }}>your account</Text>
                    </View>
                    <View style={{ marginTop: 33, marginLeft: 40,flex: 1,}}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 26, height: 26, marginTop: 12 }} source={require("../google/email.png")} />
                            <View style={{ marginLeft: 10, }} >
                                <TextInput style={{  fontSize: 20,color:"white", width: 300}}
                                    placeholder='E-Mail'
                                    keyboardType="email-address"
                                    placeholderTextColor={'#9F9F9F'}

                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            borderRadius: 1,
                            borderColor: '#9F9F9F',
                            borderWidth: 1,
                            marginTop: 10,
                            marginHorizontal:35,
                            alignItems: "flex-start"
                        }}></View>
                         <TouchableOpacity onPress={() => navigation.navigate('VerifyOtp')} style={{
                            marginHorizontal: 10,
                            borderRadius: 5,
                            height: 60,
                            marginTop: 44, marginLeft: 31, marginRight: 31,
                        }}>
                            <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={{ color: "white", alignSelf: "center", paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                                    Send</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View
                                style={{
                                    borderRadius: 1,
                                    borderColor: '#9F9F9F',
                                    borderWidth: 2,
                                    marginLeft: 10,
                                    width: "35%",
                                    marginTop:350,
                                    alignSelf: "center"

                                }}></View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Forgotpassword