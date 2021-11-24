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
            {props.Switch && <Text style={styles.errormsg}>{props.commonText} is invalid</Text>}
        </View>

    )
}

export default Input;