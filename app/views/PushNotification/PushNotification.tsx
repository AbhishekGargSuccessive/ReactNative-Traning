import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
import { Alert, AppRegistry, Text, View } from 'react-native';
import NotificationAlert from '../PushNotification/NotificationAlert';



function Notification() {
    // const checkToken = async () => {
    //     const fcmToken = await messaging().getToken();
    //     if (fcmToken) {
    //         console.log(fcmToken);
    //     }
    // }

    // checkToken();

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log("Message Handled in the background: ",remoteMessage);
        });

        return unsubscribe;
    }, []);

    return (
        <View>
            <Text>
                PUSH NOTIFICATION
            </Text>
            <NotificationAlert />
        </View>
    )
}

export default Notification;