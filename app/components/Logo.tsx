import React from "react";
import { Image, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import styles from "./styles";

interface LogoProps {
    navigation: any
}

export const Header = () => {
    return (
        <View style={styles.headerLogo}>
            <Image
                style={styles.logo}
                source={require('../assets/header.png')}
            />
        </View>
    );
}

export const Help = () => {
    return (
        <TouchableOpacity>
            <View style={styles.borderlogo} >
                <Image
                    style={styles.rightlogo}
                    source={require('../assets/help.png')}
                />
            </View >
        </TouchableOpacity>
    )
}

export const LeftArrow = (props: LogoProps) => {
    const { navigation } = props
    return (
        <TouchableOpacity style={{ marginHorizontal: 13, marginTop: 15 }} onPress={() => { navigation.goBack('') }}>
            <View style={styles.borderleftlogo}>
                <Image
                    style={styles.leftlogo}
                    source={require('../assets/left_arrow.png')}
                />
            </View>
        </TouchableOpacity>
    )
}

export const PadLock = () => {
    return (
        <Image source={require('../assets/padlock.png')} style={styles.PadLockLogo} />
    )
}

export const Hidden = () => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Image source={require('../assets/hidden.png')} style={styles.HiddenLogo} />
        </TouchableOpacity>
    )
}

export default Header;