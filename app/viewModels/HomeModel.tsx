import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {dummyData} from '../constants';
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

  let filterData = dummyData.menu;

  if (distance.length != 0) {
    filterData = filterData.filter(
      key => key.distance > distance[0] && key.distance < distance[1],
    );
  }

  if (deliveryTime != '') {
    filterData = filterData.filter(key => key.delivery_time == deliveryTime);
  }

  if (price.length != 0) {
    filterData = filterData.filter(
      key => key.pricing > price[0] && key.pricing < price[1],
    );
  }

  if (rating != 0) {
    filterData = filterData.filter(key => key.rating == rating);
  }

  const selectData = dummyData.menu.filter(data => data.categories == select);
  type state = {
    Profile: string;
  };
  const ProfileImage = useSelector<state>(state => state.Profile);

  const ResetFilter = () => {
    setApplyFilter(false),
      setDeliveryTime(''),
      setDistance([]),
      setPrice([]),
      setRating(0);
  };
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
      filterData={filterData}
      selectData={selectData}
      ProfileImage={ProfileImage}
      ResetFilter={ResetFilter}
    />
  );
};

export default HomeModel;
