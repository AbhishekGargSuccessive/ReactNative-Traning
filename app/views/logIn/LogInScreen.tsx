import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {TextInputs, TextInputPassword} from '../../common';
import styles from './styles';

interface SignIn {
  navigation: any;
  username: string;
  email: string;
  password: string;
  invalidUsername: boolean;
  invalidEmail: boolean;
  invalidPassword: boolean;
  setUsername: (text: string) => void;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
  Submit: () => void;
}

const LoginScreen = (props: SignIn) => {
  const {
    navigation,
    // isEnabled,
    username,
    email,
    password,
    invalidUsername,
    invalidEmail,
    invalidPassword,
    setUsername,
    setEmail,
    setPassword,
    Submit,
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
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
