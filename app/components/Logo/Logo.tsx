import React, { useState } from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";
import { Icons } from "../../config";
import styles from "./styles";


interface LogoProps {
    navigation: any
}

export const Header = () => {
    return (
        <View style={styles.headerLogo}>
            <Image
                style={styles.logo}
                source={Icons.header}
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
                    source={Icons.help}
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
                    source={Icons.left_arrow}
                />
            </View>
        </TouchableOpacity>
    )
}

export const PadLock = () => {
    return (
        <Image source={Icons.padlock} style={styles.PadLockLogo} />
    )
}

export const Hidden = () => {
    const [change, onChage] = useState(true)
    return (
        <View>

            {
                !change ?
                    <TouchableOpacity style={styles.hidden} onPress={() => onChage(!change)}>
                        <Image source={Icons.hidden} style={styles.HiddenLogo} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.hidden} onPress={() => onChage(!change)}>
                        <Image source={Icons.eye} style={styles.HiddenLogo} />
                    </TouchableOpacity>
            }

        </View>
    )
}

export const ThreeDots = () => {
    return (
        <TouchableOpacity style={styles.menuOpacity}>
            <Image source={Icons.menu} style={styles.menu} />
        </TouchableOpacity>
    )
}

export default Header;