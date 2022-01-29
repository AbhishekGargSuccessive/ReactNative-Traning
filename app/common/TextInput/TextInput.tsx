import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const TextInputs = (props: any) => {
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