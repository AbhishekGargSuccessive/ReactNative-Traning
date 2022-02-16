import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponents, TextInputs} from '../../common';
import {constants, icons} from '../../constants';
import styles from './styles';

interface EditProps {
  navigation: any;
}

const EditAccountScreen = (props: EditProps) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
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
            <View style={{marginHorizontal: 10, paddingTop: 10}}>
              <TextInputs
                name="Full Name"
                onchangeText={() => false}
                setSwitch={() => false}
                Switch={false}
              />
              <TextInputs
                name="Phone Number"
                onchangeText={() => false}
                setSwitch={() => false}
                Switch={false}
              />
              <TextInputs
                name="ID Card"
                onchangeText={() => false}
                setSwitch={() => false}
                Switch={false}
              />
              <TextInputs
                name="Date of Birth"
                onchangeText={() => false}
                setSwitch={() => false}
                Switch={false}
              />
              <TextInputs
                name="Gender"
                onchangeText={() => false}
                setSwitch={() => false}
                Switch={false}
              />
              <TextInputs
                name="Email"
                onchangeText={() => false}
                setSwitch={() => false}
                Switch={false}
              />
              <TextInputs
                name="Address"
                onchangeText={() => false}
                setSwitch={() => false}
                Switch={false}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.SaveButton}>
          <Text style={styles.SaveButtonText}>{constants.keywords.Save}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditAccountScreen;
