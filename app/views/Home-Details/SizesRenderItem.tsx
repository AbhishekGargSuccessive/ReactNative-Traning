import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

interface SizesProps {
  item: {
    id: number;
    label: string;
  };
  index: number;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

const SizeRenderItem = (props: SizesProps) => {
  const {item, index, size, setSize} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={[
          styles.sizeRenderContainer,
          {backgroundColor: size == index ? COLORS.primary : COLORS.lightGray2},
        ]}
        onPress={() => setSize(index)}>
        <Text
          style={[
            styles.itemText,
            {color: size == index ? COLORS.white : COLORS.gray},
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SizeRenderItem;
