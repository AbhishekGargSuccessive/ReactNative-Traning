import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, icons} from '../../constants';
import styles from './styles';

interface RenderProps {
  item: {
    name: string;
    discount: string;
    valid: string;
    icon: any;
  };
}

const RenderItems = (props: RenderProps) => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.renderContainer}>
      <View style={styles.LogoContainer}>
        <Image source={item.icon} style={styles.logo} />
        <Image
          source={icons.dotted_line}
          style={[styles.logo2, {tintColor: COLORS.white}]}
        />
      </View>
      <View>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.discountText}>{item.discount}</Text>
        <Text style={styles.validText}>{item.valid}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItems;
