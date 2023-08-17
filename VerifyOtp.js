import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import OTPTextInput from "react-native-otp-textinput"
const image = require('../google/BG.png');
const { width, height } = Dimensions.get('screen');

const VerifyOtp = () => {
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
                <View style={{ alignItems: "flex-start", marginLeft: 24, marginTop: 36 }}>
                    <Text style={{ color: "#EEEEEE", fontSize: 28, fontFamily: 'Roboto-Bold', fontWeight: "bold" }}>Verify OTP</Text>
                </View>
                <View style={{ marginTop: 120, marginHorizontal: 30 }}>
                    <OTPTextInput
                        inputCount={4}
                        TextColor="white"
                        tintColor="#3CB371"
                        offTintColor="#DCDCDC"
                        // containerStyle={{placeholderTextColor: "white",}}
                        //  style={{}}
                        textInputStyle={{ color: 'white' }}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')} style={{
                    marginHorizontal: 10,
                    borderRadius: 5,
                    height: 60,
                    marginTop: 64, marginLeft: 31, marginRight: 31,
                }}>
                    <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={{ color: "white", alignSelf: "center", paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                            CONTINUE</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center",marginTop:37}}>
                    <Text style={{ color: "#EEEEEE", fontSize: 14, fontFamily: 'Roboto-Bold', fontWeight: "bold" }} >Resend Code</Text>
                </TouchableOpacity>
                <View
                                style={{
                                    borderRadius: 1,
                                    borderColor: '#9F9F9F',
                                    borderWidth: 2,
                                    marginLeft: 10,
                                    width: "35%",
                                    marginTop: 250,
                                    alignSelf: "center"

                                }}></View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default VerifyOtp