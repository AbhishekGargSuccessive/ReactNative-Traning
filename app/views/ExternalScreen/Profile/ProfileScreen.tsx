import React from "react";
import { ScrollView, View, Image, Text, ImageBackground, TextInput } from "react-native";
import styles from "./style";
import { Help, LeftArrow } from "../../../components/Logo";
import ItemSeperatorMain from '../../../components/ItemSeperator/ItemSeperator'
import { TouchableOpacity } from "react-native";

interface ProfileProp {
    navigation: any
}

const ProfileScreen = (props: ProfileProp) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <LeftArrow navigation={navigation} />
                <Help />
            </View>
            <View style={styles.Upper}>
                <ImageBackground source={require('../../../assets/user_avatar.png')} style={styles.Profile} >
                    <Image source={require('../../../assets/camera.png')} style={styles.camera} />
                </ImageBackground>
                <View style={styles.identity}>
                    <Text style={styles.name}>Abhishek Garg</Text>
                    <Text style={styles.color}>abhishek.garg@successive.tech</Text>
                </View>
            </View>
            <ItemSeperatorMain />

            <ScrollView style={styles.container}>

            <View style={styles.Square}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Personal Information</Text>
                    <TouchableOpacity>
                        <Text style={styles.text2}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.text3}>First Name</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>

                <View>
                    <Text style={styles.text3}>Last Name</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>

                <View>
                    <Text style={styles.text3}>Gender</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>

            </View>

            <View style={styles.Square2}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Contact</Text>
                    <TouchableOpacity>
                        <Text style={styles.text2}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.text3}>Email</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.text3}>Home Phone</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>

                <View>
                    <Text style={styles.text3}>Work Phone</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>

                <View>
                    <Text style={styles.text3}>Mobile No</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>

            </View>

            <View style={styles.Square3}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Mailing Address</Text>
                    <TouchableOpacity>
                        <Text style={styles.text2}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.text3}>Address</Text>
                    <TextInput
                        style={{ marginHorizontal: 20 }}
                        placeholder=''
                    />
                </View>
            </View>
            </ScrollView>

        </View>
    );
}

export default ProfileScreen;