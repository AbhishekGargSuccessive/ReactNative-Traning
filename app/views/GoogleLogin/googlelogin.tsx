import React from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { View } from 'react-native-animatable';
import { Text } from 'react-native';
import styles from '../GoogleLogin/styles'

const GoogleSignIn = () => {

    const signIn = async () => {

        GoogleSignin.configure({
            scopes: [],
            webClientId: '38252352484-c481c4khe7cfd9o1j4m98v5uqf3gp4m2.apps.googleusercontent.com',
            offlineAccess: true
        });

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("userinfo", userInfo)
        } catch (error) {
            console.log(error)
        }
    };

    return (

        <View style={styles.container}>
            <Text style={styles.text}> Sign in With Google Account</Text>
            <GoogleSigninButton
                style={styles.googlebtn}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => signIn()}
            />

        </View>
    )
}
export default GoogleSignIn;
