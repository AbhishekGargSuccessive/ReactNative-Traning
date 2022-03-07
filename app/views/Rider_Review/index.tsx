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
import {COLORS, constants, dummyData, icons, images} from '../../constants';
import styles from './styles';

interface RiderProps {
  navigation: any;
}

const RiderReviewScreen = (props: RiderProps) => {
  const {navigation} = props;
  const [select, setSelect] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.RIDER_REVIEW}
        RightImage={undefined}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <View style={styles.midContainer}>
          <Image source={images.profile} style={styles.riderImage} />
          <Text style={styles.nameText}>{constants.keywords.name}</Text>
          <Text style={styles.deliveryManText}>
            {constants.keywords.Delivery_Man}
          </Text>
          <View style={styles.orderContainer}>
            <Image source={icons.dot} style={styles.DotIcon} />
            <Text style={styles.orderDeliverText}>
              {constants.keywords.Order_Delivered}
            </Text>
          </View>
          <Text style={styles.rateText}>{constants.keywords.Please_rate}</Text>
          <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.StarIcon} />
            <Image source={icons.star} style={styles.StarIcon} />
            <Image source={icons.star} style={styles.StarIcon} />
            <Image source={icons.star} style={styles.StarIcon} />
            <Image
              source={icons.star}
              style={[styles.StarIcon, {tintColor: COLORS.lightOrange3}]}
            />
          </View>
        </View>
        <View>
          <Text style={styles.addTipText}>{constants.keywords.Add_Tips}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyData.RiderReview.tips}
            extraData={dummyData.RiderReview}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.RenderContainer,
                    {
                      backgroundColor:
                        select == index ? COLORS.primary : COLORS.white,
                    },
                  ]}
                  onPress={() => setSelect(index)}>
                  <Text
                    style={[
                      styles.itemText,
                      {color: select == index ? COLORS.white : COLORS.gray},
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <TextInput style={styles.textInput} placeholder="Add a comment" />
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.SubmitButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.SubmitButtonText}>
              {constants.keywords.Submit_Review}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RiderReviewScreen;
