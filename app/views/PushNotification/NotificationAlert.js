import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification, { Importance } from 'react-native-push-notification';

const NotificationAlert = (props) => {
    // const createChannel = () => {
    //     PushNotification.createChannel(
    //         {
    //             channelId: 'channel-id', // (required)
    //             channelName: 'My channel', // (required)
    //             channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    //             playSound: false, // (optional) default: true
    //             soundName: 'default', // (optional) See soundName parameter of localNotification function
    //             importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    //             vibrate: false, // (optional) default: true. Creates the default vibration patten if true.
    //         },
    //         (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    //     );
    // };
    useEffect(() => {
        // createChannel();
        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            console.log(remoteMessage);
            PushNotification.localNotification({
                message: remoteMessage.notification.body,
                title: remoteMessage.notification.title,
                bigPictureUrl: remoteMessage.notification.android.imageUrl,
                smallIcon: remoteMessage.notification.android.imageUrl,
                channelId: true,

            });
        });
        return unsubscribe;
    }, []);

    return null;
};

export default NotificationAlert;