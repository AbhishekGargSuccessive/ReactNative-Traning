import React from "react";
import ChangePassword from '../views/ExternalScreen/ChangePassword/ChangePassword'

interface PasswordModel {
    navigation: any
}

const ChangePasswordModel = (props: PasswordModel) => {
    const { navigation } = props
    return (
        <ChangePassword navigation={navigation} o={undefined} />
    )
}

export default ChangePasswordModel;