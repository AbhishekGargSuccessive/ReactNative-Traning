import React from 'react';
import {FlatList, View} from 'react-native';
import {HeaderComponents} from '../../common';
import {constants, dummyData, icons} from '../../constants';
import RenderItems from './renderItem';
import styles from './stylels';

interface Props {
  navigation: any;
}

const NotificationScreen = (props: Props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.Notification}
        RightImage={undefined}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.marignContainer}>
        <FlatList
          data={dummyData.Notification}
          extraData={dummyData.Notification}
          renderItem={({item, index}) => <RenderItems item={item} />}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;
