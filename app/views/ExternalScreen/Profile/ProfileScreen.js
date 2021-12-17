import React, { useState } from "react";
import { ScrollView, View, Image, Text, ImageBackground, Alert, Modal, TouchableOpacity } from "react-native";
import GoogleAutoComplete from "../../../components/GoogleAutoComp/GoogleAutoComp";
import ItemSeperatorMain from '../../../components/ItemSeperator/ItemSeperator'
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import CommonTextInput from "../../../components/TextInput/CommonTextInput";
import { useOrientation } from '../../../config/orientation'
import { Help, LeftArrow } from "../../../components/Logo";
import styles from "./style";


const ProfileScreen = (props) => {
    const [editPI, setEditPI] = useState(false)
    const [editContact, setEditContact] = useState(false)
    const [editAddress, setEditAddress] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState('https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-1/cp0/e15/q65/p74x74/32484589_2133374550282748_5581910179881943040_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&efg=eyJpIjoiYiJ9&_nc_ohc=eWbsrAJd3HIAX9Da9GM&_nc_ht=scontent-del1-1.xx&oh=00_AT8vhSpNoBaRN_yNQcTVzhXRphuN0t6vYkM1sh7HS40eFw&oe=61DDCB10')

    const { navigation } = props;
    const o = useOrientation()

    const launchLibrary = () => {
        let options = {
            width: 20,
            height: 20,
            resizeMode: "contain",
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                Alert.alert(response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };

                console.log('response', JSON.stringify(response.assets[0].uri));
                console.log(source)
                setImage(source.uri)
                setModalVisible(false)
            }
        });

    }

    const openCamara = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        };

        launchCamera(options, response => {
            console.log(response);
            if (response.didCancel) {
                console.log('‘User cancelled image picker’');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };

                console.log('response', JSON.stringify(response.assets[0].uri));
                console.log(source)
                setImage(source.uri)
                setModalVisible(false)
            }
        });
    };


    return (
        <View style={styles(o).container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <LeftArrow navigation={navigation} />
                <Help />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     // Alert.alert("Modal has been closed.");
                //     setModalVisible(!modalVisible);
                // }}
                >

                <View style={styles(o).centeredView}>

                    <View style={styles(o).modalView}>

                        <TouchableOpacity onPress={() => launchCamera()}>
                            <Image source={require('../../../assets/camera.png')}
                                style={styles(o).imagestyle}></Image>

                            <Text style={styles(o).button}>Camera</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => launchLibrary()}>
                            <Image source={require('../../../assets/gallery.png')}
                                style={{ height: 40, width: 60, margin: 10, resizeMode: 'contain' }}></Image>

                            <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Image source={require('../../../assets/close.png')}
                                style={{ tintColor: 'white', height: 40, margin: 10, resizeMode: 'contain', borderRadius: 20 }}></Image>

                            <Text style={styles(o).button}>Close</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <View style={styles(o).Upper}>
                <ImageBackground source={{ uri: image }} style={styles(o).Profile} >
                    <TouchableOpacity onPress={() => setModalVisible()}>
                        <Image source={require('../../../assets/camera.png')} style={styles(o).camera} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles(o).identity}>
                    <Text style={styles(o).name}>Abhishek Garg</Text>
                    <Text style={styles(o).color}>abhishek.garg@successive.tech</Text>
                </View>
            </View>

            <ItemSeperatorMain />

            <ScrollView style={{ marginVertical: 10 }}>

                <View style={styles(o).Square}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                        <Text style={styles(o).text}>Personal Information</Text>
                        {!editPI ? <TouchableOpacity onPress={() => setEditPI(true)}>
                            <Text style={styles(o).text2}>Edit</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setEditPI(false)}>
                                <Text style={styles(o).text2}>Save</Text>
                            </TouchableOpacity>}
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <CommonTextInput
                            placeholder='Abhishek'
                            text='First Name'
                            editable={editPI}

                        />
                    </View>

                    <View>
                        <CommonTextInput
                            placeholder='Garg'
                            text='Last Name'
                            editable={editPI}
                        />
                    </View>

                    <View>
                        <CommonTextInput
                            placeholder='Male'
                            text='Gender'
                            editable={editPI}
                        />
                    </View>

                </View>

                <View style={styles(o).Square2}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                        <Text style={styles(o).text}>Contact</Text>
                        {!editContact ? <TouchableOpacity onPress={() => setEditContact(true)}>
                            <Text style={styles(o).text2}>Edit</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setEditContact(false)}>
                                <Text style={styles(o).text2}>Save</Text>
                            </TouchableOpacity>}
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <CommonTextInput
                            placeholder='abhishek.garg@successive.tech'
                            text='Email'
                            editable={editContact}
                        />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <CommonTextInput
                            placeholder=''
                            text='Home Phone'
                            editable={editContact}
                        />
                    </View>

                    <View>
                        <CommonTextInput
                            placeholder=''
                            text='Work'
                            editable={editContact}
                        />
                    </View>

                    <View>
                        <CommonTextInput
                            placeholder='+918923735637'
                            text='Mobile'
                            editable={editContact}
                        />
                    </View>

                </View>

                <View style={styles(o).Square3}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                        <Text style={styles(o).text}>Mailing Address</Text>
                        {!editAddress ? <TouchableOpacity onPress={() => setEditAddress(true)}>
                            <Text style={styles(o).text2}>Edit</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setEditAddress(false)}>
                                <Text style={styles(o).text2}>Save</Text>
                            </TouchableOpacity>}
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <CommonTextInput
                            placeholder='Greater Noida'
                            text='Mailing Addresss'
                            editable={editAddress}
                        />
                        {/* <GoogleAutoComplete /> */}
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

export default ProfileScreen;