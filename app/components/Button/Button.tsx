import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from '../Button/styles'


interface ButtonProps {
    item: any
    navigation: any
    name: any
}
const Button = (props: ButtonProps) => {
    const { item, navigation } = props
    return (
        <View >
            <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate(props.name)}>
                <Text>{item}</Text>
                <Image source={require('../../assets/right_arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
        </View>
    )
}

export default Button;