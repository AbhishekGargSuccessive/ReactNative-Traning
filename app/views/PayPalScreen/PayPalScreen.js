import PayPal from 'react-native-paypal-gateway';
import React from 'react';
import { View, Text } from 'react-native';

const PayPalScreen = () => {
  PayPal.initialize(PayPal.NO_NETWORK, "Afm7WaK0k7xHyd7nJ491Enj3JEROeNnF4R_K7TwGj1ZlTw0_fN70zQlpclpj6a7UWUaE52QZuatH-hoq");

  PayPal.pay({
    price: '40.70',
    currency: 'USD',
    description: 'Your description goes here',
  }).then(confirm => console.log(confirm))
    .catch(error => console.log(error));

  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}


export default PayPalScreen;

// 3 env available: NO_NETWORK, SANDBOX, PRODUCTION