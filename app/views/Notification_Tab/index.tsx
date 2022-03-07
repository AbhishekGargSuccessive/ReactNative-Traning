import React from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';
import {HeaderComponents} from '../../common';
import {useSelector} from 'react-redux';
import {constants, dummyData, icons, images} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

interface Props {
  navigation: any;
}

const NotificationTabScreen = (props: Props) => {
  const {navigation} = props;
  type state = {
    Profile: string;
  };
  const ProfileImage = useSelector<state>(state => state.Profile);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.menu}
        LeftImageNavigate={navigation.openDrawer}
        HeadingText={constants.keywords.Notification}
        RightImage={ProfileImage}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <SectionList
          sections={dummyData.Notification_Tab}
          extraData={dummyData.Notification_Tab}
          renderItem={({item, index}) => <RenderItems item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.TitleText}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationTabScreen;
