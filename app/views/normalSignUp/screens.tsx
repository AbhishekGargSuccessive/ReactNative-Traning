// import { StatusBar } from "react-native";
import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

import { Input } from "../../common";

export default function SignUpScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Image style={styles.image} source={require('.././../assets/images/signup.jpg')} />

                <View style={styles.inputView}>
                    <Input placeholder="First Name"></Input>
                </View>

                <View style={styles.inputView}>
                    <Input placeholder="Last Name"></Input>
                </View>

                <View style={styles.inputView}>
                    <Input placeholder='Email ID'></Input>
                </View>

                <View style={styles.inputView}>
                    <Input placeholder="Password"></Input>
                </View>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.signin_button}>Sign In</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.SignUpBtn}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}