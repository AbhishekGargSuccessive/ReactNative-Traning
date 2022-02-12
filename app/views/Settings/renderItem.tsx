import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface RenderProps {
  item: {
    id: number;
    name: string;
    navigate: string;
    icon: any;
  };
  index: number;
}

const RenderItems = (props: RenderProps) => {
  const {item, index} = props;
  return (
    <View>
      <TouchableOpacity style={styles.renderContainer}>
        <Image source={item.icon} style={styles.Icon} />
        <Text style={styles.NameText}>{item.name}</Text>
      </TouchableOpacity>
      {index != 9 && <View style={styles.line} />}
    </View>
  );
};

export default RenderItems;
