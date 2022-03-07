import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

interface RenderProps {
  item: any;
  index: number;
  select: boolean;
}

const RenderItems = (props: RenderProps) => {
  const {item, index, select} = props;
  return (
    <SafeAreaView
      style={[
        select
          ? index == 2
            ? styles.renderContainer
            : styles.lineContainer
          : select || index == 5
          ? styles.renderContainer
          : styles.lineContainer,
      ]}>
      <Text style={styles.TitleText}>{Object.keys(item)}</Text>
      <Text style={styles.ValueText}>{Object.values(item)}</Text>
    </SafeAreaView>
  );
};

export default RenderItems;
