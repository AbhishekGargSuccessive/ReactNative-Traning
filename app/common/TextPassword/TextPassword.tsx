import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const TextPasswords = (props: any) => {
    return (
        <View>
            <Text style={styles.PasswordText}>{props.name}</Text>

            <View style={styles.InputContainer}>

                <TextInput
                    style={styles.InputText}
                    numberOfLines={1}
                    secureTextEntry
                />
            </View>
        </View>
    );

}

export default TextPasswords;