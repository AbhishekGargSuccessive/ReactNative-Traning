import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackHeader} from '../../common';
import {COLORS, constants, dummyData, icons} from '../../constants';
import RenderItem from './renderItem';
import RenderHiddenItem from './renderHiddenItem';
import {SwipeListView} from 'react-native-swipe-list-view';
import styles from './styles';

interface CartProps {
  navigation: any;
}

const MyCartScreen = (props: CartProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader
        navigation={navigation}
        HeaderText={constants.keywords.My_Cart}
        SecondImage={icons.cart}
      />
      <View style={styles.swipeListContainer}>
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={dummyData.myCart}
          renderItem={({item}) => <RenderItem item={item} />}
          renderHiddenItem={({item}) => <RenderHiddenItem />}
          leftOpenValue={0}
          rightOpenValue={-70}
        />
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
          onPress={() => navigation.navigate('MyCards')}>
          <Text style={styles.OrderButtonText}>{constants.keywords.Place}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyCartScreen;
