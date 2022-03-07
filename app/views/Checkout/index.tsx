import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderComponents} from '../../common';
import {COLORS, constants, dummyData, icons} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

interface CheckoutProps {
  navigation: any;
  select: number;
  setSelect: (value: number) => void;
}

const CheckoutScreen = (props: CheckoutProps) => {
  const {navigation, select, setSelect} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.Checkout}
        RightImage={undefined}
        RightImageNavigate={undefined}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyData.myCards}
          extraData={dummyData.myCards}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <RenderItems
              item={item}
              index={index}
              select={select}
              setSelect={setSelect}
            />
          )}
        />
        <View>
          <Text style={styles.titleText}>
            {constants.keywords.Delivery_Address}
          </Text>
          <TouchableOpacity>
            <View style={styles.deliveryAddressContainer}>
              <Image source={icons.focus} style={styles.focusIcon} />
              <Text style={styles.addressText}>
                {constants.keywords.Address}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{constants.keywords.Add_Coupon}</Text>
          <View style={styles.couponContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Coupon Code"
              placeholderTextColor={COLORS.gray}
            />
            <TouchableOpacity style={styles.discountIconContainer}>
              <Image source={icons.discount} style={styles.discountIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <Text style={styles.totalpriceText}>
            {constants.keywords.SubTotal}
          </Text>
          <Text style={styles.priceValueText}>$37.97</Text>
        </View>
        <View style={styles.modalInnerContainer}>
          <Text style={styles.totalpriceText}>
            {constants.keywords.Shipping_fee}
          </Text>
          <Text style={styles.priceValueText}>$0.00</Text>
        </View>
        <View style={styles.lineView}>
          <View style={styles.modalSecondInnerContainer}>
            <Text style={styles.totalText}>{constants.keywords.total}</Text>
            <Text style={styles.totalValueText}>$37.97</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.OrderButton}
          onPress={() => navigation.navigate('Success')}>
          <Text style={styles.OrderButtonText}>{constants.keywords.Place}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
