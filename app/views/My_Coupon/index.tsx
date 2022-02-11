import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponents} from '../../common';
import {COLORS, constants, dummyData, icons, images} from '../../constants';
import Renderitems from './renderItem';
import styles from './styles';

interface RiderProps {
  navigation: any;
}

const MyCouponScreen = (props: RiderProps) => {
  const {navigation} = props;
  const [select, setSelect] = useState(true);
  return (
    <View style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.MyCoupon}
        RightImage={images.profile}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={[
              styles.Button,
              {backgroundColor: select ? COLORS.primary : COLORS.lightOrange2},
            ]}
            onPress={() => setSelect(true)}>
            <Text
              style={[
                styles.ButtonText,
                {color: select ? COLORS.white : COLORS.primary},
              ]}>
              {constants.keywords.Available}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Button,
              {backgroundColor: !select ? COLORS.primary : COLORS.lightOrange2},
            ]}
            onPress={() => setSelect(false)}>
            <Text
              style={[
                styles.ButtonText,
                {color: !select ? COLORS.white : COLORS.primary},
              ]}>
              {constants.keywords.Used}
            </Text>
          </TouchableOpacity>
        </View>
        {select && (
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dummyData.available_coupon}
              extraData={dummyData.available_coupon}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => <Renderitems item={item} />}
            />
          </View>
        )}
        {!select && (
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={dummyData.used_coupon}
              extraData={dummyData.used_coupon}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => <Renderitems item={item} />}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default MyCouponScreen;
