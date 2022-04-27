import React, {useRef, useState} from 'react';
import LoginScreen from '../views/logIn/LogInScreen';
import {
  EmailValidation,
  PasswordValidation,
  UsernameValidation,
} from '../config/Validation';

interface LogInViewModel {
  navigation: any;
}

const LogInViewModel = (props: LogInViewModel) => {
  const {navigation} = props;

  const [username, setUsername] = useState('');
  const [invalidUsername, setInvalidUsername] = useState(true);

  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(true);

  const [password, setPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(true);

  const UsernameRef = useRef(false);
  const EmailRef = useRef(false);
  const PasswordRef = useRef(false);

  const Submit = () => {
    UsernameRef.current = !UsernameValidation(username);
    EmailRef.current = !EmailValidation(email);
    PasswordRef.current = !PasswordValidation(password);
    setInvalidUsername(UsernameRef.current);
    setInvalidEmail(EmailRef.current);
    setInvalidPassword(PasswordRef.current);
    if (UsernameRef.current && EmailRef.current && PasswordRef.current) {
      navigation.navigate('BookMark');
    }
  };
  return (
    <LoginScreen
      navigation={navigation}
      username={username}
      email={email}
      password={password}
      invalidUsername={invalidUsername}
      invalidEmail={invalidEmail}
      setUsername={username => setUsername(username)}
      invalidPassword={invalidPassword}
      setEmail={email => setEmail(email)}
      setPassword={password => setPassword(password)}
      Submit={Submit}
    />
  );
};

export default LogInViewModel;
