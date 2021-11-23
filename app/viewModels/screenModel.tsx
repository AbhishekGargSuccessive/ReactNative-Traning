import React, { useState } from "react";
import SignUpScreen from "../views/normalSignUp/screens";
import { ValidationUsername, ValidationEmail, ValidationPassword, ValidationConfirmPassword } from '../config/validation';

interface RootScreenModel {
    navigation: any
}

const ScreenModel = (props: RootScreenModel) => {
    const { navigation } = props;
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [invalidUsername, setInvalidUsername] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false)


    const ClickHandle = () => {
        let validate = ValidationUsername(username)
        setInvalidUsername(validate)

        validate = ValidationEmail(email)
        setInvalidEmail(validate)

        validate = ValidationPassword(password)
        setInvalidPassword(validate)

        validate = ValidationConfirmPassword(password, confirmPassword)
        setInvalidConfirmPassword(validate)
    }

    return (
        <SignUpScreen

            username={username}
            email={email}
            password={password}
            confirmPassword={confirmPassword}

            navigation={navigation}

            // ClickHandle={() => ClickHandle()}
            ClickHandle={ClickHandle}

            invalidUsername={invalidUsername}
            invalidEmail={invalidEmail}
            invalidPassword={invalidPassword}
            invalidConfirmPassword={invalidConfirmPassword}

            setInvalidUsername={(invalidUsername) => setInvalidUsername(invalidUsername)}
            setInvalidEmail={(invalidEmail) => setInvalidEmail(invalidEmail)}
            setInvalidPassword={(invalidPassword) => setInvalidPassword(invalidPassword)}
            setInvalidConfirmPassword={(invalidConfirmPassword) => setInvalidConfirmPassword(invalidConfirmPassword)}

            setusername={(username) => setusername(username)}
            setEmail={(email) => setEmail(email)}
            setPassword={(password) => setPassword(password)}
            setConfirmPassword={(confirmPassword) => setConfirmPassword(confirmPassword)}

        />
    )
}

export default ScreenModel;
