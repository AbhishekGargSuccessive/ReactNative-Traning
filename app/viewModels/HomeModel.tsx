import React, {useState} from 'react';
import HomeScreen from '../views/Home';

interface HomeModelProps {
  navigation: any;
}

const HomeModel = (props: HomeModelProps) => {
  const {navigation} = props;
  const [filter, setFilter] = useState(false);
  const [select, setSelect] = useState(0);
  const [applyFilter, setApplyFilter] = useState(false);
  const [distance, setDistance] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [price, setPrice] = useState([]);
  const [rating, setRating] = useState(0);

  return (
    <HomeScreen
      navigation={navigation}
      filter={filter}
      setFilter={setFilter}
      select={select}
      setSelect={(value: number) => setSelect(value)}
      applyFilter={applyFilter}
      setApplyFilter={setApplyFilter}
      distance={distance}
      setDistance={setDistance}
      deliveryTime={deliveryTime}
      setDeliveryTime={setDeliveryTime}
      price={price}
      setPrice={setPrice}
      rating={rating}
      setRating={setRating}
    />
  );
};

export default HomeModel;
