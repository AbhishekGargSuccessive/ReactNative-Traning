import React, {useRef, useState} from 'react';
import SignIn from '../views/SignIn/SignIn';
import {EmailValidation, PasswordValidation} from '../config/validation';

interface SignInModel {
  navigation: any;
}

const SignInModel = (props: SignInModel) => {
  const {navigation} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(true);

  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(true);

  const EmailRef = useRef(false);
  const PasswordRef = useRef(false);

  const Submit = () => {
    EmailRef.current = !EmailValidation(email);
    PasswordRef.current = !PasswordValidation(password);
    setInvalidEmail(EmailRef.current);
    setInvalidPassword(PasswordRef.current);
    if (EmailRef.current && PasswordRef.current) {
      navigation.navigate('Drawer');
    }
  };
  return (
    <SignIn
      navigation={navigation}
      isEnabled={isEnabled}
      toggleSwitch={toggleSwitch}
      email={email}
      password={password}
      invalidEmail={invalidEmail}
      invalidPassword={invalidPassword}
      setEmail={email => setEmail(email)}
      setPassword={password => setPassword(password)}
      Submit={Submit}
    />
  );
};

export default SignInModel;
