import React from 'react';
import MyOrderScreen from '../views/My_Orders';

interface OrderProps {
  navigation: any;
}

const MyOrdersModel = (props: OrderProps) => {
  const {navigation} = props;
  return <MyOrderScreen navigation={navigation} />;
};

export default MyOrdersModel;
