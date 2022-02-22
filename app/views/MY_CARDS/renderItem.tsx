import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, icons} from '../../constants';
import styles from './styles';

interface renderProps {
  item: {
    id: number;
    name: string;
    icon: any;
    card_no: string;
  };
  index: number;
  select: number;
  setSelect: (item: number) => void;
}

const RenderItems = (props: renderProps) => {
  const {item, index, setSelect, select} = props;
  return (
    <TouchableOpacity
      style={[
        styles.renderContainer,
        {borderColor: item.id == select ? COLORS.primary : COLORS.lightGray2},
      ]}
      onPress={() => setSelect(item.id)}>
      <View style={styles.innerRenderContainer}>
        <View style={styles.cardIconContainer}>
          <Image source={item.icon} style={styles.CardIcon} />
        </View>
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
      <View style={{}}>
        {item.id == select ? (
          <Image source={icons.check_on} style={styles.checkCircle} />
        ) : (
          <Image source={icons.check_off} style={styles.checkCircle} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RenderItems;
