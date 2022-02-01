import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { constants, icons } from "../../constants";
import styles from './styles';

interface TextProps {
    name: string
    Switch: boolean
    onchangeText: (t: string) => void
    setSwitch: (t: boolean) => void
}

const TextInputs = (props: TextProps) => {
    const { name, Switch, onchangeText, setSwitch, } = props;
    return (
        <View>
            <View>
                <Text style={styles.emailText}>{props.name}</Text>
            </View>

            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.InputText}
                    numberOfLines={1}
                    keyboardType={'email-address'} >
                </TextInput>

            </View>

        </View>
    );

}

export default TextInputs;