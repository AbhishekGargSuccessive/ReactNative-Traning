import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import styles from './styles';

const MobileNo = (props: { onSubmit: (arg0: string) => void; }) => {

    const [phoneNumber, setPhoneNumber] = useState<any | null>(null);

    return (
        <ImageBackground source={require('../../../assets/Air.jpg')} style={styles.screen}>
            <Text style={styles.text}>Enter Your Mobile Number</Text>
            <TextInput
                autoFocus
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
            />
            <Button title="Get OTP" onPress={() => props.onSubmit(phoneNumber)} />
        </ImageBackground>
    );
}

export default MobileNo;