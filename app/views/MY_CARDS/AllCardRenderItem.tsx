import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, icons} from '../../constants';
import styles from './styles';

interface AllCardProps {
  item: {
    id: number;
    name: string;
    icon: any;
  };
  index: number;
  select: number;
  setSelect: (value: number) => void;
}

const AllCardRenderItems = (props: AllCardProps) => {
  const {item, select, index, setSelect} = props;
  return (
    <TouchableOpacity
      style={[
        styles.renderContainer,
        {borderColor: index == select ? COLORS.primary : COLORS.lightGray2},
      ]}
      onPress={() => setSelect(index)}>
      <View style={styles.innerRenderContainer}>
        <View style={styles.cardIconContainer}>
          <Image source={item.icon} style={styles.CardIcon} />
        </View>
        <Text style={styles.cardText}>{item.name}</Text>
      </View>
      <View>
        {index == select ? (
          <Image source={icons.check_on} style={styles.checkCircle} />
        ) : (
          <Image source={icons.check_off} style={styles.checkCircle} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AllCardRenderItems;
