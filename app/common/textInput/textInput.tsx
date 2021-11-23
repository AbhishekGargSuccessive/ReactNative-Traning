import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, ScrollView, Image } from "react-native";
import styles from "./styles";

interface RootSignUp {
    placeholder: string
    commonText: string
    Switch: boolean
    secureTextEntry: boolean
    setCommonText: (t: string) => void
    setSwitch: (t: boolean) => void
    // onChangeText: (text: string) => void
}

const Input = (props: RootSignUp) => {
    return (
        <View >
            <View>
                <TextInput
                    style={styles.TextInput}
                    maxLength={30}
                    autoCapitalize="none"
                    keyboardType={'name-phone-pad'}
                    placeholder={props.placeholder}
                    placeholderTextColor="black"
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={(text) => { props.setCommonText(text), props.setSwitch(false) }
                    }
                />
            </View>
            {props.Switch && <Text style={{ color: "red", marginBottom: 40, marginLeft: 15 }}>{props.commonText} is invalid</Text>}
        </View>

    )
}

export default Input;