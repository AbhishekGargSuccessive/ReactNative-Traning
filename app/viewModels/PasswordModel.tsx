import React from "react";
import PasswordScreen from "../views/Password_Recovery/password";

interface PasswordModel {
    navigation: any
}

const PasswordModel = (props: PasswordModel) => {
    const { navigation } = props;
    return (
        <PasswordScreen navigation={navigation} />
    )
}

export default PasswordModel;