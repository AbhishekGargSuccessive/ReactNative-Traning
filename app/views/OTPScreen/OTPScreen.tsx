import React, { useState } from 'react';
import { View, Button, TextInput, ImageBackground, } from 'react-native';
import auth from '@react-native-firebase/auth';

interface Notify {
    confirmation: any
    confirm: number

}

const OTP = () => {

    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState<any | null>(null);

    const [code, setCode] = useState('');

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber: any) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            console.log("right password", code)
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <ImageBackground source={require('../../assets/back.jpg')} style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        title="Phone Number Sign In"
                        onPress={() => signInWithPhoneNumber('+91 8923735637')}
                    />
                </View>
            </ImageBackground>
        );
    }

    return (

        <ImageBackground source={require('../../assets/Air.jpg')} style={{ flex: 1 }}>
            <TextInput
                style={{ borderRadius: 20, backgroundColor: 'white', width: "50%", alignSelf: 'center', marginTop: "10%" }}
                value={code}
                placeholder=''
                keyboardType='number-pad'
                onChangeText={text => setCode(text)} />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Button title="Confirm Code" onPress={() => confirmCode()} />
            </View>
        </ImageBackground>

    );
}
export default OTP;