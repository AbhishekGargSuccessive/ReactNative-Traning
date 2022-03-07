import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {constants, icons, SIZES} from '../../constants';
import styles from './styles';

interface FooterProps {
  item: {
    id: number;
    name: string;
    description: string;
    categories: number;
    price: string;
    calories: number;
    isFavourite: boolean;
    rating: number;
    delivery_time: string;
    distance: number;
    pricing: number;
    image: any;
  };
}

const FooterFoodMenu = (props: FooterProps) => {
  const {item} = props;
  return (
    <SafeAreaView>
      <View style={styles.FooterContainer}>
        <Image source={item.image} style={styles.footerfoodsImages} />
        <View>
          <Text style={styles.footerburgerText}>{item.name}</Text>
          <Text style={styles.footerdescriptionText}>{item.description}</Text>
          <Text style={styles.footerpriceText}>{item.price}</Text>
        </View>
        <View style={styles.footercaloriescontainer}>
          <Image source={icons.calories} style={styles.caloriesIcon} />
          <Text style={styles.caloriesText}>
            {item.calories} {constants.keywords.Calories}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FooterFoodMenu;
