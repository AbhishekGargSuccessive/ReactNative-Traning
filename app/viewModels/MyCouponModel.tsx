import React from 'react';
import MyCouponScreen from '../views/My_Coupon';

interface CouponModel {
  navigation: any;
}

const MyCouponModel = (props: CouponModel) => {
  const {navigation} = props;
  return <MyCouponScreen navigation={navigation} />;
};

export default MyCouponModel;
