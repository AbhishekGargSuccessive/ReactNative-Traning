import React, { useState } from "react";
import SignIn from "../views/SignIn/SignIn";

interface SignInModel {
    navigation: any
}

const SignInModel = (props: SignInModel) => {
    const { navigation } = props
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SignIn
            navigation={navigation}
            isEnabled={isEnabled}
            toggleSwitch={toggleSwitch}
        />
    )
}

export default SignInModel;