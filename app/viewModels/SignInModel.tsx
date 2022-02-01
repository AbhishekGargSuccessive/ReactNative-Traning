import React, { useEffect, useState } from "react";
import SignIn from "../views/SignIn/SignIn";
import { EmailValidation, PasswordValidation } from '../config/validation'

interface SignInModel {
    navigation: any
}

const SignInModel = (props: SignInModel) => {
    const { navigation } = props
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false)

    const [password, setPassword] = useState("");
    const [invalidPassword, setInvalidPassword] = useState(false)

    const Submit = () => {
        let validate = EmailValidation(email)
        setInvalidEmail(validate)

        validate = PasswordValidation(password)
        setInvalidPassword(validate)
    }
    return (
        <SignIn
            navigation={navigation}

            isEnabled={isEnabled}
            toggleSwitch={toggleSwitch}

            email={email}
            password={password}

            invalidEmail={invalidEmail}
            invalidPassword={invalidPassword}

            setEmail={(email) => setEmail(email)}
            setPassword={(password) => setPassword(password)}

            setInvalidEmail={(isvalidEmail) => setInvalidEmail(isvalidEmail)}
            setInvalidPassword={(invalidPassword) => setInvalidPassword(invalidPassword)}

            Submit={Submit}
        />
    )
}

export default SignInModel;