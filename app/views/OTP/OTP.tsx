import React from 'react';
import {Alert, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {HeaderLogo} from '../../common';
import {constants} from '../../constants';
import styles from './styles';

interface OTPScreen {
  navigation: any;
}

const OTPScreen = (props: OTPScreen) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.colorContainer}>
        <HeaderLogo />

        <Text style={styles.OTPText}>{constants.keywords.OTP}</Text>
        <Text style={styles.AuthenticationText}>
          {constants.keywords.Authentication}
        </Text>

        <View style={styles.inputContainer}>
          <TextInput maxLength={1} style={styles.inputText} />
          <TextInput maxLength={1} style={styles.inputText} />
          <TextInput maxLength={1} style={styles.inputText} />
          <TextInput maxLength={1} style={styles.inputText} />
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.AuthenticationText}>
            {constants.keywords.Code}
          </Text>
          <TouchableOpacity>
            <Text style={styles.ResendText}> {constants.keywords.Resend}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.ContinueButton}
            onPress={() => navigation.navigate('Drawer')}>
            <Text style={styles.ContinueButtonText}>
              {constants.keywords.Continue}
            </Text>
          </TouchableOpacity>

          <Text style={styles.AuthenticationText}>
            {constants.keywords.By_Signing_up}
          </Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Please Contact Developer Team!')}>
            <Text style={styles.TermsText}>{constants.keywords.Term}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
