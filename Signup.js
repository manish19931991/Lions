import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
const image = require('../google/BG.png');
const { width, height } = Dimensions.get('screen');
const Singup = () => {
    const navigation = useNavigation();
    const [BoxVisibility, setBoxVisibality] = useState(false);
    const [passwordVisibility, setpaswordVisibality] = useState(false);
    const [passwordVisibility1, setpaswordVisibality1] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{ width: width, flex: 1, height: height }}>
                <View>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ alignItems: "flex-end", marginRight: 26, marginTop: 66 }}>
                            <Text style={{ color: "#087EF7" }}>Skip</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: "flex-start", marginLeft: 40, marginTop: 33 }}>
                            <Text style={{ color: "#FFFFFF", fontSize: 36, fontFamily: 'Roboto-Bold' }}>SIGN UP</Text>
                        </View>
                        <View style={{ marginTop: 60, marginLeft: 40, flexDirection: "row", }}>
                            <Image style={{ marginTop: 17, width: 26, height: 26, marginLeft: 5 }} source={require("../google/user.png")} />
                            <View style={{ marginTop: 6, marginLeft: 5 }}>
                                <TextInput style={{ color: "white", fontFamily: 'Montserrat-Regular', fontSize: 20 }}
                                    placeholder='Full Name'
                                    placeholderTextColor={'#9F9F9F'}

                                />
                            </View>

                        </View>
                        <View
                            style={{
                                borderRadius: 1,
                                borderColor: '#9F9F9F',
                                borderWidth: 1,
                                marginTop: 5,
                                marginHorizontal: 45,
                                alignItems: "flex-start"
                            }}></View>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ marginLeft: 40, marginTop: 34, flexDirection: "row" }} onPress={() => { setBoxVisibality("rose") }}>
                                {BoxVisibility == "rose" ? (<Image source={require("../google/radio_on.png")} />)
                                    :
                                    (<Image source={require("../google/radio_off.png")}
                                    />)}

                                <Text style={{
                                    fontFamily: 'Montserrat', color:
                                        BoxVisibility == "rose" ? "#FFFFFF" : "#9F9F9F",
                                    fontSize: 14, marginTop: 5, marginLeft: 10
                                }}>Email Address</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginLeft: 40, marginTop: 34, flexDirection: "row" }} onPress={() => { setBoxVisibality("rice") }}>
                                {BoxVisibility == "rice" ? (<Image source={require("../google/radio_on.png")} />)
                                    :
                                    (<Image source={require("../google/radio_off.png")}
                                    />)}

                                <Text style={{
                                    fontFamily: 'Montserrat', color:
                                        BoxVisibility == "rice" ? "#FFFFFF" : "#9F9F9F",
                                    fontSize: 14, marginTop: 5, marginLeft: 10,
                                }}>Phone Number</Text>

                            </TouchableOpacity>
                        </View>

                        {BoxVisibility == "rose" ?
                            (
                                <View style={{ marginTop: 33, marginLeft: 40, }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image style={{ width: 26, height: 26, marginTop: 12 }} source={require("../google/email.png")} />
                                        <View style={{ marginLeft: 5 }} >
                                            <TextInput style={{ color: "white", fontFamily: 'Montserrat-Regular', fontSize: 20,width:280}}
                                                placeholder='E-Mail'
                                                keyboardType="email-address"
                                                placeholderTextColor={'#9F9F9F'}

                                            />
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            borderRadius: 1,
                                            borderColor: '#9F9F9F',
                                            borderWidth: 1,
                                            marginTop: 10,
                                            marginRight: 50,
                                            marginHorizontal: 4,
                                            alignItems: "flex-start"
                                        }}></View>

                                    <View style={{ marginTop: 42, flexDirection: "row" }}>
                                        <Image style={{ width: 26, height: 27, marginTop: 12 }} source={require("../google/password.png")} />
                                        {/* <View style={{}}> */}
                                        <TextInput style={{ color: "white", marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize: 20, width: "73%", }}
                                            placeholder='Password'
                                            placeholderTextColor={'#9F9F9F'}
                                            secureTextEntry={!passwordVisibility}

                                        />
                                        {/* </View> */}

                                        <TouchableOpacity onPress={() => { setpaswordVisibality(!passwordVisibility) }}>
                                            {passwordVisibility == true ? (<Image style={{ marginTop: 23 }} source={require('../google/eye_on.png')}
                                            />) : (<Image style={{ marginTop: 20 }} source={require('../google/eye_off.png')}
                                            />)}</TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            borderRadius: 1,
                                            borderColor: '#9F9F9F',
                                            borderWidth: 1,
                                            marginTop: 10,
                                            marginRight: 50,
                                            marginHorizontal: 4,
                                            alignItems: "flex-start"
                                        }}></View>
                                    <View style={{ marginTop: 42, flexDirection: "row" }}>
                                        <Image style={{ width: 26, height: 27, marginTop: 12 }} source={require("../google/password.png")} />
                                        {/* <View style={{}}> */}
                                        <TextInput style={{ color: "white", marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize: 20, width: "73%", }}
                                            placeholder='Confirm Password'
                                            placeholderTextColor={'#9F9F9F'}
                                            secureTextEntry={!passwordVisibility1}

                                        />
                                        {/* </View> */}

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
                                            marginRight: 50,
                                            marginHorizontal: 4,
                                            alignItems: "flex-start"
                                        }}></View>
                                </View>

                            ) : null}
                        {BoxVisibility == "rice" ?
                            (
                                <View style={{ marginTop: 33, marginLeft: 40, }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Image style={{ width: 26, height: 40, marginTop: 12 }} source={require("../google/mobile.png")} />
                                        <View style={{ marginLeft: 5 }} >
                                            <TextInput style={{ color: "white",fontSize: 20,width:280 }}
                                                placeholder='+91 Phone Number'
                                                keyboardType="numeric"
                                                placeholderTextColor={'#9F9F9F'}

                                            />
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            borderRadius: 1,
                                            borderColor: '#9F9F9F',
                                            borderWidth: 1,
                                            marginTop: 10,
                                            marginRight: 50,
                                            marginHorizontal: 4,
                                            alignItems: "flex-start"
                                        }}></View>

                                    <View style={{ marginTop: 42, flexDirection: "row" }}>
                                        <Image style={{ width: 26, height: 27, marginTop: 12 }} source={require("../google/password.png")} />
                                        {/* <View style={{}}> */}
                                        <TextInput style={{ color: "white", marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize: 20, width: "73%", }}
                                            placeholder='Password'
                                            placeholderTextColor={'#9F9F9F'}
                                            secureTextEntry={!passwordVisibility}

                                        />
                                        {/* </View> */}

                                        <TouchableOpacity onPress={() => { setpaswordVisibality(!passwordVisibility) }}>
                                            {passwordVisibility == true ? (<Image style={{ marginTop: 23 }} source={require('../google/eye_on.png')}
                                            />) : (<Image style={{ marginTop: 20 }} source={require('../google/eye_off.png')}
                                            />)}</TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            borderRadius: 1,
                                            borderColor: '#9F9F9F',
                                            borderWidth: 1,
                                            marginTop: 10,
                                            marginRight: 50,
                                            marginHorizontal: 4,
                                            alignItems: "flex-start"
                                        }}></View>
                                    <View style={{ marginTop: 42, flexDirection: "row" }}>
                                        <Image style={{ width: 26, height: 27, marginTop: 12 }} source={require("../google/password.png")} />
                                        {/* <View style={{}}> */}
                                        <TextInput style={{ color: "white", marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize: 20, width: "73%", }}
                                            placeholder='Confirm Password'
                                            placeholderTextColor={'#9F9F9F'}
                                            secureTextEntry={!passwordVisibility1}

                                        />
                                        {/* </View> */}

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
                                            marginRight: 50,
                                            marginHorizontal: 4,
                                            alignItems: "flex-start"
                                        }}></View>
                                </View>

                            ) : null}

                        <TouchableOpacity onPress={() => navigation.navigate('Verify')} style={{
                            marginHorizontal: 10,
                            borderRadius: 5,
                            height: 60,
                            marginTop: 42, marginLeft: 31, marginRight: 31,
                        }}>
                            <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={{ color: "white", alignSelf: "center", paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                                    SIGN UP</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')} style={{ alignSelf: "center", marginTop: 32 }}>
                            <Text style={{ color: "#EEEEEE", fontSize: 20 }}>Forgot Password</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", marginTop: 151 }}>
                            <View
                                style={{
                                    borderRadius: 1,
                                    borderColor: '#9F9F9F',
                                    borderWidth: 1,
                                    marginLeft: 30,
                                    width: "25%",
                                    height: 1,
                                    marginTop: 11

                                }}></View>
                            <View style={{ alignSelf: "center", marginLeft: 10 }}>
                                <Text style={{ color: "#9F9F9F", fontWeight: "bold" }}>Or Connect With</Text>

                            </View>
                            <View
                                style={{
                                    borderRadius: 1,
                                    borderColor: '#9F9F9F',
                                    borderWidth: 1,
                                    marginLeft: 10,
                                    width: "25%",
                                    height: 1,
                                    marginTop: 11

                                }}></View>
                        </View>
                        <View style={{ flexDirection: "row", alignSelf: "center", }}>
                            <TouchableOpacity style={{ marginTop: 19 }}>
                                <Image style={{ width: 50, height: 50 }} source={require("../google/facebook.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 12.11, marginTop: 19 }}>
                                <Image style={{ width: 50, height: 50 }} source={require("../google/google_plus.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 12.11, marginTop: 19 }}>
                                <Image style={{ width: 50, height: 50 }} source={require("../google/apple.png")} />
                            </TouchableOpacity>

                        </View>
                        <View style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}>
                            <Text style={{ color: "#FFFFFF", fontFamily: "Robot-Regular", fontSize: 14 }}>Don't have a account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Singin')}>
                                <Text style={{ color: "#087EF7", marginLeft: 4, fontFamily: "Robot-Regular", fontSize: 14 }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 70 }}>
                            <View
                                style={{
                                    borderRadius: 1,
                                    borderColor: '#9F9F9F',
                                    borderWidth: 2,
                                    marginLeft: 10,
                                    width: "35%",
                                    marginBottom: 10,
                                    alignSelf: "center"

                                }}></View>
                        </View>
                    </ScrollView>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Singup