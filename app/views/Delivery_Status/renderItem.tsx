import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {COLORS, icons} from '../../constants';
import styles from './styles';

interface renderProps {
  item: {
    id: number;
    title: string;
    sub_title: string;
    tick: boolean;
  };
  index: number;
}

const RenderItems = (props: renderProps) => {
  const {item, index} = props;
  return (
    <SafeAreaView style={styles.renderContainer}>
      <View>
        <Image source={icons.check_circle} style={[styles.tickIcon]} />
        {index != 4 && (
          <Image source={icons.dotted_line} style={styles.dottedLine} />
        )}
      </View>
      <View style={styles.renderInnerContainer}>
        <Text style={styles.trackOrderText}>{item.title}</Text>
        <Text style={styles.IDText}>{item.sub_title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default RenderItems;

//{tintColor: item.tick ? COLORS.primary : COLORS.gray2},
