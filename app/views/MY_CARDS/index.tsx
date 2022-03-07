import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderComponents} from '../../common';
import {constants, dummyData, icons} from '../../constants';
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
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.My_Cards}
        RightImage={undefined}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.marginContainer}>
          {dummyData.myCards.map((item, index) => {
            return (
              <RenderItems
                item={item}
                index={index}
                select={select}
                setSelect={setSelect}
                key={index}
              />
            );
          })}
          <Text style={styles.AddText}>{constants.keywords.Add_new_card}</Text>
          {dummyData.allCards.map((item, index) => {
            return (
              <RenderItems
                item={item}
                index={index}
                select={select}
                setSelect={setSelect}
                key={index}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.AddButton}
        onPress={() => navigation.navigate('AddNewCard')}>
        <Text style={styles.AddButtonText}>{constants.keywords.Add}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyCardScreen;
