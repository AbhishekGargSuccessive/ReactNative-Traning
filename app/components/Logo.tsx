import React from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";
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
        <TouchableOpacity onPress={() => Alert.alert('Please Contact Developer Team! (Under Maintenance)')}>
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
        <TouchableOpacity style={styles.leftArrow} onPress={() => { navigation.goBack('') }}>
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
        <TouchableOpacity style={styles.hidden}>
            <Image source={require('../assets/hidden.png')} style={styles.HiddenLogo} />
        </TouchableOpacity>
    )
}

export const ThreeDots = () => {
    return (
        <TouchableOpacity style={styles.menuOpacity}>
            <Image source={require('../assets/menu.png')} style={styles.menu} />
        </TouchableOpacity>
    )
}

export default Header;