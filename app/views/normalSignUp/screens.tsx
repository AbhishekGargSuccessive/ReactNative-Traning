import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import styles from "./styles";
import { Input, Email, Password } from "../../common";

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
                    <Email placeholder='Email ID'></Email>
                </View>

                <View style={styles.inputView}>
                    <Password placeholder='Password'></Password>
                </View>

                <View style={styles.inputView}>
                    <Password placeholder='Confirm Password'></Password>
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
        // </ImageBackground>
    );
}


// ImageBackground source={require('../../assets/images/back.jpg')}