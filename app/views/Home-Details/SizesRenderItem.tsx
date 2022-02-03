import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

interface SizesProps {
  item: {
    id: number;
    label: string;
  };
  index: number;
}

const SizeRenderItem = (props: SizesProps) => {
  const [size, setSize] = useState(0);
  const {item, index} = props;
  return (
    <View>
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
    </View>
  );
};

export default SizeRenderItem;
