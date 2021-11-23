import React from "react";
import { Alert, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface RootButton {

    text: string
    name: string
    func: () => void
    setSwitch: (t: boolean) => void
    Switch: boolean
}


const Button = (props: RootButton) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={styles.SignUpBtn}
                onPress={() => props.func()}
            // onPress={() => navigation.push("Home")}
            >
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

// ToastAndroid.show("Done", ToastAndroid.SHORT)
