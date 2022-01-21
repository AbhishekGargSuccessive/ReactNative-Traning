import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Icons } from "../../config";
import styles from '../Button/styles'


interface ButtonProps {
    item: any
    navigation: any
    name: any
    disabled: any
}
const Button = (props: ButtonProps) => {
    const { item, navigation } = props
    return (
        <View >
            <TouchableOpacity style={styles.opacity} disabled={props.disabled} onPress={() => navigation.navigate(props.name)}>
                <Text>{item}</Text>
                <Image source={Icons.right_arrow} style={styles.arrow} />
            </TouchableOpacity>
        </View>
    )
}

export default Button;