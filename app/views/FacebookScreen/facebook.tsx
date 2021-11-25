import React from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import styles from './styles';

const FacebookLogin = () => {
    return (
        <View style={styles.fbbtn}>
            <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("Login has Error: ", error);
                        } else if (result.isCancelled) {
                            console.log("Login is Cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    console.log('Facebook Data ==>', data)
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => console.log("Logout Successfully.")} />
        </View>
    )
}
export default FacebookLogin;