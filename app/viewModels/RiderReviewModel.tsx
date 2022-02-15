import React from 'react';
import RiderReviewScreen from '../views/Rider_Review';

interface RiderProps {
  navigation: any;
}

const RiderReviewModel = (props: RiderProps) => {
  const {navigation} = props;
  return <RiderReviewScreen navigation={navigation} />;
};

export default RiderReviewModel;
