import React, {useState} from 'react';
import MyOrderScreen from '../views/My_Orders';

interface OrderProps {
  navigation: any;
}

const MyOrdersModel = (props: OrderProps) => {
  const {navigation} = props;
  const [select, setSelect] = useState(true);
  return (
    <MyOrderScreen
      navigation={navigation}
      select={select}
      setSelect={setSelect}
    />
  );
};

export default MyOrdersModel;
