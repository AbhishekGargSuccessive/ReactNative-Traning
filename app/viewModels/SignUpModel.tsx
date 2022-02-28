import React, {useRef, useState} from 'react';
import SignUpScreen from '../views/SignUp/SignUp';
import {
  EmailValidation,
  UsernameValidation,
  PasswordValidation,
} from '../config/validation';

interface SignUpModel {
  navigation: any;
}

const SignUpModel = (props: SignUpModel) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [username, setUsername] = useState('');
  const [invalidUsername, setInvalidUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);

  const EmailRef = useRef(false);
  const UsernameRef = useRef(false);
  const PasswordRef = useRef(false);

  const Submit = () => {
    EmailRef.current = !EmailValidation(email);
    UsernameRef.current = !UsernameValidation(username);
    PasswordRef.current = !PasswordValidation(password);
    setInvalidEmail(EmailRef.current);
    setInvalidUsername(UsernameRef.current);
    setInvalidPassword(PasswordRef.current);
    if (EmailRef.current && UsernameRef && PasswordRef.current) {
      navigation.navigate('Drawer');
    }
  };
  return (
    <SignUpScreen
      navigation={navigation}
      email={email}
      username={username}
      password={password}
      invalidEmail={invalidEmail}
      invalidUsername={invalidUsername}
      invalidPassword={invalidPassword}
      setEmail={email => setEmail(email)}
      setUsername={username => setUsername(username)}
      setPassword={password => setPassword(password)}
      Submit={Submit}
    />
  );
};

export default SignUpModel;
