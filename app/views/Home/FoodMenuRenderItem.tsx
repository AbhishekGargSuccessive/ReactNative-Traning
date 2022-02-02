import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {constants, icons} from '../../constants';
import styles from './styles';

interface FoodMenu {
  item: {
    id: number;
    name: string;
    description: string;
    categories: number;
    price: string;
    calories: number;
    isFavourite: boolean;
    image: any;
  };
}

const FoodMennuRenderItem = (props: FoodMenu) => {
  const {item} = props;
  return (
    <View>
      <TouchableOpacity style={styles.FoodContainer}>
        <View style={styles.LoveContainer}>
          <View style={styles.caloriesContainer}>
            <Image source={icons.calories} style={styles.caloriesIcon} />
            <Text style={styles.caloriesText}>
              {item.calories} {constants.keywords.Calories}
            </Text>
          </View>
          <Image source={icons.love} style={styles.LoveIcon} />
        </View>
        <View style={styles.foodImageContainer}>
          <Image source={item.image} style={styles.foodsImages} />
        </View>
        <View style={styles.foodTextConatiner}>
          <Text style={styles.burgerText}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FoodMennuRenderItem;
