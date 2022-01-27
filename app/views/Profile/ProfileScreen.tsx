import React from "react";
import {
    ScrollView, View, Image, Text, ImageBackground,
    Modal, TouchableOpacity, TouchableWithoutFeedback
} from "react-native";
import ItemSeperatorMain from '../../components/ItemSeperator/ItemSeperator'
import CommonTextInput from "../../components/TextInput/CommonTextInput";
import { useOrientation } from '../../config/orientation'
import { Help } from "../../components/Logo/Logo";
import styles from "./style";
import { Constant, Icons } from "../../config";


interface Profileprops {
    navigation: any;
    image: string
    setimage: (value: string) => void
    launchLibrary: () => void
    openCamara: () => void
    modalVisible: boolean
    setModalVisible: (value: boolean) => void
    editAddress: boolean
    setEditAddress: (value: boolean) => void
    editContact: boolean
    setEditContact: (value: boolean) => void
    editPI: boolean
    setEditPI: (value: boolean) => void
}

const ProfileScreen = (props: Profileprops) => {
    const o = useOrientation()
    const {
        image,
        setimage,
        openCamara,
        launchLibrary,
        modalVisible,
        setModalVisible,
        editAddress,
        setEditAddress,
        editContact,
        setEditContact,
        editPI,
        setEditPI
    } = props;

    return (
        <View style={styles(o).container}>
            <View style={styles(o).viewStyle}>

                <TouchableOpacity style={styles(o).leftArrow}
                    onPress={() => { { (editPI || editContact || editAddress) ? props.navigation.navigate('Profile') : props.navigation.goBack() } }}>
                    <View style={styles(o).borderleftlogo}>
                        <Image style={styles(o).leftlogo} source={Icons.left_arrow} />
                    </View>
                </TouchableOpacity>

                <Help />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >

                <View style={styles(o).centeredView}>

                    <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles(o).centeredView} />
                    </TouchableWithoutFeedback>

                    <View style={styles(o).modalView}>

                        <TouchableOpacity onPress={() => openCamara()}>
                            <Image source={Icons.camera} style={styles(o).imagestyle} />

                            <Text style={styles(o).button}>{Constant.Camera}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => launchLibrary()}>
                            <Image source={Icons.gallery}
                                style={styles(o).gallery}></Image>

                            <Text style={styles(o).galleryText}>{Constant.Gallery}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Image source={Icons.close} style={styles(o).close} />

                            <Text style={styles(o).button}>{Constant.Close}</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <View style={styles(o).Upper}>
                <ImageBackground source={{ uri: image }} style={styles(o).Profile} >
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image source={Icons.camera} style={styles(o).camera} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles(o).identity}>
                    <Text style={styles(o).name}>{Constant.user_name}</Text>
                    <Text style={styles(o).color}>{Constant.email_id}</Text>
                </View>
            </View>

            <ItemSeperatorMain />

            <ScrollView showsVerticalScrollIndicator={false} style={styles(o).scroll} >

                <View style={styles(o).Square}>

                    <View style={styles(o).viewstyle2}>
                        <Text style={styles(o).text}>{Constant.Personal_Information}</Text>
                        {!editPI ? <TouchableOpacity onPress={() => setEditPI(true)}>
                            <Text style={styles(o).text2}>{Constant.Edit}</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setEditPI(false)}>
                                <Text style={styles(o).text2}>{Constant.Save}</Text>
                            </TouchableOpacity>}
                    </View>

                    <View style={styles(o).scroll}>
                        <CommonTextInput
                            placeholder='Abhishek'
                            text='First Name'
                            editable={editPI}

                        />
                    </View>

                    <CommonTextInput
                        placeholder='Garg'
                        text='Last Name'
                        editable={editPI}
                    />

                    <CommonTextInput
                        placeholder='Male'
                        text='Gender'
                        editable={editPI}
                    />

                </View>

                <View style={styles(o).Square2}>

                    <View style={styles(o).viewstyle2}>
                        <Text style={styles(o).text}>{Constant.Contact}</Text>
                        {!editContact ? <TouchableOpacity onPress={() => setEditContact(true)}>
                            <Text style={styles(o).text2}>{Constant.Edit}</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setEditContact(false)}>
                                <Text style={styles(o).text2}>{Constant.Save}</Text>
                            </TouchableOpacity>}
                    </View>

                    <View style={styles(o).scroll}>
                        <CommonTextInput
                            placeholder='abhishek.garg@successive.tech'
                            text='Email'
                            editable={editContact}
                        />
                    </View>

                    <CommonTextInput
                        placeholder='+123456789'
                        text='Home Phone'
                        editable={editContact}
                    />

                    <CommonTextInput
                        placeholder='+126636337'
                        text='Work'
                        editable={editContact}
                    />

                    <CommonTextInput
                        placeholder='+918923735637'
                        text='Mobile'
                        editable={editContact}
                    />

                </View>

                <View style={styles(o).Square3}>

                    <View style={styles(o).viewstyle2}>
                        <Text style={styles(o).text}>{Constant.Mailing_Address}</Text>
                        {!editAddress ? <TouchableOpacity onPress={() => setEditAddress(true)}>
                            <Text style={styles(o).text2}>{Constant.Edit}</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setEditAddress(false)}>
                                <Text style={styles(o).text2}>{Constant.Save}</Text>
                            </TouchableOpacity>}
                    </View>

                    <View style={styles(o).scroll}>
                        <CommonTextInput
                            placeholder='Greater Noida'
                            text='Mailing Addresss'
                            editable={editAddress}
                        />
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

export default ProfileScreen;