import React, { useState } from "react";
import { ScrollView, Switch, TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native-animatable";
import { HeaderLogo, TextInputs, TextPasswords } from "../../common";
import { COLORS, constants, icons } from "../../constants";
import styles from './styles'

interface SignIn {
    navigation: any
    isEnabled: boolean
    toggleSwitch: () => void
    email: string
    password: string
    invalidEmail: boolean
    invalidPassword: boolean
    setEmail: (text: string) => void
    setPassword: (text: string) => void;
    setInvalidEmail: (text: boolean) => void
    setInvalidPassword: (text: boolean) => void;
    Submit: () => void
}

const SignIn = (props: SignIn) => {
    const {
        navigation,
        isEnabled,
        toggleSwitch,
        email,
        password,
        invalidEmail,
        invalidPassword,
        setEmail,
        setPassword,
        setInvalidEmail,
        setInvalidPassword,
        Submit
    } = props

    return (
        <View style={styles.container}>

            <HeaderLogo />

            <ScrollView style={styles.marginContainer} showsVerticalScrollIndicator={false}>

                <Text style={styles.SigninText}>{constants.keywords.LetsSignIn}</Text>
                <Text style={styles.WelcomeText}>{constants.keywords.Welcome}</Text>

                <View style={styles.ScrollContainer}>

                    <TextInputs
                        name="Email"
                        Switch={invalidEmail}
                        setSwitch={setInvalidEmail}
                        onchangeText={(email) => setEmail(email)}
                    />

                    <TextPasswords
                        name='Password'
                        Switch={invalidPassword}
                        setSwitch={setInvalidPassword}
                        onchangeText={(password) => setPassword(password)}
                    />

                    <View style={styles.SwitchContainer}>

                        <View style={styles.SwitchDirection}>

                            <Switch
                                trackColor={{ false: COLORS.lightGray1, true: COLORS.primary }}
                                thumbColor={COLORS.gray2}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={styles.ForgotText}>{constants.keywords.Save}</Text>
                        </View>


                        <TouchableOpacity onPress={() => navigation.navigate('Password')}>
                            <Text style={styles.ForgotText}>{constants.keywords.Password}</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.SignInButton} onPress={() => Submit()}>
                        <Text style={styles.SignInButtonText}>{constants.keywords.SignIn}</Text>
                    </TouchableOpacity>

                    <View style={styles.TextContainer}>

                        <Text style={styles.WelcomeText}>{constants.keywords.Account} </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.SignUpText}>{constants.keywords.SignUp}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.socialContainer}>

                        <TouchableOpacity style={styles.facebookButton}>
                            <Image source={icons.fb} style={styles.icons} />
                            <Text style={styles.facebookButtonText}>{constants.keywords.Facebook}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.GoogleButton}>
                            <Image source={icons.google} style={styles.icons} />
                            <Text style={styles.GoogleButtonText}>{constants.keywords.Google}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignIn;