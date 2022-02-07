import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {NewHeader} from '../../common';
import {constants, dummyData} from '../../constants';
import AllCardRenderItems from './AllCardRenderItem';
import RenderItems from './renderItem';
import styles from './styles';

interface CardProps {
  navigation: any;
}

const MyCardScreen = (props: CardProps) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <NewHeader
        navigation={navigation}
        HeaderText={constants.keywords.My_Cards}
      />
      <View style={styles.marginContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyData.myCards}
          extraData={dummyData.myCards}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => <RenderItems item={item} />}
        />
        <Text style={styles.AddText}>{constants.keywords.Add_new_card}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyData.allCards}
          extraData={dummyData.allCards}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => <AllCardRenderItems item={item} />}
        />

        <TouchableOpacity
          style={styles.AddButton}
          onPress={() => navigation.navigate('AddNewCard')}>
          <Text style={styles.AddButtonText}>{constants.keywords.Add}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCardScreen;
