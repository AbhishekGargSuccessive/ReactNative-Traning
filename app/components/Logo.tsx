import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";

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

export const LeftArrow = () => {
    return (
        <TouchableOpacity>
            <View style={styles.borderleftlogo}>
                <Image
                    style={styles.leftlogo}
                    source={require('../assets/left_arrow.png')}
                />

            </View>
        </TouchableOpacity>
    )
}

export default Header;