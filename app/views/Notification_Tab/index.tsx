import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderComponents} from '../../common';
import {constants, dummyData, icons, images} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

interface Props {
  navigation: any;
}

const NotificationTabScreen = (props: Props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <HeaderComponents
        LeftImage={icons.menu}
        LeftImageNavigate={navigation.openDrawer}
        HeadingText={constants.keywords.Notification}
        RightImage={images.profile}
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
    </View>
  );
};

export default NotificationTabScreen;
