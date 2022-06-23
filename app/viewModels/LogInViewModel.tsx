import React, {useRef, useState} from 'react';
import LoginScreen from '../views/logIn/LogInScreen';
import {
  EmailValidation,
  PasswordValidation,
  UsernameValidation,
  ContactValidation,
} from '../config/Validation';

interface LogInViewModel {
  navigation: any;
}

const LogInViewModel = (props: LogInViewModel) => {
  const {navigation} = props;

  const [username, setUsername] = useState('');
  console.log('Username ==>', username);
  const [invalidUsername, setInvalidUsername] = useState(true);

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(true);

  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(true);

  const [number, setNumber] = useState('');
  const [invalidNumber, setInvalidNumber] = useState(true);

  const UsernameRef = useRef(false);
  const EmailRef = useRef(false);
  const PasswordRef = useRef(false);
  const NumberRef = useRef(false);

  const Submit = () => {
    UsernameRef.current = !UsernameValidation(username);
    EmailRef.current = !EmailValidation(email);
    PasswordRef.current = !PasswordValidation(password);
    NumberRef.current = !ContactValidation(number);
    setInvalidUsername(UsernameRef.current);
    setInvalidEmail(EmailRef.current);
    setInvalidPassword(PasswordRef.current);
    setInvalidNumber(NumberRef.current);
    if (
      UsernameRef.current &&
      EmailRef.current &&
      PasswordRef.current &&
      NumberRef.current
    ) {
      navigation.navigate('BookMark');
    }
  };
  return (
    <LoginScreen
      navigation={navigation}

      invalidUsername={invalidUsername}
      invalidEmail={invalidEmail}
      invalidPassword={invalidPassword}
      invalidNumber={invalidNumber}

      setUsername={username => setUsername(username)}
      setEmail={email => setEmail(email)}
      setPassword={password => setPassword(password)}
      setNumber={number => setNumber(number)}
      
      Submit={Submit}
    />
  );
};

export default LogInViewModel;
