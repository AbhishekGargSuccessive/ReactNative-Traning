import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-animatable";
import { HeaderLogo, TextInputs, TextPasswords } from "../../common";
import { constants } from "../../constants";
import styles from './styles'

interface SignUp {
    navigation: any
}

const SignUpScreen = (props: SignUp) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <HeaderLogo />
            <Text style={styles.startedText}>{constants.keywords.Getting_Started}</Text>
            <Text style={styles.createText}>{constants.keywords.Create}</Text>

            <View style={styles.ScrollContainer}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <TextInputs name='Email' />
                    <TextInputs name='Username' />
                    <TextPasswords name='Password' />

                    <View style={styles.ButtonContainer}>

                        <TouchableOpacity style={styles.SignUpButton}>
                            <Text style={styles.SignUpButtonText}>{constants.keywords.SignUp}</Text>
                        </TouchableOpacity>

                        <View style={styles.TextContainer}>

                            <Text style={styles.createText}>{constants.keywords.Already_Account} </Text>

                            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.SignInText}>{constants.keywords.SignIn}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>

            </View>
        </View>
    )
}

export default SignUpScreen;