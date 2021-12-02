import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Button, Text, View } from 'react-native';
import styles from './styles';

import stripe from 'tipsi-stripe'

const StripeScreen = () => {
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(null)
    stripe.setOptions({
        publishableKey: 'pk_test_51K1qmSSBl1ihD33SJa3c6tUJBg9Xi9SrspzT4Gee4tlT8bIAU82cBWq0fpy4C1Lo0e29UONAG5UrF7a6So7mdfQg00L0mI1gcE',
    })
    const handleCardPayPress = async () => {
        // const options = {}
        try {
            setLoading(true)
            const token = await stripe.paymentRequestWithCardForm()
            console.log('Token from Card ', token)
            setToken(token)
            setLoading(false)
        } catch (error) {
            console.log('handleCardPayPress Error ', error)
            setLoading(false)
        }
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>
                    Card Form Example
                </Text>
                <Text style={styles.instruction}>
                    Click button to show Card Form dialog.
                </Text>
                <Button
                    title="Enter you card and pay"
                    onPress={handleCardPayPress}
                />
                <View style={styles.token}>
                    {token &&
                        <Text style={styles.instruction}>
                            Token: {token.id}
                        </Text>
                    }
                </View>
            </SafeAreaView>
        </>
    );
};

export default StripeScreen;