import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../constants';
import styles from './styles';

interface RenderProps {
  item: {
    icon: any;
    name: string;
    description: string;
    untilText: string;
    time: string;
  };
}

const RenderItems = (props: RenderProps) => {
  const {item} = props;
  return (
    <SafeAreaView style={styles.renderContainer}>
      <View style={styles.innerRenderContainer}>
        <View style={styles.IconContainer}>
          <Image source={item.icon} style={styles.icon} />
        </View>
        <View style={styles.renderTextContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text style={styles.descriptionText}>{item.untilText}</Text>
          <Text style={styles.TimeText}>{item.time}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image source={icons.three_dots} style={styles.threeDots} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RenderItems;
