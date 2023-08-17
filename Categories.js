import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Dimensions, FlatList, } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
// const image = require('../google/BG.png');
const { width, height } = Dimensions.get('screen');


const Icons = [
    { name: "Restaurants", uri: require("../google/restaurants.png") },
    { name: "Auto Repair", uri: require("../google/auto_repair.png") },
    { name: "Beauty", uri: require("../google/beauty.png") },
    { name: "Takeouts", uri: require("../google/takeouts.png") },
    { name: "Moves", uri: require("../google/moves.png") },
    { name: "Plumbers", uri: require("../google/plumbers.png") },
    { name: "Rent & Hire", uri: require("../google/rent_hire.png") },
    { name: "Takeouts", uri: require("../google/takeouts.png") },
    { name: "Auto Repair", uri: require("../google/auto_repair.png") },
    { name: "Beauty", uri: require("../google/beauty.png") },
    { name: "Moves", uri: require("../google/moves.png") },
    { name: "Plumbers", uri: require("../google/plumbers.png") },
  
];


const Categories = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                        marginLeft: 27, marginTop: 51
                    }}>
                        <Image style={{}} source={require("../google/menu.png")} />
                    </TouchableOpacity>
                    <View style={{ marginTop: 39 }}>
                        <Text style={{ color: "#EEEEEE", fontSize: 28, fontFamily: 'Roboto-Bold', fontWeight: "bold" }}>All Categories</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                        marginRight: 21.72, marginTop: 51
                    }}>
                        <Image style={{ alignSelf: 'flex-end' }} source={require("../google/bell.png")} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginTop: 44, }}>
                    <View style={{
                        marginHorizontal: 20,
                        borderRadius: 4,
                        width: "90%", flexDirection: "row",
                        borderWidth: 1, borderColor: "#363636"
                    }}>
                        <Image style={{ marginTop: 15, marginLeft: 9, width: 20, height: 20 }} source={require("../google/search.png")} />
                        <TextInput
                            style={{
                                color: "white",
                                fontFamily: 'Montserrat-Regular',
                                fontSize: 20,
                                paddingLeft: 9,
                                width: "85%",
                            }}
                            placeholder='Search'
                            placeholderTextColor={'#FFFFFF'}
                        />
                    </View>
                </View>
                <FlatList 

                    data={Icons}
                    numColumns={3}
                    renderItem={({ item, index }) => (

                        <View key={item} style={{ marginTop: 20, }}>
                            <TouchableOpacity
                                style={{
                                    
                                    backgroundColor: '#222222', 
                                    borderRadius: 4,width:100 ,height:100,
                                    marginHorizontal:18,
                                    flex: 1,
                                }}>
                                <Image
                                    source={item.uri}
                                    
                                    style={{width:70, 
                                    height:70,padding:20,
                                    alignSelf:"center",
                                    marginTop:20,}} />
                               
                            </TouchableOpacity>

                            <Text style={{
                                color: "#FFFFFF",
                                fontFamily: "Roboto",
                                fontSize: 16,
                                fontWeight: "500", textAlign: "center", alignSelf: 'center'

                            }}>{item.name}</Text>
                        </View>

                    )}
                />
                 <View
                        style={{
                            borderRadius: 1,
                            borderColor: '#9F9F9F',
                            borderWidth: 2,
                            width: "35%",
                            marginTop: 40,
                            alignSelf: "center"

                        }}></View>
            </ScrollView>
        </View>
    )
}

export default Categories