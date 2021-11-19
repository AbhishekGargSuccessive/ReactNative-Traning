import React, { useState } from "react";
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
                autoCapitalize="none"
                placeholder={props.placeholder}
                placeholderTextColor="#003f5c"
            />
        </View>

    )
}

export default Input;

export const Email = (props: RootSignUp) => {
    return (
        <View>
            <TextInput
                style={styles.TextInput}
                keyboardType={'email-address'}
                placeholder={props.placeholder}
                placeholderTextColor="#003f5c"

            />
        </View>
    )
}
export const Password = (props: RootSignUp) => {
    return (
        <View>
            <TextInput
                style={styles.TextInput}
                keyboardType={'name-phone-pad'}
                secureTextEntry
                placeholder={props.placeholder}
                placeholderTextColor="#003f5c"

            />
        </View>
    )
}