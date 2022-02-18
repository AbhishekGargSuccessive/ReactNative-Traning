import React, {useState} from 'react';
import {
  FlatList,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderComponents} from '../../common';
import {constants, dummyData, icons} from '../../constants';
import AllCardRenderItems from './AllCardRenderItem';
import RenderItems from './renderItem';
import styles from './styles';

interface CardProps {
  navigation: any;
  select: number;
  setSelect: (value: number) => void;
}

const MyCardScreen = (props: CardProps) => {
  const {navigation, select, setSelect} = props;
  return (
    <View style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.My_Cards}
        RightImage={undefined}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyData.myCards}
          extraData={dummyData.myCards}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => <RenderItems item={item} />}
        />
        <Text style={styles.AddText}>{constants.keywords.Add_new_card}</Text> */}
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={dummyData.allCards}
          extraData={dummyData.allCards}
          keyExtractor={(_, index) => index.toString()}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.AddText}>{title}</Text>
          )}
          renderItem={({item, index}) => (
            <AllCardRenderItems
              item={item}
              index={index}
              select={select}
              setSelect={setSelect}
            />
          )}
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
