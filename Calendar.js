import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AppHeader from './Header';
import { changeTheme } from '../redux/Action';
import LinearGradient from "react-native-linear-gradient";

const Calendar = (props) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    // const backgroundColor = useSelector(state => state.RootReducer.backgroundColor)
    // const counter = useSelector(state => state.counterReducer)
    const showTimePicker = () => {
        setModalVisible(true);
    };
    useEffect(() => {
        AppHeader({
            ...props,
            leftIcon: true,
            leftImage: require('../google/menu.png'),
            leftClick: (() => { props.navigation.openDrawer() }),
            Title: 'Calendar',
            notificationIcon: true,
            notification: require('../google/bell.png'),
            backgroundColor: "#000000"
        })
    })
    return (
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
            <View style={{
                width: 250,
                height: 250,
                borderRadius: 250 / 2,
                backgroundColor: '#222222',
                alignSelf: "center",
                marginTop: 30
            }}>
                <Image source={require('../google/user_name.png')}
                    style={{ alignSelf: "center", height: 120, width: 100, marginTop: 60 }} />
            </View>
            <TouchableOpacity onPress={() => showTimePicker()} style={{
                marginTop: 40

            }}>
                <LinearGradient style={{ height: 40, marginHorizontal: 70 }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
                        Add Schedule</Text>
                </LinearGradient>
            </TouchableOpacity>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>

                    <View style={{
                        marginTop: 230,
                        backgroundColor: '#2E2E2E',
                        height: 270,
                        borderRadius: 30,
                        marginHorizontal: 35,
                        elevation: 20
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row-reverse",
                                marginTop: 20, right: 10
                            }} onPress={() => setModalVisible(!modalVisible)} >
                            {<Image
                                style={{}}
                                source={require('../google/cancel.png')}
                            />}
                        </TouchableOpacity>
                        <View style={{ alignSelf: "center", }}>
                            {<Image
                                source={require('../google/logo_2.png')}
                            />}
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={{ textAlign: "center", color: "white", fontWeight: "normal" }}>
                                Need to upgrade their subscription plan to access this feature
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("CreateCalendarSlots")} style={{
                marginTop: 20

            }}>
                <LinearGradient style={{ height: 30, marginHorizontal: 40 }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 14, fontWeight: "bold", marginTop: 5 }}>
                    SUBSCRIBE NOW</Text>
                </LinearGradient>
            </TouchableOpacity>

                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Calendar