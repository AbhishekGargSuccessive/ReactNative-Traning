import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icons } from "../../config";
import styles from './styles';

interface changePassword {
    placeHolder: string
    o: any
    setCommonText: (t: string) => void
    setSwitch: (t: boolean) => void
    commonText: string
    Switch: boolean
}

const ChangePasswordPlaceholder = (props: changePassword) => {

    const [eye, seteye] = useState(true)

    return (
        <View>
            <View style={styles(props.o).container}>
                <TextInput
                    style={styles(props.o).inputText}
                    maxLength={30}
                    autoCapitalize="none"
                    keyboardType="name-phone-pad"
                    secureTextEntry={eye}
                    placeholder={props.placeHolder}
                    placeholderTextColor='black'
                    onChangeText={(text) => { props.setCommonText(text), props.setSwitch(false) }}
                />
                {eye ?
                    <TouchableOpacity onPress={() => seteye(!eye)} style={styles(props.o).imagebutton}>
                        <Image source={Icons.hidden} style={styles(props.o).image} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => seteye(!eye)} style={styles(props.o).imagebutton}>
                        <Image source={Icons.eye} style={styles(props.o).image} />
                    </TouchableOpacity>
                }
            </View>
            {props.Switch && <Text style={styles(props.o).errormsg}>{props.commonText} is invalid</Text>}
        </View>
    )
}

export default ChangePasswordPlaceholder;

