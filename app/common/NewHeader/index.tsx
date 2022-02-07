import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {icons, constants} from '../../constants';
import styles from './styles';

interface BackProps {
  navigation: any;
  HeaderText: string;
}

const NewHeader = (props: BackProps) => {
  const {navigation, HeaderText} = props;
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.goBack()}>
        <Image source={icons.back} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{HeaderText}</Text>
    </View>
  );
};

export default NewHeader;
