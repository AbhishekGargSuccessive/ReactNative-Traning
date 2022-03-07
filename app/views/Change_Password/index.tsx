import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponents, TextPasswords} from '../../common';
import {constants, icons} from '../../constants';
import styles from './styles';

interface Props {
  navigation: any;
}

const ChangePasswordScreen = (props: Props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponents
        LeftImage={icons.back}
        LeftImageNavigate={navigation.goBack}
        HeadingText={constants.keywords.CHNAGE_PASSWORD}
        RightImage={undefined}
        RightImageNavigate={false}
        navigation={navigation}
      />
      <View style={styles.marginContainer}>
        <View style={styles.inputContainer}>
          <TextPasswords
            name="Current Password"
            onchangeText={() => false}
            Switch={false}
          />
          <TextPasswords
            name="New Password"
            onchangeText={() => false}
            Switch={false}
          />
          <TextPasswords
            name="Retype New Password"
            onchangeText={() => false}
            Switch={false}
          />
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.PasswordButton}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.PasswordButtonText}>
            {constants.keywords.Change_Password}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
