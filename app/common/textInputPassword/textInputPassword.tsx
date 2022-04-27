import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

interface PasswordProps {
  onchangeText: (t: string) => void;
  name: string;
  Switch: boolean;
}

const TextInputPassword = (props: PasswordProps) => {
  const [eye, seteye] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.PasswordText}>{props.name}</Text>
        {props.Switch && (
          <Text style={styles.invalidText}>
            {props.name} must be 8 characters
          </Text>
        )}
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.InputText}
          numberOfLines={1}
          secureTextEntry={eye}
          onChangeText={text => {
            props.onchangeText(text);
          }}
        />
        {eye ? (
          <TouchableOpacity onPress={() => seteye(!eye)}>
            <Image
              source={require('../../assets/icons/eye_close.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => seteye(!eye)}>
            <Image
              source={require('../../assets/icons/eye.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputPassword;
