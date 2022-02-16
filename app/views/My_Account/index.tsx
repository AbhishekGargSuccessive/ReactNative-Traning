import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {constants, dummyData, icons} from '../../constants';
import RenderItems from './renderItems';
import styles from './styles';

interface AcccountProps {
  navigation: any;
}

const MyAccountScreen = (props: AcccountProps) => {
  const {navigation} = props;
  return (
    <View style={styles.colorcontainer}>
      <View style={styles.marginContainer}>
        <View style={styles.Container}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => navigation.goBack()}>
            <Image source={icons.back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>{constants.keywords.MY_ACCOUNT}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditAccount')}>
            <Text style={styles.editButtonText}>{constants.keywords.Edit}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={dummyData.My_Account}
            extraData={dummyData.My_Account}
            renderItem={({item, index}) => (
              <RenderItems item={item} index={index} select={true} />
            )}
          />
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={dummyData.My_Account_Details}
            extraData={dummyData.My_Account_Details}
            renderItem={({item, index}) => (
              <RenderItems item={item} index={index} select={false} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default MyAccountScreen;
