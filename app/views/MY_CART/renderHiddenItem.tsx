import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {icons} from '../../constants';
import styles from './styles';

const RenderHiddenItem = () => {
  return (
    <SafeAreaView style={styles.renderHiddenItem}>
      <TouchableOpacity>
        <Image source={icons.delete_icon} style={styles.deleteIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RenderHiddenItem;
