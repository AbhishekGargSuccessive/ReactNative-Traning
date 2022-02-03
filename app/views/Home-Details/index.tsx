import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {constants, dummyData, icons, images} from '../../constants';
import SizeRenderItem from './SizesRenderItem';
import styles from './styles';

interface DetailProps {
  navigation: any;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const DetailScreen = (props: DetailProps) => {
  const {navigation, counter, setCounter} = props;
  return (
    <View style={styles.backcontainer}>
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.detailText}>{constants.keywords.Details}</Text>
        <TouchableOpacity style={styles.cartButtonContainer}>
          <Image source={icons.cart} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{marginHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.FoodContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.caloriesContainer}>
              <Image source={icons.calories} style={styles.caloriesIcon} />
              <Text style={styles.caloriesText}>
                78 {constants.keywords.Calories}
              </Text>
            </View>
            <Image source={icons.love} style={styles.loveIcon} />
          </View>
          <Image source={images.hamburger} style={styles.burgerIcon} />
        </View>
        <Text style={styles.foodNameText}>{constants.keywords.Hamburger}</Text>
        <Text style={styles.burgerText}>
          {dummyData.vegBiryani.description}
        </Text>
        <View style={styles.midContainer}>
          <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.starIcon} />
            <Text style={styles.starText}>{constants.keywords.rating}</Text>
          </View>
          <View style={styles.clockContainer}>
            <Image source={icons.clock} style={styles.ClockIcon} />
            <Text style={styles.minText}>30 Mins</Text>
            <Image source={icons.dollar} style={styles.ClockIcon} />
            <Text style={styles.minText}>
              {constants.keywords.Free_Shipping}
            </Text>
          </View>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>{constants.keywords.Sizes}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyData.sizes}
            extraData={dummyData.sizes}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <SizeRenderItem item={item} index={index} />
            )}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image source={images.profile} style={styles.profileIcon} />
          <View style={styles.NameContainer}>
            <Text style={styles.nameText}>{constants.keywords.name}</Text>
            <Text style={styles.caloriesText}>{constants.keywords.KM}</Text>
          </View>
          <Image source={icons.star} style={styles.goldStarIcon} />
          <Image source={icons.star} style={styles.goldStarIcon} />
          <Image source={icons.star} style={styles.goldStarIcon} />
          <Image source={icons.star} style={styles.goldStarIcon} />
          <Image source={icons.star} style={styles.goldStarIcon} />
        </View>
      </ScrollView>
      <View style={styles.buynowContainer}>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => setCounter(counter - 1)}>
            <Image source={icons.minus} style={styles.CounterIcons} />
          </TouchableOpacity>
          <Text style={styles.counterText}>{counter}</Text>
          <TouchableOpacity onPress={() => setCounter(counter + 1)}>
            <Image source={icons.plus} style={styles.CounterIcons} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyNowText}>{constants.keywords.Buy_Now}</Text>
          <Text style={styles.buyNowText}>{dummyData.hamburger.price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
