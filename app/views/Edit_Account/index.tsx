import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponents, TextInputs} from '../../common';
import {constants, icons} from '../../constants';
import styles from './styles';

interface EditProps {
  navigation: any;
}

const EditAccountScreen = (props: EditProps) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.MY_ACCOUNT}
        RightImage={undefined}
        RightImageNavigate={undefined}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.RadiusContainer}>
            <View style={styles.textInputContainer}>
              <TextInputs
                name="Full Name"
                onchangeText={() => false}
                Switch={false}
                placeholder={'Alex'}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Phone Number"
                onchangeText={() => false}
                Switch={false}
                placeholder={'8923735637'}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="ID Card"
                onchangeText={() => false}
                Switch={false}
                placeholder={'ST/SD/21/820'}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Date of Birth"
                onchangeText={() => false}
                Switch={false}
                placeholder={'26/02/1999'}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Gender"
                onchangeText={() => false}
                Switch={false}
                placeholder={'Male'}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Email"
                onchangeText={() => false}
                Switch={false}
                placeholder={'alex123@gmail.com'}
                placeholderTextColor={'black'}
              />
              <TextInputs
                name="Address"
                onchangeText={() => false}
                Switch={false}
                placeholder={'E-29, Budh Vihar, Noida'}
                placeholderTextColor={'black'}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.SaveButton}>
          <Text style={styles.SaveButtonText}>{constants.keywords.Save}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditAccountScreen;
