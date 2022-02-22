import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyAccountScreen from '../views/My_Account';

interface AcccountProps {
  navigation: any;
}

const MyAccountModel = (props: AcccountProps) => {
  const {navigation} = props;
  const dispatch=useDispatch();
  return <MyAccountScreen navigation={navigation} />;
};

export default MyAccountModel;
