import React from 'react';
import {Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-animatable';
import {HeaderLogo, TextInputs, TextPasswords} from '../../common';
import {constants, icons} from '../../constants';
import styles from './styles';

interface SignUp {
  navigation: any;
  email: string;
  password: string;
  username: string;
  invalidEmail: boolean;
  invalidUsername: boolean;
  invalidPassword: boolean;
  setEmail: (text: string) => void;
  setUsername: (text: string) => void;
  setPassword: (text: string) => void;
  Submit: () => void;
}

const SignUpScreen = (props: SignUp) => {
  const {
    navigation,
    email,
    username,
    password,
    invalidEmail,
    invalidUsername,
    invalidPassword,
    setEmail,
    setUsername,
    setPassword,
    Submit,
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <HeaderLogo />

      <ScrollView
        style={styles.margincontainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.startedText}>
          {constants.keywords.Getting_Started}
        </Text>
        <Text style={styles.createText}>{constants.keywords.Create}</Text>

        <View style={styles.ScrollContainer}>
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
          <TextPasswords
            name="Password"
            Switch={!invalidPassword}
            onchangeText={password => setPassword(password)}
          />

          <TouchableOpacity
            style={styles.SignUpButton}
            onPress={() => Submit()}>
            <Text style={styles.SignUpButtonText}>
              {constants.keywords.SignUp}
            </Text>
          </TouchableOpacity>

          <View style={styles.TextContainer}>
            <Text style={styles.createText}>
              {constants.keywords.Already_Account}{' '}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.SignInText}>{constants.keywords.SignIn}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.facebookButton}>
            <Image source={icons.fb} style={styles.icons} />
            <Text style={styles.facebookButtonText}>
              {constants.keywords.Facebook}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.GoogleButton}>
            <Image source={icons.google} style={styles.icons} />
            <Text style={styles.GoogleButtonText}>
              {constants.keywords.Google}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
