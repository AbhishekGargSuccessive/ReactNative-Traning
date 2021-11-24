import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import styles from "./styles";
import { Input, Button } from "../../common";
import Images from "../../common/images/images";


interface RootSignUp {
    navigation: any

    invalidUsername: boolean
    invalidEmail: boolean
    invalidPassword: boolean
    invalidConfirmPassword: boolean

    ClickHandle: () => void

    username: string
    email: string
    password: string
    confirmPassword: string

    setInvalidUsername: (text: boolean) => void;
    setInvalidEmail: (text: boolean) => void;
    setInvalidPassword: (text: boolean) => void;
    setInvalidConfirmPassword: (text: boolean) => void;

    setusername: (text: string) => void;
    setEmail: (text: string) => void;
    setPassword: (text: string) => void;
    setConfirmPassword: (text: string) => void;
}

export default function SignUpScreen(props: RootSignUp) {
    const { navigation,
        invalidUsername,
        invalidEmail,
        invalidPassword,
        invalidConfirmPassword,
        username,
        email,
        password,
        confirmPassword,
        setusername,
        setEmail,
        setPassword,
        setConfirmPassword,
        setInvalidUsername,
        setInvalidEmail,
        setInvalidPassword,
        setInvalidConfirmPassword,
        ClickHandle
    } = props


    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.container}>

                <Images />

                <View style={styles.placestyle}>

                    <View style={styles.inputView}>
                        <Input
                            placeholder="Full Name"
                            commonText={username}
                            Switch={invalidUsername}
                            secureTextEntry={false}
                            setCommonText={(username) => setusername(username)}
                            setSwitch={setInvalidUsername}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Input
                            placeholder="Email"
                            commonText={email}
                            Switch={invalidEmail}
                            secureTextEntry={false}
                            setCommonText={(email) => setEmail(email)}
                            setSwitch={setInvalidEmail}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Input
                            placeholder="Password"
                            commonText={password}
                            Switch={invalidPassword}
                            secureTextEntry={true}
                            setCommonText={(password) => setPassword(password)}
                            setSwitch={setInvalidPassword}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <Input
                            placeholder="Confirm Password"
                            commonText={confirmPassword}
                            Switch={invalidConfirmPassword}
                            secureTextEntry={true}
                            setCommonText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                            setSwitch={setInvalidConfirmPassword}
                        />
                    </View>

                </View>

                <View >
                    <Button text='SIGN UP'
                        name={username}
                        func={ClickHandle}
                        Switch={invalidUsername}
                        setSwitch={(invalidUsername) => setInvalidUsername(invalidUsername)}
                    />
                </View>

            </View>
        </ScrollView >
    );
}