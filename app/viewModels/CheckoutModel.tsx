import React from 'react';
import CheckoutScreen from '../views/Checkout';

interface CheckoutProps {
  navigation: any;
}

const CheckoutModel = (props: CheckoutProps) => {
  const {navigation} = props;
  return <CheckoutScreen navigation={navigation} />;
};

export default CheckoutModel;
