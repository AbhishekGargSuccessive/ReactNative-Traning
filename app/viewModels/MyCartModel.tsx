import React from 'react';
import MyCartScreen from '../views/MY_CART';

interface CartProps {
  navigation: any;
}

const MyCartModel = (props: CartProps) => {
  const {navigation} = props;
  return <MyCartScreen navigation={navigation} />;
};

export default MyCartModel;
