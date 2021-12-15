import React from "react";
import ProfileScreen from '../views/ExternalScreen/Profile/ProfileScreen'

interface ProfileProps {
    navigation: any
}

const ProfileScreenModel = (props: ProfileProps) => {
    const { navigation } = props
    return (
        <ProfileScreen navigation={navigation} />
    )
}

export default ProfileScreenModel;