import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {icons} from '../../constants';
import styles from './styles';

const RenderHiddenItem = () => {
  return (
    <View style={styles.renderHiddenItem}>
      <TouchableOpacity>
        <Image source={icons.delete_icon} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default RenderHiddenItem;
