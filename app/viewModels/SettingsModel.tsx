import React from "react";
import SettingsScreen from "../views/SettingsScreen/SettingsScreen";

interface SettingsModelProps {
    navigation: any
}

const SettingsModel = (props: SettingsModelProps) => {
    const { navigation } = props;
    return (
        <SettingsScreen navigation={navigation} />
    )
}

export default SettingsModel;