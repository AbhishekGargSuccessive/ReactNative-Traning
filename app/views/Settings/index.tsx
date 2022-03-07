import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {HeaderComponents} from '../../common';
import {constants, dummyData, icons} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

interface SettingProps {
  navigation: any;
}

const SettingScreen = (props: SettingProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.Settings}
        RightImage={undefined}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.FlatlistContainer}>
        <FlatList
          data={dummyData.settings}
          extraData={dummyData.settings}
          renderItem={({item, index}) => (
            <RenderItems item={item} index={index} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
