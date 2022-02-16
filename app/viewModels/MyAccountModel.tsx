import React from 'react';
import MyAccountScreen from '../views/My_Account';

interface AcccountProps {
  navigation: any;
}

const MyAccountModel = (props: AcccountProps) => {
  const {navigation} = props;
  return <MyAccountScreen navigation={navigation} />;
};

export default MyAccountModel;
