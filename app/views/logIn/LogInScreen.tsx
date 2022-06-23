import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {TextInputs, TextInputPassword} from '../../common';
import styles from './styles';

interface SignIn {
  navigation: any;
  invalidUsername: boolean;
  invalidEmail: boolean;
  invalidPassword: boolean;
  invalidNumber: boolean;
  setUsername: (text: string) => void;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
  setNumber: (number: any) => void;
  Submit: () => void;
}

const LoginScreen = (props: SignIn) => {
  const {
    navigation,
    invalidUsername,
    invalidEmail,
    invalidPassword,
    invalidNumber,
    setUsername,
    setEmail,
    setPassword,
    setNumber,
    Submit,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>LOGIN</Text>
        </View>
        <TextInputs
          name="Email"
          Switch={!invalidEmail}
          onchangeText={email => setEmail(email)}
          placeholder={''}
          placeholderTextColor={undefined}
        />

        <TextInputs
          name="Username"
          Switch={!invalidUsername}
          onchangeText={username => setUsername(username)}
          placeholder={''}
          placeholderTextColor={undefined}
        />

        <TextInputs
          name="Contact"
          Switch={!invalidNumber}
          onchangeText={Number => setNumber(Number)}
          placeholder={''}
          placeholderTextColor={undefined}
        />

        <TextInputPassword
          name="Password"
          Switch={!invalidPassword}
          onchangeText={password => setPassword(password)}
        />

        <TouchableOpacity style={styles.SignInButton} onPress={() => Submit()}>
          <Text style={styles.SignInButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
