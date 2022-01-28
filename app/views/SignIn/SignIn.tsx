import React, { useState } from "react";
import { ScrollView, Switch, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-animatable";
import { HeaderLogo, TextInputs, TextPasswords } from "../../common";
import { COLORS, constants } from "../../constants";
import styles from './styles'

interface SignIn {
    navigation: any
    isEnabled: boolean
    toggleSwitch: () => void
}

const SignIn = (props: SignIn) => {
    const { navigation, isEnabled, toggleSwitch } = props
    return (
        <View style={styles.container}>
            <HeaderLogo />
            <Text style={styles.SigninText}>{constants.keywords.LetsSignIn}</Text>
            <Text style={styles.WelcomeText}>{constants.keywords.Welcome}</Text>

            <View style={styles.ScrollContainer}>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <TextInputs name="Email" />
                    <TextPasswords name='Password' />

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


                        <TouchableOpacity>
                            <Text style={styles.ForgotText}>{constants.keywords.Password}</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.SignInButton}>
                        <Text style={styles.SignInButtonText}>{constants.keywords.SignIn}</Text>
                    </TouchableOpacity>

                    <View style={styles.TextContainer}>

                        <Text style={styles.WelcomeText}>{constants.keywords.Account} </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.SignUpText}>{constants.keywords.SignUp}</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>


        </View>
    )
}

export default SignIn;