import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {constants, icons} from '../../constants';
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
        {Switch && (
          <Text style={styles.invalidText}>
            {constants.keywords.invalid} {name}
          </Text>
        )}
      </View>

      <View style={styles.InputContainer}>
        <TextInput
          style={styles.InputText}
          numberOfLines={1}
          keyboardType={'email-address'}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={text => {
            onchangeText(text), setCheck(true);
          }}
        />
        {check && (
          <TouchableOpacity onPress={() => onchangeText('')}>
            <Image
              source={!Switch ? icons.check_circle : icons.cancel}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputs;
