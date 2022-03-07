import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface RenderProps {
  item: {
    id: number;
    name: string;
    navigate: string;
    icon: any;
  };
  index: number;
  navigation: any;
}

const RenderItems = (props: RenderProps) => {
  const {item, index, navigation} = props;
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.renderContainer}
        disabled={item.navigate != '' ? false : true}
        onPress={() => navigation.navigate(item.navigate)}>
        <Image source={item.icon} style={styles.Icon} />
        <Text style={styles.NameText}>{item.name}</Text>
      </TouchableOpacity>
      {index != 9 && <View style={styles.line} />}
    </SafeAreaView>
  );
};

export default RenderItems;
