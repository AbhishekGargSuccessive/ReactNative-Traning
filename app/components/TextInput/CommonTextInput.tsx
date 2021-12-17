import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

interface CommonProps {
    editable: any
    text: string
    placeholder: string
}

const CommonTextInput = (props: CommonProps) => {
    return (
        <View>
            <Text style={styles.text}>{props.text}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor={'black'}
                editable={props.editable}
            />
        </View>
    )
}

export default CommonTextInput;