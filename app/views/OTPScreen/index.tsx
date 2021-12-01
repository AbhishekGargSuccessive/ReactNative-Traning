import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import Authenticated from './AuthenticatedScreen/Authenticated';
import MobileNo from './MobileNoScreen/MobileNo';
import OTP from './VerifyCodeScreen/VerifyCode'

export default function MobileOTP() {

    const [confirm, setConfirm] = useState<any | null>(null);
    const [authenticated, setAuthenticated] = useState(false);

    async function signIn(phoneNumber: string) {
        try {
            const confirmation = await auth().signInWithPhoneNumber('+91' + phoneNumber);
            setConfirm(confirmation);
        } catch (error) {
            console.log(error)
        }
    }

    async function confirmVerificationCode(code: any) {
        try {
            await confirm.confirm(code);
            setConfirm(null);
        } catch (error) {
            Alert.alert('Invalid code');
        }
    }

    auth().onAuthStateChanged((user) => {
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    })

    if (authenticated)
        return (
            <Authenticated />
        );

    if (confirm)
        return (
            <OTP onSubmit={confirmVerificationCode} />
        );

    return (
        <MobileNo onSubmit={signIn} />
    );
}