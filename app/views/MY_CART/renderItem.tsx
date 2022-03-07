import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, icons} from '../../constants';
import styles from './styles';

interface RenderProps {
  item: {
    qty: number;
    id: number;
    name: string;
    description: string;
    categories: number[];
    price: string;
    calories: number;
    isFavourite: boolean;
    image: any;
  };
}

const RenderItem = (props: RenderProps) => {
  const {item} = props;
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView style={styles.renderContainer}>
      <View style={styles.renderInnerContainer}>
        <Image source={item.image} style={styles.foodIcon} />
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => setCounter(counter - 1)}>
          <Image
            source={icons.minus}
            style={[styles.CounterIcons, {tintColor: COLORS.gray}]}
          />
        </TouchableOpacity>
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableOpacity onPress={() => setCounter(counter + 1)}>
          <Image source={icons.plus} style={styles.CounterIcons} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RenderItem;
