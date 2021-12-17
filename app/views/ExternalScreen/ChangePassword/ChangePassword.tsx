import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../ChangePassword/styles'
import { useOrientation } from '../../../config/orientation'
import { Hidden } from '../../../components/Logo'

interface PasswordModel {
    navigation: any
    o: any
}

const ChangePassword = (props: PasswordModel) => {
    const { navigation } = props;
    const o = useOrientation()
    return (
        <ScrollView>
            <Image source={require('../../../assets/logo.png')} style={styles(o).image} />

            <Text style={styles(o).text1}>Welcome!</Text>

            <View style={styles(o).viewStyle}>
                <TextInput
                    style={styles(o).textInput}
                    placeholder='Current Password'
                    placeholderTextColor='lightslategrey'
                />
                <Hidden />
            </View>

            <View style={styles(o).viewStyle}>
                <TextInput
                    style={styles(o).textInput}
                    placeholder='Password'
                    placeholderTextColor='lightslategrey'
                />
                <Hidden />
            </View>

            <View style={styles(o).viewStyle}>
                <TextInput
                    style={styles(o).textInput}
                    placeholder='Confirm Password'
                    placeholderTextColor='lightslategrey'
                />
                <Hidden />
            </View>

            <TouchableOpacity style={styles(o).button}>
                <Text style={styles(o).buttonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles(o).button2} onPress={() => { navigation.goBack('') }}>
                <Text style={styles(o).buttonText2}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ChangePassword;