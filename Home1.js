import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
const image = require('../google/BG.png');
const { width, height } = Dimensions.get('screen');
const Icons = [
    { name: "Restaurants", uri: require("../google/restaurants.png") },
    { name: "Auto Repair", uri: require("../google/auto_repair.png") },
    { name: "Beauty", uri: require("../google/beauty.png") },
    { name: "Takeouts", uri: require("../google/takeouts.png") },
    { name: "Moves", uri: require("../google/moves.png") },
    { name: "Plumbers", uri: require("../google/plumbers.png") },
    { name: "Rent & Hire", uri: require("../google/rent_hire.png") },
    {
        uri: require("../google/more.png")

    },
];

const Home1 = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "#000000" }}>

            <ScrollView>

                <ImageBackground style={{ height: 270 }} source={require('../google/img_17.png')}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                            marginLeft: 27, marginTop: 51
                        }}>
                            <Image style={{}} source={require("../google/menu.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                            marginRight: 21.72, marginTop: 51
                        }}>
                            <Image style={{ alignSelf: 'flex-end' }} source={require("../google/bell.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "flex-start", marginLeft: 32, marginTop: 15 }}>
                        <Text style={{ color: "#EEEEEE", fontSize: 28, fontFamily: 'Roboto-Bold', fontWeight: "bold" }}>Find your right</Text>
                        <Text style={{ color: "#EEEEEE", fontSize: 28, fontFamily: 'Roboto-Bold', fontWeight: "bold" }}>Business Point</Text>

                    </View>
                    <View style={{ flexDirection: "row", marginTop: 43, }}>
                        <View style={{
                            marginHorizontal: 20,
                            backgroundColor:"#000000",
                            borderRadius: 4,
                            width: "70%", flexDirection: "row",
                            borderWidth: 1, borderColor: "#363636"
                        }}>
                            <Image style={{ marginTop: 16, marginLeft: 9, width: 20, height: 20 }} source={require("../google/search.png")} />
                            <TextInput
                                style={{
                                    color: "white",
                                    fontFamily: 'Montserrat-Regular',
                                    fontSize: 20,
                                    paddingLeft: 9,
                                    width: "85%"

                                }}
                                placeholder='Search'
                                placeholderTextColor={'#FFFFFF'}
                            />
                            <TouchableOpacity style={{
                                marginHorizontal: 30,
                                backgroundColor:"#000000",
                                borderRadius: 4,
                                width: "20%", 
                                borderWidth: 1, borderColor: "#363636"
                            }}>
                                <Image style={{ width: 26, height: 30, alignSelf: "center", marginTop: 11 }} source={require("../google/map.png")} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: 20, marginLeft: 27 }}>
                    <Text style={{ color: "#FFFFFF", fontFamily: "Roboto", fontSize: 18, fontWeight: "500" }}>
                        Categories
                    </Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', marginLeft: 10 }}>
                    {
                        Icons.map((item, index) => (
                            <View key={index} style={{ marginTop: 20, marginHorizontal: 10 }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#222222', width: 80, height: 100,
                                        borderRadius: 4,
                                        // marginHorizontal:5,
                                        paddingTop: 12

                                    }}>
                                    <Image
                                        source={item.uri}
                                        style={{ width: 55, height: 57, alignSelf: "center" }} />
                                    {index == 7 ? <Text style={{ color: "#FFFFFF", textAlign: "center" }}>More</Text> : ""}
                                </TouchableOpacity>

                                <Text style={{
                                    color: "#FFFFFF",
                                    fontFamily: "Roboto",
                                    fontSize: 12,
                                    fontWeight: "500", textAlign: "center", alignSelf: 'center'

                                }}>{item.name}</Text>
                            </View>
                        ))
                    }

                </View>
                <View style={{ marginTop: 23, marginLeft: 27 }}>
                    <Text style={{
                        color: "#FFFFFF",
                        fontFamily: "Roboto",
                        fontSize: 18,
                        fontWeight: "500",
                    }}>Recent Search</Text>
                </View>
                <ImageBackground style={{ height: 200, marginTop: 15, marginHorizontal: 20, }}
                    imageStyle={{ borderRadius: 6 }}
                    source={require('../google/img_18.png')}>
                    <View style={{ marginTop: 135., marginLeft: 11, flexDirection: "row" }}>
                        <Text style={{
                            color: "#FFFFFF",
                            fontFamily: "Roboto",
                            fontSize: 18,
                            fontWeight: "500",
                        }}>Auto Service & Tires</Text>
                        
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 11, justifyContent: 'space-between',}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{ width: 20, height: 20, paddingTop: 7, }} source={require('../google/call.png')} />
                            <Text style={{
                                color: "#FFFFFF",
                                fontFamily: "Roboto",
                                fontSize: 12,
                                fontWeight: "500",
                                paddingLeft: 9
                            }}>+1 888 987 1234</Text>
                        </View>
                        <View style={{ marginRight:10,}}>
                            <Image style={{ width: 40, height: 40, bottom: 20 }}
                                source={require('../google/location_icon.png')} />
                        </View>

                    </View>



                </ImageBackground>
                <View style={{ marginTop: 80 }}>
                    <View
                        style={{
                            borderRadius: 1,
                            borderColor: '#9F9F9F',
                            borderWidth: 2,
                            width: "35%",
                            marginBottom: 10,
                            alignSelf: "center"

                        }}></View>
                </View>

            </ScrollView>

        </View>
    )
}

export default Home1