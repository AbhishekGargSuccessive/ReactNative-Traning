import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {icons, constants, images} from '../../constants';
import styles from './styles';

interface HeaderProps {
  LeftImage: any;
  LeftImageNavigate: any;
  HeadingText: any;
  RightImage: any;
  RightImageNavigate: any;
  navigation: any;
}

const HeaderComponents = (props: HeaderProps) => {
  const {
    LeftImage,
    LeftImageNavigate,
    HeadingText,
    RightImage,
    RightImageNavigate,
    navigation,
  } = props;
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={[styles.menuIcon, {borderWidth: LeftImage != '' ? 1 : 0}]}
        disabled={LeftImageNavigate != '' ? false : true}
        onPress={() => LeftImageNavigate()}>
        <Image source={LeftImage} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.homeText}>{HeadingText}</Text>
      <TouchableOpacity
        style={styles.profileIconRadius}
        disabled={RightImageNavigate != '' ? false : true}
        onPress={() =>
          RightImageNavigate != ''
            ? navigation.navigate(RightImageNavigate)
            : ''
        }>
        <Image source={RightImage} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponents;
