import React from "react";
import { Image } from "react-native";
import styles from "./styles";

export const Home = (props: any) => {
    return (
        <Image source={require('../../assets/home.png')}
            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]}
        />
    );
}

export const Progress = (props: any) => {
    return (
        <Image source={require('../../assets/progress.png')}
            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]} />
    )
}

export const Inbox = (props: any) => {
    return (
        <Image source={require('../../assets/inbox.png')}
            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]} />
    )
}

export const Settings = (props: any) => {
    return (
        <Image source={require('../../assets/settings.png')}

            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]} />
    )
}

