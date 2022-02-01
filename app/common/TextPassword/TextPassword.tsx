import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { constants, icons } from "../../constants";
import styles from './styles';

interface PasswordProps {
    onchangeText: (t: string) => void
    name: string
    setSwitch: (t: boolean) => void
    Switch: boolean
}

const TextPasswords = (props: PasswordProps) => {
    const [eye, seteye] = useState(true)
    return (
        <View style={styles.container}>

            <View style={styles.textcontainer}>

                <Text style={styles.PasswordText}>{props.name}</Text>

                {props.Switch && <Text style={styles.invalidText}>{props.name} {constants.keywords.error_msg}</Text>}

            </View>

            <View style={styles.InputContainer}>

                <TextInput
                    style={styles.InputText}
                    numberOfLines={1}
                    secureTextEntry={eye}
                    onChangeText={(text) => { props.onchangeText(text), props.setSwitch(false) }}
                />
                {eye ?
                    <TouchableOpacity onPress={() => seteye(!eye)}>
                        <Image source={icons.eye_close} style={styles.icon} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => seteye(!eye)}>
                        <Image source={icons.eye} style={styles.icon} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );

}

export default TextPasswords;