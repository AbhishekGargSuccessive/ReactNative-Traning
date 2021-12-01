import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import styles from './styles';

const OTP = (props: { onSubmit: (arg0: string) => void; }) => {
    const [code, setCode] = useState('');

    return (
        <ImageBackground source={require('../../../assets/back.jpg')} style={styles.screen}>
            <Text style={styles.text}>Enter OTP</Text>
            <TextInput
                autoFocus
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Confirm OTP" onPress={() => props.onSubmit(code)} />
        </ImageBackground>
    );
}

export default OTP