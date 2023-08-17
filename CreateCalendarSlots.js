import { View, Text, Image, TouchableOpacity, Modal, FlatList, Alert, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AppHeader from './Header';
import LinearGradient from "react-native-linear-gradient";
import { interpolateNode, JumpingTransition } from 'react-native-reanimated';
import { Picker } from '@react-native-picker/picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";
const data = [
    {
        id: 1,
        day: 'Mon'
    },
    { id: 2, day: 'Tue' },
    { id: 3, day: 'Wed' },
    { id: 4, day: 'Thu' },
    { id: 5, day: 'Fri' },
    { id: 6, day: 'Sat' },
    { id: 7, day: 'Sun' },


]
const CreateCalendarSlots = (props) => {
    const navigation = useNavigation();
    const [colors, setColor] = useState(0)
    const [showPicker, setShowPicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTime1, setSelectedTime1] = useState('');
    const [exampleState, setExampleState] = useState(initialElements);
    const [BoxVisibility, setBoxVisibility] = useState(false)
    const [idx, incr] = useState(1);
    const [image, setImage] = useState(false)

    const [initialElements, changeEl] = useState([
        // { id: "0", text: "Object 1" },
        // { id: "1", text: "Object 2" },
    ]);
    const addElement = () => {
        let newArray = [...initialElements,
        { id: idx, text: "Object" + (idx + 1) }
        ];
        incr(idx + 1);
        console.log(initialElements.length);
        setExampleState(newArray);
        changeEl(newArray);
    }
    const DeleteElement = (id) => {

        // setExampleState(initialElements.filter((item) => item.id !== id ));
        let array = [...initialElements.filter((item) => item.id !== id)];
        incr(id - 1);
        console.log(initialElements.length);
        setExampleState(array)
        changeEl(array);

    }


    const showTimePicker = () => {
        setShowPicker(true);
    };

    const hideTimePicker = () => {
        setShowPicker(false);
    };
    const handleTime = (time) => {
        setSelectedTime(time.toLocaleTimeString());
        hideTimePicker();
    };
    const handleTime1 = (time) => {
        setSelectedTime1(time.toLocaleTimeString());
        hideTimePicker();
    };


    useEffect(() => {
        AppHeader({
            ...props,
            leftIcon: true,
            leftImage: require('../google/back_icon.png'),
            leftClick: (() => { props.navigation.openDrawer() }),
            Title: 'Create Calendar Slots',
            // notificationIcon: true,
            // notification: require('../google/bell.png'),
            backgroundColor: "#000000"
        })
    })
    return (
        <View style={{ flex: 1, backgroundColor: "#000000" }}>
            <ScrollView>
                <View>
                    <FlatList
                        data={data}
                        horizontal={true}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={index} style={{ marginHorizontal: 10, marginTop: 40, }}>
                                    <TouchableOpacity onPress={() => { setColor(index + 1); }}
                                        style={{
                                            height: 140, width: 100, backgroundColor:
                                                item.id == colors ? "#000000" : "#2E2E2E", borderRadius: 20, flexDirection: "column",
                                            borderColor: item.id == colors ? '#0389FF' : '#000000', borderWidth: 1
                                        }}>
                                        <Text style={{
                                            color: "#FFFFFF", top: 12, textAlign: "center",
                                            fontSize: 19,
                                        }}>

                                            {item.day}
                                        </Text>
                                        <TouchableOpacity onPress={() => { setColor(index + 1) }} style={{ marginTop: 30, }}>
                                            <Image source={colors == item.id ? (require('../google/toggle_on.png')) : (require('../google/toggle_off.png'))} style={{ alignSelf: 'center', height: 25, width: 39 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { setColor(index + 1) }}>
                                            {colors == item.id ? <Text style={{
                                                color: "#FFFFFF", top: 15, textAlign: "center",
                                                fontSize: 19,
                                            }}>
                                                On
                                            </Text> : <Text style={{
                                                color: "#FFFFFF", top: 15, textAlign: "center",
                                                fontSize: 19,
                                            }}>
                                                Off
                                            </Text>}
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20, justifyContent: 'space-between', }}>

                    <View>
                        <Text style={{ color: "#A5A5A5", }}>
                            Opening Hour
                        </Text>
                        <View style={{
                            backgroundColor: '#1A1A1A', width: 180, borderRadius: 15,
                            borderColor: '#707070',
                            borderWidth: 1,
                            height: 65, marginTop: 15, flexDirection: "row", justifyContent: "space-around"
                        }}>
                            {selectedTime === '' ?
                                <Text style={{ color: '#9F9F9F', marginTop: 20, }}>Select Time</Text> :
                                <Text style={{ color: '#FFFFFF', marginTop: 20, }}>{selectedTime}</Text>}

                            <TouchableOpacity onPress={() => { showTimePicker() }}
                                style={{ marginTop: 29, }}>
                                <Image style={{ width: 20, height: 10, position: "absolute" }} source={require('../google/down_arrow.png')} />
                            </TouchableOpacity>
                            <View>
                                <DateTimePickerModal
                                    // isVisible={isDatePickerVisible}
                                    isVisible={showPicker}
                                    mode="time"
                                    display="spinner"
                                    onConfirm={handleTime}
                                    onCancel={hideTimePicker}

                                />
                            </View>
                        </View>


                    </View>
                    <View>
                        <Text style={{ color: "#A5A5A5", }}>
                            Closing Hour
                        </Text>
                        <View style={{
                            backgroundColor: '#1A1A1A', width: 180, borderRadius: 15,
                            borderColor: '#707070',
                            borderWidth: 1,
                            height: 65, marginTop: 15, flexDirection: "row", justifyContent: "space-around"
                        }}>
                            {selectedTime1 === '' ?
                                <Text style={{ color: '#9F9F9F', marginTop: 20, }}>Select Time</Text> :
                                <Text style={{ color: '#FFFFFF', marginTop: 20, }} >{selectedTime1}</Text>}

                            <TouchableOpacity onPress={() => { showTimePicker() }}
                                style={{ marginTop: 29, }}>
                                <Image style={{ width: 20, height: 10, position: "absolute" }} source={require('../google/down_arrow.png')} />
                            </TouchableOpacity>
                            <View>
                                <DateTimePickerModal
                                    // isVisible={isDatePickerVisible}
                                    isVisible={showPicker}
                                    mode="time"
                                    display="spinner"
                                    onConfirm={handleTime1}
                                    onCancel={hideTimePicker}

                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{ borderWidth: 0.2, borderColor: "#707070", marginHorizontal: 20, marginTop: 24 }}>
                </View>

                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-between", marginHorizontal: 20 }}>
                    <Text style={{ color: "#FFFFFF", fontSize: 18, }}>
                        Time Slot
                    </Text>
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                        <TouchableOpacity>
                            <Image style={{ width: 40, height: 30, right: 14 }} source={require('../google/y.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { addElement(), setBoxVisibility("rose") }}>
                            <Image style={{ width: 40, height: 37 }} source={require('../google/add.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 20, justifyContent: 'space-between', }}>

                    <View>
                        <Text style={{ color: "#A5A5A5", }}>
                            From
                        </Text>
                        <View style={{
                            backgroundColor: '#1A1A1A', width: 180, borderRadius: 15,
                            borderColor: '#707070',
                            borderWidth: 1,
                            height: 65, marginTop: 15, flexDirection: "row", justifyContent: "space-around"
                        }}>
                            {selectedTime === '' ?
                                <Text style={{ color: '#9F9F9F', marginTop: 20, }}>Select Time</Text> :
                                <Text style={{ color: '#FFFFFF', marginTop: 20, }} >{selectedTime}</Text>}

                            <TouchableOpacity onPress={() => { showTimePicker() }}
                                style={{ marginTop: 29, }}>
                                <Image style={{ width: 20, height: 10, position: "absolute" }} source={require('../google/down_arrow.png')} />
                            </TouchableOpacity>
                            <View>
                                <DateTimePickerModal
                                    // isVisible={isDatePickerVisible}
                                    isVisible={showPicker}
                                    mode="time"
                                    display="spinner"
                                    onConfirm={handleTime}
                                    onCancel={hideTimePicker}

                                />
                            </View>
                        </View>

                    </View>
                    <View>
                        <Text style={{ color: "#A5A5A5", }}>
                            To
                        </Text>
                        <View style={{
                            backgroundColor: '#1A1A1A', width: 180, borderRadius: 15,
                            borderColor: '#707070',
                            borderWidth: 1,
                            height: 65, marginTop: 15, flexDirection: "row", justifyContent: "space-around"
                        }}>
                            {selectedTime === '' ?
                                <Text style={{ color: '#9F9F9F', marginTop: 20, }}>Select Time</Text> :
                                <Text style={{ color: '#FFFFFF', marginTop: 20, }} >{selectedTime}</Text>}

                            <TouchableOpacity onPress={() => { showTimePicker() }}
                                style={{ marginTop: 29, }}>
                                <Image style={{ width: 20, height: 10, position: "absolute" }} source={require('../google/down_arrow.png')} />
                            </TouchableOpacity>
                            <View>
                                <DateTimePickerModal
                                    // isVisible={isDatePickerVisible}
                                    isVisible={showPicker}
                                    mode="time"
                                    display="spinner"
                                    onConfirm={handleTime}
                                    onCancel={hideTimePicker}

                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{ borderWidth: 0.2, borderColor: "#707070", marginHorizontal: 20, marginTop: 24 }}>
                </View>
                {BoxVisibility == "rose" ? <FlatList
                    // keyExtractor={item => item.id}
                    data={exampleState}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={item.id} style={{ height: 200 }}>
                                <View style={{ flexDirection: "row-reverse", marginTop: 20, right: 40 }}>
                                    <TouchableOpacity onPress={() => DeleteElement(item.id)}>
                                        <Image style={{ height: 30, width: 30 }} source={require('../google/delete.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", marginHorizontal: 20, justifyContent: 'space-between', }}>

                                    <View>

                                        <Text style={{ color: "#A5A5A5", }}>
                                            From
                                        </Text>
                                        <View style={{
                                            backgroundColor: '#1A1A1A', width: 180, borderRadius: 15,
                                            borderColor: '#707070',
                                            borderWidth: 1,
                                            height: 65, marginTop: 15, flexDirection: "row", justifyContent: "space-around"
                                        }}>
                                            {selectedTime === '' ?
                                                <Text style={{ color: '#9F9F9F', marginTop: 20, }}>Select Time</Text> :
                                                <Text style={{ color: '#FFFFFF', marginTop: 20, }} >{selectedTime}</Text>}

                                            <TouchableOpacity onPress={() => { showTimePicker() }}
                                                style={{ marginTop: 29, }}>
                                                <Image style={{ width: 20, height: 10, position: "absolute" }} source={require('../google/down_arrow.png')} />
                                            </TouchableOpacity>
                                            <View>
                                                <DateTimePickerModal
                                                    // isVisible={isDatePickerVisible}
                                                    isVisible={showPicker}
                                                    mode="time"
                                                    display="spinner"
                                                    onConfirm={handleTime}
                                                    onCancel={hideTimePicker}

                                                />
                                            </View>
                                        </View>

                                    </View>
                                    <View>

                                        <Text style={{ color: "#A5A5A5", }}>
                                            To
                                        </Text>
                                        <View style={{
                                            backgroundColor: '#1A1A1A', width: 180, borderRadius: 15,
                                            borderColor: '#707070',
                                            borderWidth: 1,
                                            height: 65, marginTop: 15, flexDirection: "row", justifyContent: "space-around"
                                        }}>
                                            {selectedTime === '' ?
                                                <Text style={{ color: '#9F9F9F', marginTop: 20, }}>Select Time</Text> :
                                                <Text style={{ color: '#FFFFFF', marginTop: 20, }} >{selectedTime}</Text>}

                                            <TouchableOpacity onPress={() => { showTimePicker() }}
                                                style={{ marginTop: 29, }}>
                                                <Image style={{ width: 20, height: 10, position: "absolute" }} source={require('../google/down_arrow.png')} />
                                            </TouchableOpacity>
                                            <View>
                                                <DateTimePickerModal
                                                    // isVisible={isDatePickerVisible}
                                                    isVisible={showPicker}
                                                    mode="time"
                                                    display="spinner"
                                                    onConfirm={handleTime}
                                                    onCancel={hideTimePicker}

                                                />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                                <View
                                    style={{ borderWidth: 0.2, borderColor: "#707070", marginHorizontal: 20, marginTop: 24 }}>
                                </View>

                            </View>


                        )
                    }
                    } /> : null}


                <View style={{ flexDirection: "row", left: 24, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => setImage(!image)}>
                        {image == true ?
                            <Image source={require('../google/checked.png')} /> :
                            <Image source={require('../google/check.png')} />}
                    </TouchableOpacity>

                    <Text style={{ color: "white", textAlign: "center", left: 15 }}>
                        Apply the same to the rest of the week days
                    </Text>
                </View>
                <TouchableOpacity style={{
                    marginHorizontal: 20,
                    height: 60,
                    marginTop: 12,
                    marginBottom: 20
                }}>
                    <LinearGradient style={{ height: 60, borderRadius: 5, }} colors={['#0088FF', '#5821AF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                        <Text style={{ color: "white", alignSelf: "center", paddingTop: 15, fontSize: 19, fontWeight: "bold" }}>
                            Submit Schedule</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </ScrollView>
        </View>




    )
}

export default CreateCalendarSlots