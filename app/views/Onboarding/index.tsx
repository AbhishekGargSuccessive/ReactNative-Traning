import React from 'react';
import styles from './styles';
import {View, FlatList, SafeAreaView} from 'react-native';
import {constants} from '../../constants/index';
import RenderItem from './renderItem';

interface OnboardingProps {
  navigation: any;
  flatRef: React.MutableRefObject<any>;
  scrollTo: (data: any) => void;
}

const OnboardingScreen = (props: OnboardingProps) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        data={constants.onboarding_screens}
        extraData={constants.onboarding_screens}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <RenderItem
            data={item}
            maxIndex={constants.onboarding_screens.length - 1}
            scrollTo={(item: number) => props.scrollTo(item)}
            index={index}
            navigation={navigation}
          />
        )}
        ref={props.flatRef}
      />
    </SafeAreaView>
  );
};
export default OnboardingScreen;
