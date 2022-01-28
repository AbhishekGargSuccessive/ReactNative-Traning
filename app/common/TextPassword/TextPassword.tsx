import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const TextPasswords = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.PasswordText}>{props.name}</Text>

            <View style={styles.InputContainer}>

                <TextInput
                    style={styles.InputText}
                    numberOfLines={1}
                />
            </View>
        </View>
    );

}

export default TextPasswords;