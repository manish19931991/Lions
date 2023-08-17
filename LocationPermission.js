import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
const image = require('../google/BG.png');
const { width, height } = Dimensions.get('screen');

const LocationPermission = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{ width: width, flex: 1, height: height }}>
                <View style={{ justifyContent: "center", alignItems: "center",marginTop:236 }}>
                    <Image style={{}} source={require("../google/map.png")} />
                </View>
                <View style={{marginTop:32.88,alignSelf:"center"}}>
                    <Text style={{ color: "#FFFFFF", fontSize: 21, fontFamily: 'Roboto-Bold' }}>
                        Allow the app to access my </Text>
                        <Text style={{ color: "#FFFFFF", fontSize: 21, fontFamily: 'Roboto-Bold' }}>
                         location so I can see nearby</Text>
                        <Text style={{ color: "#FFFFFF", fontSize: 21, fontFamily: 'Roboto-Bold',alignSelf:"center" }}>
                        data as per my location. </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home1')} style={{
                            marginHorizontal: 10,
                            borderRadius: 5,
                            height: 60,
                            marginTop: 42, marginLeft: 31, marginRight: 31,
                        }}>
                            <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={{ color: "white", alignSelf: "center", paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                                    ALLOW</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Home1')} style={{
                            marginHorizontal: 10,
                            borderRadius: 5,
                            height: 60,
                            marginTop: 42, marginLeft: 31, marginRight: 31,
                        }}>
                            <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={{ color: "white", alignSelf: "center", paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                                    DENY</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View
                                style={{
                                    borderRadius: 1,
                                    borderColor: '#9F9F9F',
                                    borderWidth: 2,
                                    marginLeft: 10,
                                    width: "35%",
                                    marginTop:100,
                                    alignSelf: "center"

                                }}></View>
            </ImageBackground>
        </View>
    )
}

export default LocationPermission