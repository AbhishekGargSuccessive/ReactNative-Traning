import React from "react";
import { Image } from "react-native";
import { Icons } from "../../config";
import styles from "./styles";

export const Home = (props: any) => {
    return (
        <Image source={Icons.home}
            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]}
        />
    );
}

export const Progress = (props: any) => {
    return (
        <Image source={Icons.progress}
            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]} />
    )
}

export const Inbox = (props: any) => {
    return (
        <Image source={Icons.inbox}
            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]} />
    )
}

export const Settings = (props: any) => {
    return (
        <Image source={Icons.settings}

            style={[styles.images, { tintColor: props.focused ? 'red' : 'black' }]} />
    )
}

