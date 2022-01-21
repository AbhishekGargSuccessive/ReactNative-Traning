import React, { useState } from "react";
import ChangePassword from '../views/ChangePassword/ChangePassword'
import { ValidationPassword, ValidationConfirmPassword } from '../config/FormValidation'

interface PasswordModel {
    navigation: any
}

const ChangePasswordModel = (props: PasswordModel) => {
    const { navigation } = props

    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const [invalidPassword, setInvalidPassword] = useState(false)
    const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false)

    const Click = () => {

        let validate = ValidationPassword(password)
        setInvalidPassword(validate)

        validate = ValidationConfirmPassword(password, confirmPassword)
        setInvalidConfirmPassword(validate)
    }

    return (
        <ChangePassword
            navigation={navigation}

            Click={Click}

            password={password}
            confirmPassword={confirmPassword}

            invalidPassword={invalidPassword}
            invalidConfirmPassword={invalidConfirmPassword}

            setInvalidPassword={(invalidPassword) => setInvalidPassword(invalidPassword)}
            setInvalidConfirmPassword={(invalidConfirmPassword) => setInvalidConfirmPassword(invalidConfirmPassword)}

            setPassword={(password) => setPassword(password)}
            setConfirmPassword={(confirmPassword) => setconfirmPassword(confirmPassword)}
        />
    )
}

export default ChangePasswordModel;