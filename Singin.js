import { View, 
    Text,
     ImageBackground, 
     Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
const image = require('../google/BG.png');
const { width, height } = Dimensions.get("screen");
import normalize from 'react-native-normalize';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const Singin = () => {
    const navigation = useNavigation();
    const [BoxVisibility, setBoxVisibality] = useState(false);
    const [passwordVisibility, setpaswordVisibality] = useState(false);
    return (
        <View style={{ flex: 1, 
            // width: scale(30),
            // height: verticalScale(50),
          }}>
            <ImageBackground source={image} resizeMode="cover" 
              style={{ width:"100%", height:"100%",flex:1 }}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}
                         style={{ alignItems: "flex-end", marginTop: 66,marginRight:26 }}>
                            <Text style={{ color: "#087EF7" }}>Skip</Text>
                        </TouchableOpacity>
                        
                            <Text 
                            style={{ color: "#FFFFFF", 
                            fontSize: 36, fontFamily: 
                            'Roboto-Bold',
                            marginTop: 33,marginHorizontal:40  }}>SIGN IN</Text>
                      
                        <View style={{ flexDirection: "row",marginHorizontal:40,justifyContent:"space-between" }}>
                            <TouchableOpacity style={{  marginTop: 34, flexDirection: "row" }} onPress={() => { setBoxVisibality("rose") }}>
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

                            <TouchableOpacity style={{ marginTop: 34, flexDirection: "row" }} onPress={() => { setBoxVisibality("rice") }}>
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
                                <View style={{ marginTop: 33,marginHorizontal:40  }}>
                                <TextInput style={{ color: "white", fontFamily: 'Montserrat-Regular', fontSize: 20 }}
                                    placeholder='Email Address'
                                    keyboardType="email-address"
                                    placeholderTextColor={'#9F9F9F'}
                                    disableFullscreenUI
                                />
                                <View
                                    style={{
                                        borderRadius: 1,
                                        borderColor: '#9F9F9F',
                                        borderWidth: 1,
                                        marginTop: 10,
                                       
                                    }}></View>

                                <View style={{ marginTop: 42, 
                                    flexDirection: "row",justifyContent:"space-around", }}>
                                    <TextInput style={{ color: "white",
                                     fontFamily: 'Montserrat-Regular', fontSize: 20,flex:1  }}
                                        placeholder='Password'
                                        placeholderTextColor={'#9F9F9F'}
                                        secureTextEntry={!passwordVisibility}
                                        disableFullscreenUI

                                    />

                                    <TouchableOpacity style={{alignSelf:"center"}}
                                    onPress={() => { setpaswordVisibality(!passwordVisibility) }}>
                                        {passwordVisibility == true ? (<Image style={{ }} source={require('../google/eye_on.png')}
                                        />) : (<Image style={{ }} source={require('../google/eye_off.png')}
                                        />)}</TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                        borderRadius: 1,
                                        borderColor: '#9F9F9F',
                                        borderWidth: 1,
                                        marginTop: 10,
                                       
                                    }}></View>
                            </View>

                        ) : null}
                        {BoxVisibility == "rice" ?
                            (
                                <View style={{ marginTop: 33,marginHorizontal:40  }}>
                                    <TextInput style={{ color: "white", fontFamily: 'Montserrat-Regular', fontSize: 20 }}
                                        placeholder=' +91 Phone Number'
                                        keyboardType="numeric"
                                        placeholderTextColor={'#9F9F9F'}
                                      // disableFullscreenUI
                                    />
                                    <View
                                        style={{
                                            borderRadius: 1,
                                            borderColor: '#9F9F9F',
                                            borderWidth: 1,
                                            marginTop: 10,
                                          
                                        }}></View>

                                    <View style={{ marginTop: 42, 
                                        flexDirection: "row",justifyContent:"space-around", }}>
                                        <TextInput style={{ color: "white",
                                         fontFamily: 'Montserrat-Regular', fontSize: 20,flex:1  }}
                                            placeholder='Password'
                                            placeholderTextColor={'#9F9F9F'}
                                            secureTextEntry={!passwordVisibility}
                                            // disableFullscreenUI

                                        />

                                        <TouchableOpacity style={{alignSelf:"center"}}
                                        onPress={() => { setpaswordVisibality(!passwordVisibility) }}>
                                            {passwordVisibility == true ? (<Image style={{ }} source={require('../google/eye_on.png')}
                                            />) : (<Image style={{ }} source={require('../google/eye_off.png')}
                                            />)}</TouchableOpacity>
                                    </View>

                                    <View
                                        style={{
                                            borderRadius: 1,
                                            borderColor: '#9F9F9F',
                                            borderWidth: 1,
                                            marginTop: 10,
                                           
                                        }}></View>
                                </View>

                            ) : null}

                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                            marginHorizontal: 40,
                            borderRadius: 5,
                            height: 60,
                            marginTop: 42,
                        }}>
                            <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                                <Text style={{ 
                                    color: "white", alignSelf: "center", 
                                    paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                                    SIGN IN</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')} style={{ alignSelf: "center", marginTop: 32 }}>
                            <Text style={{ color: "#EEEEEE", fontSize: 20 }}>Forgot Password</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", 
                        marginTop: 151,
                        marginHorizontal:60,justifyContent:"center", alignItems: 'center'}}>
                           <View
                                style={{
                                 
                                    backgroundColor: '#9F9F9F',
                                    width: "40%",
                                    height: 1,
                                  

                                }}></View>
                           
                                <Text style={{ 
                                    color: "#9F9F9F", fontWeight: "bold",}}>Or Connect With</Text>

                           
<View
                                style={{
                                  
                                    backgroundColor: '#9F9F9F',
                                    width: "40%",
                                    height: 1,
                                   

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
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={{ color: "#087EF7", marginLeft: 4, fontFamily: "Robot-Regular", fontSize: 14 }}>Sign Up</Text>
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
               

            </ImageBackground>
        </View>
    )
}

export default Singin