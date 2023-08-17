import { View, Text, ImageBackground,Image} from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const image = require('../google/bg1.png');
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Onboarding1')
        },1000);}, [] );
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{width:"100%",flex:1}}>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:290}}>
                    {<Image
                        source={require('../google/logo.png')}
                    />}
                </View>
               
            </ImageBackground>
        </View>
    )
}

export default Splash