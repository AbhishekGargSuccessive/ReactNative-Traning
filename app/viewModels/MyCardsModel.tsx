import React, {useState} from 'react';
import MyCardScreen from '../views/MY_CARDS';

interface CardsModel {
  navigation: any;
}

const MyCardsModel = (props: CardsModel) => {
  const {navigation} = props;
  const [select, setSelect] = useState(1);
  return (
    <MyCardScreen
      navigation={navigation}
      select={select}
      setSelect={(value: number) => setSelect(value)}
    />
  );
};

export default MyCardsModel;
