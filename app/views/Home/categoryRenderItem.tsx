import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface Category {
  item: {
    id: number;
    name: string;
    icon: any;
  };
}

const CategoryRenderItem = (props: Category) => {
  const {item} = props;
  return (
    <View>
      <TouchableOpacity style={styles.foodContainer}>
        <Image source={item.icon} style={styles.foodIcons} />
        <Text style={styles.foodText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryRenderItem;
