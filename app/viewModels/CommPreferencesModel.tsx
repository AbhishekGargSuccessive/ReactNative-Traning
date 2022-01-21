import React from "react";
import Communication from "../views/CommunicationPreferences/CommPreferences";

interface CommunicationProps {
    navigation: any
}

const CommunicationModel = (props: CommunicationProps) => {
    const { navigation } = props;
    return (
        <Communication navigation={navigation} />
    )
}

export default CommunicationModel;