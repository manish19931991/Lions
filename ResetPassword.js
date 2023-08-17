import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
const image = require('../google/BG.png');
const { width, height } = Dimensions.get('screen');

const ResetPassword = () => {
    const navigation = useNavigation();
    const [passwordVisibility, setpaswordVisibality] = useState(false);
    const [passwordVisibility1, setpaswordVisibality1] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{ width: width, flex: 1, height: height }}>
                <ScrollView>
                    <View style={{ alignItems: "flex-start", marginLeft: 40, marginTop: 103 }}>
                        <Text style={{ color: "#EEEEEE", fontSize: 36, fontFamily: 'Roboto-Bold', fontWeight: "bold" }}>Reset Password</Text>
                    </View>
                    <View style={{ marginTop: 62, flexDirection: "row", alignSelf: "center", }}>
                        <Image style={{ width: 26, height: 27, marginTop: 12 }} source={require("../google/password.png")} />

                        <TextInput style={{ color: "white", marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize: 20, width: "68%", }}
                            placeholder='New Password'
                            placeholderTextColor={'#9F9F9F'}
                            secureTextEntry={!passwordVisibility}

                        />
                        <TouchableOpacity onPress={() => { setpaswordVisibality(!passwordVisibility) }}>
                            {passwordVisibility == true ? (<Image style={{ marginTop: 23, }} source={require('../google/eye_on.png')}
                            />) : (<Image style={{ marginTop: 20 }} source={require('../google/eye_off.png')}
                            />)}</TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderRadius: 1,
                            borderColor: '#9F9F9F',
                            borderWidth: 1,
                            marginTop: 10,
                            marginHorizontal: 35,

                        }}></View>
                    <View style={{ marginTop: 42, flexDirection: "row",alignSelf: "center",  }}>
                        <Image style={{ width: 26, height: 27, marginTop: 12 }} source={require("../google/password.png")} />

                        <TextInput style={{ color: "white", marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize: 20, width: "68%", }}
                            placeholder='Confirm Password'
                            placeholderTextColor={'#9F9F9F'}
                            secureTextEntry={!passwordVisibility1}

                        />


                        <TouchableOpacity onPress={() => { setpaswordVisibality1(!passwordVisibility1) }}>
                            {passwordVisibility1 == true ? (<Image style={{ marginTop: 23 }} source={require('../google/eye_on.png')}
                            />) : (<Image style={{ marginTop: 20 }} source={require('../google/eye_off.png')}
                            />)}</TouchableOpacity>
                    </View>

                    <View
                        style={{
                            borderRadius: 1,
                            borderColor: '#9F9F9F',
                            borderWidth: 1,
                            marginTop: 10,
                           marginHorizontal: 35
                        }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('Singin')} style={{
                            marginHorizontal: 10,
                            borderRadius: 5,
                            height: 60,
                            marginTop: 42, marginLeft: 31, marginRight: 31,
                        }}>
                            <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={{ color: "white", alignSelf: "center", paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                                    Confirm</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View
                                style={{
                                    borderRadius: 1,
                                    borderColor: '#9F9F9F',
                                    borderWidth: 2,
                                    marginLeft: 10,
                                    width: "35%",
                                    marginTop:290,
                                    alignSelf: "center"

                                }}></View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default ResetPassword