import React, { useState } from "react";
import SignUpScreen from "../views/SignUp/SignUp";
import { EmailValidation, UsernameValidation, PasswordValidation } from '../config/validation'

interface SignUpModel {
    navigation: any
}

const SignUpModel = (props: SignUpModel) => {
    const { navigation } = props;

    const [email, setEmail] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false)

    const [username, setUsername] = useState('')
    const [invalidUsername, setInvalidUsername] = useState(false)

    const [password, setPassword] = useState("");
    const [invalidPassword, setInvalidPassword] = useState(false)

    const Submit = () => {
        let validate = EmailValidation(email)
        setInvalidEmail(validate)

        validate = UsernameValidation(username)
        setInvalidUsername(validate)

        validate = PasswordValidation(password)
        setInvalidPassword(validate)
    }
    return (
        <SignUpScreen
            navigation={navigation}

            email={email}
            username={username}
            password={password}

            invalidEmail={invalidEmail}
            invalidUsername={invalidUsername}
            invalidPassword={invalidPassword}

            setEmail={(email) => setEmail(email)}
            setUsername={(username) => setUsername(username)}
            setPassword={(password) => setPassword(password)}

            setInvalidEmail={(isvalidEmail) => setInvalidEmail(isvalidEmail)}
            setInvalidUsername={(invalidUsername) => setInvalidUsername(invalidUsername)}
            setInvalidPassword={(invalidPassword) => setInvalidPassword(invalidPassword)}

            Submit={Submit}
        />
    )
}

export default SignUpModel;