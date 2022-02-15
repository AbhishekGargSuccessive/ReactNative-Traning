import React, {useState} from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponents} from '../../common';
import {COLORS, constants, dummyData, icons, images} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

interface OrderProps {
  navigation: any;
}

const MyOrderScreen = (props: OrderProps) => {
  const {navigation} = props;
  const [select, setSelect] = useState(true);
  return (
    <View style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.MY_ORDERS}
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
              {constants.keywords.History}
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
              {constants.keywords.Upcoming}
            </Text>
          </TouchableOpacity>
        </View>
        {select && (
          <View style={styles.SectionListContainer}>
            <SectionList
              showsVerticalScrollIndicator={false}
              sections={dummyData.My_Order_History}
              extraData={dummyData.My_Order_History}
              renderItem={({item, index}) => <RenderItems item={item} select={true}/>}
              renderSectionHeader={({section: {title}}) => (
                <Text style={styles.TitleText}>{title}</Text>
              )}
            />
          </View>
        )}
        {!select && (
          <View style={styles.SectionListContainer}>
            <SectionList
              showsVerticalScrollIndicator={false}
              sections={dummyData.My_Order_Upcoming}
              extraData={dummyData.My_Order_Upcoming}
              renderItem={({item, index}) => <RenderItems item={item} select={true} />}
              renderSectionHeader={({section: {title}}) => (
                <Text
                  style={[styles.TitleText, {color: COLORS.transparentBlack7}]}>
                  {title}
                </Text>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default MyOrderScreen;
