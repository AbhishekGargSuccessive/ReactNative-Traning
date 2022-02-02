import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {icons, constants, images} from '../../constants';
import styles from './styles';

const HeaderComponents = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.menuIcon}>
        <Image source={icons.menu} />
      </TouchableOpacity>
      <Text style={styles.homeText}>{constants.keywords.Home}</Text>
      <TouchableOpacity style={styles.profileIconRadius}>
        <Image source={images.profile} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponents;
