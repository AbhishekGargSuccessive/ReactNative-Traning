import React from 'react';
import MyCardScreen from '../views/MY_CARDS';

interface CardsModel {
  navigation: any;
}

const MyCardsModel = (props: CardsModel) => {
  const {navigation} = props;
  return <MyCardScreen navigation={navigation} />;
};

export default MyCardsModel;
