import React from "react";
import { Text, TouchableOpacity, View, TextInput, ScrollView, Image } from "react-native";
import styles from "./styles";

interface RootSignUp {
    placeholder: string
}

const Input = (props: RootSignUp) => {
    return (
        <View>
            <TextInput
                style={styles.TextInput}
                maxLength={15}
                keyboardType={'numeric'}
                placeholder={props.placeholder}
                placeholderTextColor="#003f5c"
            />
        </View>

    )
}

export default Input;