import { View, Text, ImageBackground, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
const image = require('../google/BG.png');
const Onboarding1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode="cover" style={{ width: "100%", flex:1 }}>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 212 }}>
          {<Image
            source={require('../google/onboarding_1.png')}
          />}
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 32 }}>
          <Text style={{ fontSize: 36, color: "#FFFFFF", fontWeight: "bold", }}>Quick Connect </Text>
        </View>
        <View style={{ marginHorizontal: 55 }}>
          <Text style={{ fontSize: 36, color: "#FFFFFF", fontWeight: "bold", }}> with your Lion’s</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 18 }}>
          <Text style={{ fontSize: 18, color: "#FFFFFF", }}>
            Lorem ipsum dolor sit amet,
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center", }}>
          <Text style={{ fontSize: 18, color: "#FFFFFF", }}>
            consetetur sadipscing elitr.
          </Text>
        </View>
        {/* <View style={{marginTop:32,marginLeft:31,marginRight:31,}}> */}
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')} style={{ marginHorizontal: 10,
              borderRadius: 5,
              height:60,
              marginHorizontal:30,
              marginTop:32,marginLeft:31,marginRight:31,
      }}>
            <LinearGradient style={{height:60, borderRadius: 5,}} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
              <Text style={{color:"white",alignSelf:"center",paddingTop:15,fontSize:19,fontWeight:"bold"}}>
                NEXT</Text>
            </LinearGradient>
          </TouchableOpacity>
        {/* </View> */}
        <View style={{marginTop:38,alignSelf:"center"}}>
          <TouchableOpacity onPress={() => navigation.navigate('Splash')} > 
            <Text style={{color:"white",fontSize:18}}>Skip</Text>
            </TouchableOpacity>
         
        </View>
        <View
                            style={{
                                borderRadius: 1,
                                borderColor: '#9F9F9F',
                                borderWidth: 2,
                                marginLeft: 10,
                                width: "35%",
                                marginTop: 32,
                                alignSelf:"center"

                            }}></View>

      </ImageBackground>
    </View>
  )
}

export default Onboarding1