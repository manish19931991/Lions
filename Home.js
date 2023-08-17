import { View, Text, ImageBackground,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";

const image = require('../google/bg1.png');
const Home = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{width:"100%",height:800}}>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:123.96}}>
                    {<Image
                        source={require('../google/logo.png')}
                    />}
                </View>
    
          <TouchableOpacity onPress={() => navigation.navigate('Singin')} style={{ marginHorizontal: 10,
              borderRadius: 5,
              height:60,
              marginHorizontal:30,
              marginTop:239.52,marginLeft:31,marginRight:31,
      }}>
            <LinearGradient style={{height:60, borderRadius: 5,}} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={{color:"white",alignSelf:"center",height:60,paddingTop:15,fontSize:19,fontWeight:"bold"}}>
                LOGIN</Text>
            </LinearGradient>
          </TouchableOpacity>
        
    
          <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginHorizontal: 10,
              borderRadius: 5,
              height:60,
              marginHorizontal:30,
              marginTop:22,marginLeft:31,marginRight:31,
      }}>
            <LinearGradient style={{height:60, borderRadius: 5,}} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={{color:"white",alignSelf:"center",height:60,paddingTop:15,fontSize:19,fontWeight:"bold"}}>
                CREATE AN ACCOUNT</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
                            style={{
                                borderRadius: 1,
                                borderColor: '#9F9F9F',
                                borderWidth: 2,
                                marginLeft: 10,
                                width: "35%",
                                marginTop: 100,
                                alignSelf:"center"

                            }}></View>
         
            </ImageBackground>
        </View>
  )
}

export default Home