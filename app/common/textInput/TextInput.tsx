import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

interface TextProps {
  name: string;
  Switch: boolean;
  placeholder: string;
  placeholderTextColor: any;
  onchangeText: (t: string) => void;
}

const TextInputs = (props: TextProps) => {
  const {name, Switch, onchangeText, placeholder, placeholderTextColor} = props;
  const [check, setCheck] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.emailText}>{props.name}</Text>
        {Switch && <Text style={styles.invalidText}>Invalid {name}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          numberOfLines={1}
          keyboardType={'email-address'}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={text => {
            onchangeText(text), setCheck(true);
          }}
        />
      </View>
    </View>
  );
};

export default TextInputs;
