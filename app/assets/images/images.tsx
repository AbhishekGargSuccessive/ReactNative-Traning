import React from "react";
import { Image } from "react-native";
import styles from "./styles";

export const Home = () => {
    return (
        <Image source={require('../../assets/home.png')}
            style={styles.images}
        />
    );
}

export const Progress = () => {
    return (
        <Image source={require('../../assets/progress.png')}
            style={styles.images} />
    )
}

export const Inbox = () => {
    return (
        <Image source={require('../../assets/inbox.png')}
            style={styles.images} />
    )
}

export const Settings = () => {
    return (
        <Image source={require('../../assets/settings.png')}
            style={styles.images} />
    )
}

