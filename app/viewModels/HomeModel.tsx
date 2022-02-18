import React, {useState} from 'react';
import HomeScreen from '../views/Home';

interface HomeModelProps {
  navigation: any;
}

const HomeModel = (props: HomeModelProps) => {
  const {navigation} = props;
  const [filter, setFilter] = useState(false);
  const [select, setSelect] = useState(0);
  return (
    <HomeScreen
      navigation={navigation}
      filter={filter}
      setFilter={setFilter}
      select={select}
      setSelect={(value: number) => setSelect(value)}
    />
  );
};

export default HomeModel;
