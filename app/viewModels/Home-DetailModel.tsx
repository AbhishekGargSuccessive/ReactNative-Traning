import React, {useState} from 'react';
import DetailScreen from '../views/Home-Details';

interface DetailProps {
  navigation: any;
}

const DetailModel = (props: DetailProps) => {
  const {navigation} = props;
  const [counter, setCounter] = useState(1);
  return (
    <DetailScreen
      navigation={navigation}
      counter={counter}
      setCounter={setCounter}
    />
  );
};

export default DetailModel;
