import React from "react";
import SignUpScreen from "../views/SignUp/SignUp";

interface SignUpModel {
    navigation: any
}

const SignUpModel = (props: SignUpModel) => {
    const { navigation } = props;
    return (
        <SignUpScreen navigation={navigation} />
    )
}

export default SignUpModel;