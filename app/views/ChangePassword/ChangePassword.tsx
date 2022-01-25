import React from "react";
import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ChangePasswordPlaceholder from "../../components/changePassword/changePassword";
import { Constant, Icons } from "../../config";
import { useOrientation } from "../../config/orientation";
import styles from './styles'

interface ConfirmPassword {
    navigation: any

    Click: () => void

    invalidPassword: boolean
    invalidConfirmPassword: boolean

    password: string
    confirmPassword: string

    setInvalidPassword: (text: boolean) => void;
    setInvalidConfirmPassword: (text: boolean) => void;

    setPassword: (text: string) => void;
    setConfirmPassword: (text: string) => void;

}

const ChangePasword = (props: ConfirmPassword) => {

    const o = useOrientation()

    const {
        invalidPassword,
        invalidConfirmPassword,
        password,
        confirmPassword,
        setPassword,
        setConfirmPassword,
        setInvalidPassword,
        setInvalidConfirmPassword,
        Click,

    } = props;

    return (
        <KeyboardAvoidingView style={styles(o).container}>

            <View style={styles(o).header}>

                <Image source={Icons.logo} style={styles(o).headerImage} />

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={styles(o).headerText}>{Constant.Welcome}</Text>

                <ChangePasswordPlaceholder
                    placeHolder='Current Password'
                    o={o}
                    commonText={password}
                    Switch={false}
                    setSwitch={setInvalidPassword}
                    setCommonText={(password) => setPassword(password)}
                />

                <ChangePasswordPlaceholder
                    placeHolder='Password'
                    o={o}
                    commonText={password}
                    Switch={invalidPassword}
                    setSwitch={setInvalidPassword}
                    setCommonText={(password) => setPassword(password)}
                />

                <ChangePasswordPlaceholder
                    placeHolder='Confirm Password'
                    o={o}
                    commonText={confirmPassword}
                    Switch={invalidConfirmPassword}
                    setSwitch={setInvalidConfirmPassword}
                    setCommonText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                />

                <TouchableOpacity style={styles(o).continueButton} onPress={() => Click()}>
                    <Text style={styles(o).continueButtonText}>{Constant.Continue}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles(o).backButton} onPress={() => { props.navigation.goBack('') }}>
                    <Text style={styles(o).backButtonText}>{Constant.Back}</Text>
                </TouchableOpacity>

            </ScrollView>

        </KeyboardAvoidingView>

    )
}

export default ChangePasword;