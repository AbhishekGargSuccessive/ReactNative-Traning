import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface RenderProps {
  item: {
    name: string;
    navigation: string;
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
        onPress={() => navigation.navigate(item.navigation)}
        disabled={item.navigation != '' ? false : true}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.iconText}>{item.name}</Text>
      </TouchableOpacity>
      {index == 4 && <View style={styles.lineContainer} />}
      {index == 9 && <View style={{marginVertical: '8%'}} />}
    </SafeAreaView>
  );
};

export default RenderItems;
