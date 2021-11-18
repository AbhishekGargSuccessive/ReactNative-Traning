import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";


const Button = () => {
    return (
        <View>
            <TouchableOpacity
                style={styles.SignUpBtn}>
                <Text>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;