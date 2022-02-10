import React from 'react';
import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {constants, dummyData, icons, images} from '../../constants';
import RenderItems from './renderItem';
import styles from './styles';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Image source={icons.cross} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.upperContainer}>
        <Image source={images.profile} style={styles.profileIcon} />
        <View>
          <Text style={styles.nameText}>{constants.keywords.name}</Text>
          <TouchableOpacity>
            <Text style={styles.profileText}>
              {constants.keywords.View_your_profile}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={dummyData.drawer}
        extraData={dummyData.drawer}
        renderItem={({item, index}) => (
          <RenderItems
            item={item}
            index={index}
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
};

export default CustomDrawer;
