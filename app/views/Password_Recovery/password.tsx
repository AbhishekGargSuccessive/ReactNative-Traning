import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {HeaderLogo, TextInputs} from '../../common';
import {constants} from '../../constants';
import styles from './styles';

interface PasswordProps {
  navigation: any;
}

const PasswordScreen = (props: PasswordProps) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        <HeaderLogo />
        <Text style={styles.PasswordText}>
          {constants.keywords.Password_Recovery}
        </Text>
        <Text style={styles.emailaddressText}>{constants.keywords.Please}</Text>
        <View style={styles.inputContainer}>
          <TextInputs
            name="Email"
            Switch={false}
            setSwitch={() => false}
            onchangeText={() => false}
            placeholder={''}
            placeholderTextColor={undefined}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.SendemailButton}
            onPress={() => navigation.navigate('OTP')}>
            <Text style={styles.SendemailButtonText}>
              {constants.keywords.Send_Email}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PasswordScreen;
