import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

interface Category {
  item: {
    id: number;
    name: string;
    icon: any;
  };
  index: number;
  select: number;
  setSelect: (value: number) => void;
}

const CategoryRenderItem = (props: Category) => {
  const {item, index, select, setSelect} = props;

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.foodContainer,
          {
            backgroundColor:
              index == select ? COLORS.primary : COLORS.lightGray2,
          },
        ]}
        onPress={() => setSelect(index)}>
        <Image source={item.icon} style={styles.foodIcons} />
        <Text
          style={[
            styles.foodText,
            {color: select == index ? COLORS.white : COLORS.darkGray},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryRenderItem;
