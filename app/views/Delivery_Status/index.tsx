import React from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponents} from '../../common';
import {constants, dummyData, icons} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

interface DeliveryProps {
  navigation: any;
}

const DeliveryStatusScreen = (props: DeliveryProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.Delivery_Status}
        RightImage={undefined}
        RightImageNavigate={undefined}
        navigation={navigation}
      />
      <View style={styles.marginConatiner}>
        <Text style={styles.EstimatedText}>{constants.keywords.Estimated}</Text>
        <Text style={styles.DateText}>{constants.keywords.Delivery_Date}</Text>
        <View style={styles.RadiusContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.trackOrderText}>
              {constants.keywords.Track_Order}
            </Text>
            <Text style={styles.IDText}>{constants.keywords.ID}</Text>
          </View>
          <View style={styles.flatList}>
            <FlatList
              data={constants.track_order_status}
              extraData={constants.track_order_status}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => (
                <RenderItems item={item} index={index} />
              )}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.DoneButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.DoneButtonText}>{constants.keywords.Done}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeliveryStatusScreen;
